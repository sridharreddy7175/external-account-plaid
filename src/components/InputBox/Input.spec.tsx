import React from "react";
import InputBox from "./InputBox";
import renderer from "react-test-renderer";

describe("InputBox", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <InputBox type="box" name="email" value="email" onChange="OnChange" />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

export default null;
