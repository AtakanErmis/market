import { screen } from "@testing-library/react";
import { testRender as render } from "@utils/testRender";
import ProductItem from "@components/main/product/ProductItem";

const useDispatch = jest.spyOn(require("react-redux"), "useDispatch");

describe("CheckboxGroup", () => {
  const props = {
    product: {
      tags: ["tag1", "tag2"],
      price: 10.99,
      name: "name",
      description: "description",
      slug: "slug",
      added: 23424321,
      manufacturer: "manufacturer",
      itemType: "itemType",
    },
  };

  it("renders item correctly with given props", () => {
    render(<ProductItem {...props} />);
    expect(screen.getByTestId("product-price").textContent).toBe(
      `₺ ${props.product.price}`
    );
    expect(screen.getByTestId("product-name").textContent).toBe(
      props.product.name
    );
  });

  it("adds item to basket as expected", () => {
    const dispatchCallback = jest.fn();
    useDispatch.mockImplementation(() => {
      return (action) => {
        dispatchCallback(action);
      };
    });

    render(<ProductItem {...props} />);
    screen.getByText("Add").click();
    expect(dispatchCallback).toHaveBeenCalledWith({
      type: "basket/addItem",
      payload: props.product,
    });
  });
});
