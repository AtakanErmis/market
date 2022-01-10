import { screen } from "@testing-library/react";
import { testRender as render } from "@utils/testRender";
import ItemTypeFilter from "@components/main/product/ItemTypeFilter";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("ItemTypeFilter", () => {
  const props = {
    itemTypes: [
      {
        name: "Item Type 1",
        slug: "item-type-1",
      },
      {
        name: "Item Type 2",
        slug: "item-type-2",
      },
    ],
    filterKey: "itemType",
  };

  it("renders item type filters correctly with given props", () => {
    const routerPushCallback = jest.fn();
    useRouter.mockImplementation(() => ({
      route: "/",
      pathname: "/",
      query: "",
      asPath: "",
      push: routerPushCallback,
    }));
    render(<ItemTypeFilter {...props} />);

    props.itemTypes.forEach((itemType) => {
      expect(screen.getByText(itemType.name)).toBeInTheDocument();
    });
  });

  it("changes route correctly on click one of items", () => {
    const routerPushCallback = jest.fn();
    useRouter.mockImplementation(() => ({
      route: "/",
      pathname: "/",
      query: {},
      asPath: "",
      push: routerPushCallback,
    }));
    render(<ItemTypeFilter {...props} />);

    props.itemTypes.forEach((itemType) => {
      screen.getByText(itemType.name).click();
      expect(routerPushCallback).toHaveBeenCalledWith({
        pathname: "/",
        query: {
          [props.filterKey]: itemType.slug,
        },
      });
    });
  });

  it("updates default query string on component load", () => {
    const routerPushCallback = jest.fn();
    useRouter.mockImplementation(() => ({
      route: "/",
      pathname: "/",
      query: {},
      asPath: "",
      push: routerPushCallback,
    }));
    render(<ItemTypeFilter {...props} />);
    expect(routerPushCallback).toHaveBeenCalledWith({
      pathname: "/",
      query: {
        [props.filterKey]: props.itemTypes[0].slug,
      },
    });
  });

  it("updates selected item according to query string", () => {
    const routerPushCallback = jest.fn();
    useRouter.mockImplementationOnce(() => ({
      route: "/",
      pathname: "/",
      query: {
        [props.filterKey]: props.itemTypes[1].slug,
      },
      asPath: "",
      push: routerPushCallback,
    }));
    render(<ItemTypeFilter {...props} />);
    expect(screen.getByText(props.itemTypes[1].name)).toHaveClass("active");
  });
});
