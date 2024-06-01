//spendhistory.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import { render, waitFor } from '@testing-library/react';

import TransactionsList from '../../pages/SpendHistory/UI/TransactionsList';
import { fetchTransactions } from '../../api/api';

jest.mock('../../api/api');

const mockData = [
    {
        "id": "66322bd00b774a4a2d33b755",
        "userid": null,
        "date": "2024-04-06",
        "name": "& Other Stories",
        "amount": -78.2,
        "currency": "GBP",
        "categories": null
    },
    {
        "id": "66322bd00b774a4a2d33b756",
        "userid": null,
        "date": "2024-04-23",
        "name": "WHSmith",
        "amount": -2.89,
        "currency": "GBP",
        "categories": null
    },
    {
        "id": "66322bd00b774a4a2d33b757",
        "userid": null,
        "date": "2024-04-24",
        "name": "Las Ca#as Viejas Bar R",
        "amount": -22.44,
        "currency": "GBP",
        "categories": null
    },
    {
        "id": "66322bd00b774a4a2d33b758",
        "userid": null,
        "date": "2024-04-27",
        "name": "Real 93, Bistrobar",
        "amount": -29.19,
        "currency": "GBP",
        "categories": null
    },
    {
        "id": "66322bd00b774a4a2d33b759",
        "userid": null,
        "date": "2024-04-30",
        "name": "Holidays Pot",
        "amount": -0.21,
        "currency": "GBP",
        "categories": null
    }
];


describe('<SpendHistory />', () => {
    it('has 1 child', () => {
      const tree = renderer.create(<TransactionsList />).toJSON();
      expect(tree.children.length).toBe(2);
    });

    it('renders the title of the page', async () => {
        render(<TransactionsList />);
        expect(screen.findByText('History')).toBeTruthy();
    
    })

    it('displays transactions correctly', async () => {
      fetchTransactions.mockResolvedValueOnce(mockData);
      const {findByText} = render(<TransactionsList />);
      await waitFor( async () => {
        for (let transaction of mockData) {
          const textElement = await findByText(`${transaction.date}: ${transaction.name}: ${transaction.amount}`);
          expect(textElement).toBeTruthy();
        }
        })
    })
  });