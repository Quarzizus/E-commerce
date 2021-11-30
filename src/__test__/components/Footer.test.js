import React from "react";
import { mount } from "enzyme";
import Footer from "../../components/Footer";

describe("<Footer/>", () => {
  test("Render of component Footer", () => {
    // mount -> montar en el DOM
    const footer = mount(<Footer />);
    // cantidad de childrens
    expect(footer.length).toEqual(1);
  });
  test("Render of title", () => {
    const footer = mount(<Footer />);
    expect(footer.find(".Footer_name").text()).toEqual("Quarzizus");
  });
});
