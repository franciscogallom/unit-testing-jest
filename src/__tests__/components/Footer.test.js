import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
    const footer = mount(<Footer />);
    test('component rendering', () => {
        expect(footer.length).toEqual(1);
    });
    test('title rendering', () => {
        expect(footer.find('.Footer-title').text()).toEqual('Platzi Store')
    })
})
