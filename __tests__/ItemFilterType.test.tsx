import { screen } from "@testing-library/react";
import { testRender as render } from "@utils/testRender";
import ItemTypeFilter from "@components/main/product/ItemTypeFilter";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("CheckboxGroup", () => {
  const props = {
    itemTypes: ["itemType1", "itemType2"],
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
      expect(screen.getByText(itemType)).toBeInTheDocument();
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
      screen.getByText(itemType).click();
      expect(routerPushCallback).toHaveBeenCalledWith({
        pathname: "/",
        query: {
          [props.filterKey]: itemType,
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
        [props.filterKey]: props.itemTypes[0],
      },
    });
  });
});
