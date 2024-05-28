//spendhistory.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import SpendHistory from '../../pages/SpendHistory/UI/SpendHistory';


describe('<SpendHistory />', () => {
    it('has 1 child', () => {
      const tree = renderer.create(<SpendHistory />).toJSON();
      expect(tree.children.length).toBe(1);
    });

    it('renders the title of the page', async () => {
        render(<SpendHistory />);
        expect(screen.getByText('History')).toBeTruthy();
    
    })

    it('renders shows some data from the database', () => {
        render(<SpendHistory />);
        expect(screen.getByText('Date')).toBeTruthy();
    })
  });