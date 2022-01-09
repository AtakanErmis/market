import { screen } from "@testing-library/react";
import { testRender as render } from "@utils/testRender";
import CheckboxGroup from "@components/main/CheckboxGroup";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("CheckboxGroup", () => {
  const props = {
    title: "RadioGroup Title",
    filterKey: "filter-key",
    items: [
      {
        name: "Item 1",
        slug: "item-1",
      },
      {
        name: "Item 2",
        slug: "item-2",
      },
    ],
  };

  it("renders checkbox group correctly with given props", () => {
    useRouter.mockImplementation(() => ({
      route: "/",
      pathname: "/",
      query: "",
      asPath: "",
    }));
    render(<CheckboxGroup {...props} />);
    expect(props.title).toBe(
      screen.getByTestId("checkbox-group-title").textContent
    );

    props.items.forEach((item) => {
      expect(item.name).toBe(screen.getByText(item.name).textContent);
    });
  });

  it("checks the checkboxes according to value in query string", () => {
    useRouter.mockImplementationOnce(() => ({
      route: "/",
      pathname: "/",
      query: {
        "filter-key": "item-1",
      },
      asPath: "",
    }));
    render(<CheckboxGroup {...props} />);
    expect(
      screen.getByText("Item 1").parentElement.querySelector("input").checked
    ).toBe(true);
  });

  it("updates the router when an item is checked", () => {
    const routerPushMockCallback = jest.fn((url) => url);
    useRouter.mockImplementationOnce(() => ({
      route: "/",
      pathname: "/",
      query: "",
      asPath: "",
      push: routerPushMockCallback,
    }));
    render(<CheckboxGroup {...props} />);
    screen.getByText("Item 1").parentElement.querySelector("input").click();
    expect(routerPushMockCallback).toHaveBeenCalledWith({
      pathname: "/",
      query: {
        "filter-key": ["item-1"],
      },
    });
  });
});
