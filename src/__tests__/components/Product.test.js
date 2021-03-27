import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import PorductMock from '../../__mocks__/ProductMock';
import Product from '../../components/Product';
import { experiments } from 'webpack';

describe('<Product />', () => {
  test('component renderig', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>
    );
    expect(product.length).toEqual(1);
  });
});
