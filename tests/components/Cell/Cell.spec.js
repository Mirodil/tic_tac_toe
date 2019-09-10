import React from 'react';
import sinon from 'sinon';
import Cell from '../../../src/components/Cell';
import { shallow, mount } from 'enzyme';

const props = { state: null, index: 0, onClick: sinon.spy() };

it('expect to render empty div', () => {
    const cell = shallow(<Cell {...props} />);
    expect(cell.children().length).toEqual(0);
});

it('expect to render Xs svg element', () => {
    const newProps = { ...props, state: 'X' };
    const cell = shallow(<Cell {...newProps} />);
    const svg = cell.find('.xs');
    expect(svg.prop('aria-label')).toEqual('X');
});

it('expect to render Os svg element', () => {
    const newProps = { ...props, state: 'O' };
    const cell = shallow(<Cell {...newProps} />);
    const svg = cell.find('.os');
    expect(svg.prop('aria-label')).toEqual('O');
});

it('expect to call a function on button click', () => {
    const footer = shallow(<Cell {...props} />);
    footer.find('.cell').simulate('click');
    expect(props.onClick.callCount).toEqual(1);
});