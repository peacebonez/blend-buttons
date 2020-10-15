import React from "react";
import { render } from "@testing-library/react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow, mount } from "enzyme";
import ShallowRenderer from "react-test-renderer/shallow";
import toJson from "enzyme-to-json";

import App from "../App";
import BlendButton from "../BlendButton";

Enzyme.configure({ adapter: new Adapter() });

describe("<App />", () => {
  let wrapper;

  it("renders without crashing", () => {
    wrapper = shallow(<App />);
  });

  it("should render 7 <BlendButton /> components", () => {
    expect(wrapper.find(BlendButton)).toHaveLength(7);
  });
});

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
});
