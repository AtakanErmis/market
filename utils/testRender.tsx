import React from "react";
import { store } from "@stores/store";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

export function testRender(Component: React.ReactNode) {
  return render(<Provider store={store}>{Component}</Provider>);
}
