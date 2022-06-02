import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";
import renderer from "react-test-renderer";

describe("<Button />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Button buttonName="History" buttonStyles={{ fontSize: "12px" }} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// describe("<Button onClick />", () => {
//   it("renders correctly", () => {
//     const tree = renderer.create(<Button onClick={(f: any) => f} />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
