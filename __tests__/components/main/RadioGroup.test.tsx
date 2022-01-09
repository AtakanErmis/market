import { screen } from "@testing-library/react";
import { testRender as render } from "@utils/testRender";
import RadioGroup from "@components/main/RadioGroup";

describe("RadioGroup", () => {
  const props = {
    title: "RadioGroup Title",
    items: [
      {
        name: "Item 1",
      },
      {
        name: "Item 2",
      },
    ],
  };

  it("renders radio group correctly with given props", () => {
    render(<RadioGroup {...props} />);
    expect(props.title).toBe(
      screen.getByTestId("radio-group-title").textContent
    );

    props.items.forEach((item) => {
      expect(item.name).toBe(screen.getByText(item.name).textContent);
    });
  });

  it("switches between radios correctly on click", () => {
    render(<RadioGroup {...props} />);

    const radios = screen.getAllByTestId("radio-group-item");

    radios[1].click();
    expect(radios[1]).toBeChecked();
    expect(radios[0]).not.toBeChecked();

    radios[0].click();
    expect(radios[0]).toBeChecked();
    expect(radios[1]).not.toBeChecked();
  });
});
