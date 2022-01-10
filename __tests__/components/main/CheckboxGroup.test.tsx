import { screen, fireEvent } from "@testing-library/react";
import { testRender as render } from "@utils/testRender";
import CheckboxGroup from "@components/main/CheckboxGroup";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("CheckboxGroup", () => {
  const props = {
    title: "CheckboxGroup Title",
    filterKey: "filter-key",
    items: [
      {
        name: "Item 1",
        slug: "item-1",
        itemCount: 10,
      },
      {
        name: "Item 2",
        slug: "item-2",
        itemCount: 10,
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
      expect(screen.getByText(item.name).textContent).toBe(
        `${item.name} ${item.itemCount ? `(${item.itemCount})` : ""}`
      );
    });
  });

  it("checks the checkboxes according to value in query string", () => {
    useRouter.mockImplementationOnce(() => ({
      route: "/",
      pathname: "/",
      query: {
        "filter-key": ["item-1"],
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
    useRouter.mockImplementation(() => ({
      route: "/",
      pathname: "/",
      query: "",
      asPath: "",
      push: routerPushMockCallback,
    }));
    render(<CheckboxGroup {...props} />);
    screen.getByText("Item 1").parentElement.querySelector("input").click();
    expect(routerPushMockCallback).toHaveBeenLastCalledWith(
      {
        pathname: "/",
        query: {
          "filter-key": ["item-1"],
        },
      },
      undefined,
      { scroll: false }
    );
  });

  it("filters options when type on search box", () => {
    useRouter.mockImplementationOnce(() => ({
      route: "/",
      pathname: "/",
      query: "",
      asPath: "",
    }));
    render(<CheckboxGroup {...props} hasSearch />);
    const input: HTMLInputElement = screen.getByTestId(
      "checkbox-group-search-box"
    );
    fireEvent.change(input, {
      target: {
        value: "Item 1",
      },
    });
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.queryByText("Item 2")).not.toBeInTheDocument();
  });
});
