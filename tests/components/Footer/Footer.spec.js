import React from 'react';
import sinon from 'sinon';
import Footer from '../../../src/components/Footer';
import { shallow, mount } from 'enzyme';
import { italic } from 'ansi-colors';

it('expect to render without issue', () => {
    const footer = mount(<Footer onClick={() => { }} />);
    const button = footer.find('button');
});

it('expect to call a function on button click', () => {
    const onButtonClick = sinon.spy();
    const footer = shallow(<Footer onClick={onButtonClick} />);
    footer.find('button').simulate('click');
    expect(onButtonClick.callCount).toEqual(1);
});