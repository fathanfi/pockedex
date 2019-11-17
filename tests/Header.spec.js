import React from 'react';
import {
  Navbar,
} from 'react-bootstrap';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({ adapter: new Adapter() });

describe('App component', () => {
    it('show title Pokefat', () => {
      const wrapper = shallow(<span className="tail-text">okefat</span>);
      expect(wrapper.text()).toEqual('okefat');
    });
});

describe("Shortcuts", () => {
    test("The main Class exists", () => {
      const wrapper = shallow(<Navbar.Brand />);
      expect(
        wrapper.find(".tail-wrapper").exists()
      )
    });
});