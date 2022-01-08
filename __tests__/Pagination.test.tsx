import { screen } from "@testing-library/react";
import { testRender as render } from "@utils/testRender";
import Pagination from "@components/main/product/Pagination";
import config from "@config/index";

describe("CheckboxGroup", () => {
  const onChange = jest.fn();
  const props = {
    count: 1000,
    onChange,
  };

  it("renders pagination component correctly with given props", () => {
    render(<Pagination {...props} />);
    expect(screen.getAllByTestId("pagination-item")[0].textContent).toBe("1");
    expect(screen.getAllByTestId("pagination-item")[8].textContent).toBe(
      `${Math.ceil(props.count / config.pagination.limit)}`
    );
  });

  it("switches between pages correctly", () => {
    render(<Pagination {...props} />);

    screen.getByText("2").click();
    expect(onChange).toHaveBeenCalledWith(2);
    expect(screen.getByText("2")).toHaveClass("active");

    screen.getByTestId("pagination-next").click();
    expect(onChange).toHaveBeenCalledWith(3);
    expect(screen.getByText("3")).toHaveClass("active");

    screen.getByTestId("pagination-prev").click();
    expect(onChange).toHaveBeenCalledWith(2);
    expect(screen.getByText("2")).toHaveClass("active");

    screen.getByText("...").click();
    expect(onChange).toHaveBeenCalledWith(8);
    expect(screen.getByText("8")).toHaveClass("active");

    screen.getAllByText("...")[0].click();
    expect(onChange).toHaveBeenCalledWith(5);
    expect(screen.getByText("5")).toHaveClass("active");
  });
});
