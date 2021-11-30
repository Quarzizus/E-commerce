import React from "react";
import { mount, shallow } from "enzyme";
import ProviderMock from "../../__mocks__/ProviderMock";
import Product from "../../components/Product";
import ProductMock from "../../__mocks__/ProductMock";

describe("<Product/>", () => {
  test("Render of component of Product", () => {
    const product = shallow(
      <ProductMock>
        <Product />
      </ProductMock>
    );
    expect(product.length).toEqual(1);
  });
  test("Buy button", () => {
    const handlerAddToCart = jest.fn();
    const wrapper = mount(
      <ProviderMock>
        <Product product={ProviderMock} handlerAddToCart={handlerAddToCart} />
      </ProviderMock>
    );
    wrapper.find("button").simulate("click");
    expect(handlerAddToCart).toHaveBeenCallTimes(1);
  });
});
