//spendhistory.test.js
import React from 'react';
import renderer from 'react-test-renderer';

import SpendHistory from '../../pages/SpendHistory/UI/SpendHistory';


describe('<SpendHistory />', () => {
    it('has 1 child', () => {
      const tree = renderer.create(<SpendHistory />).toJSON();
      expect(tree.children.length).toBe(1);
    });

    it('shows some data', () => {
        const data = renderer.create(<SpendHistory />.toJSON());
        expect(data).to()
    })
  });