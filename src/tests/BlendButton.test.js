import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShallowRenderer from "react-test-renderer/shallow";

import BlendButton from "../BlendButton";

Enzyme.configure({ adapter: new Adapter() });

describe("<BlendButton />", () => {
  const renderer = new ShallowRenderer();
  it("should render as a button", () => {
    renderer.render(<BlendButton />);
    const result = renderer.getRenderOutput();
    expect(result.type).toBe("button");
  });

  it("btnText prop works", () => {
    renderer.render(<BlendButton btnText={"Jest"} />);
    const result = renderer.getRenderOutput();
    expect(result.props.children).toEqual("Jest");
  });

  it("colorMain prop works", () => {
    renderer.render(<BlendButton colorMain={"red"} />);
    const result = renderer.getRenderOutput();
    expect(result.props.style.background).toEqual("red");
  });

  it("borderRadius prop works", () => {
    renderer.render(<BlendButton borderRadius={"20px"} />);
    const result = renderer.getRenderOutput();
    expect(result.props.style.borderRadius).toEqual("20px");
  });

  it("padding prop works", () => {
    renderer.render(<BlendButton padding={"15px"} />);
    const result = renderer.getRenderOutput();
    expect(result.props.style.padding).toEqual("15px");
  });

  it("fontSize prop works", () => {
    renderer.render(<BlendButton fontSize={"3vw"} />);
    const result = renderer.getRenderOutput();
    expect(result.props.style.fontSize).toEqual("3vw");
  });
});
