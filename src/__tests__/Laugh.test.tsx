import * as React from "react";
// import * as renderer from "react-test-renderer";s
import * as enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import Laugh from "../components/Laugh";

enzyme.configure({ adapter: new Adapter() });

describe("Laugh Component", () => {
  test("renders laugh text successfully", async () => {
    const component = enzyme.shallow(<Laugh laughType="ha" />);
    const wrapper = component.find(".laughText");

    await (() => expect(wrapper.text()).toEqual("hahaha"));
  });

  test("laugh component throws successfully", async () => {
    await (() =>
      expect(enzyme.shallow(<Laugh laughType="ha" numLaughs={0} />)).toThrow());
  });
});
