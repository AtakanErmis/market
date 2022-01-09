import { screen } from "@testing-library/react";
import { testRender as render } from "@utils/testRender";
import BasketItem from "@components/main/basket/BasketItem";

const useDispatch = jest.spyOn(require("react-redux"), "useDispatch");

describe("CheckboxGroup", () => {
  const props = {
    basketItem: {
      product: {
        tags: ["tag1", "tag2"],
        price: 9.99,
        name: "name",
        description: "description",
        slug: "slug",
        added: 23424321,
        manufacturer: "manufacturer",
        itemType: "itemType",
      },
      quantity: 2,
      totalPrice: 19.98,
    },
  };

  it("renders item correctly with given props", () => {
    render(<BasketItem {...props} />);
    expect(screen.getByTestId("basket-item-price").textContent).toBe(
      `₺${props.basketItem.totalPrice}`
    );
    expect(screen.getByTestId("basket-item-name").textContent).toBe(
      props.basketItem.product.name
    );
    expect(screen.getByTestId("basket-item-quantity").textContent).toBe(
      String(props.basketItem.quantity)
    );
  });

  it("plus and minus buttons works as expected", () => {
    const dispatchCallback = jest.fn();
    useDispatch.mockImplementation(() => {
      return (action) => {
        dispatchCallback(action);
      };
    });

    render(<BasketItem {...props} />);

    screen.getByTestId("basket-item-plus").click();
    expect(dispatchCallback).toHaveBeenCalledWith({
      type: "basket/setItemCount",
      payload: {
        slug: props.basketItem.product.slug,
        count: props.basketItem.quantity + 1,
      },
    });

    screen.getByTestId("basket-item-minus").click();
    expect(dispatchCallback).toHaveBeenCalledWith({
      type: "basket/setItemCount",
      payload: {
        slug: props.basketItem.product.slug,
        count: props.basketItem.quantity - 1,
      },
    });
  });
});
