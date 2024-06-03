//spendhistory.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import { render, waitFor, screen } from '@testing-library/react';
import { getByText, findByText } from '@testing-library/react';
import TransactionsList from '../../pages/SpendHistory/UI/TransactionsList';
import { fetchTransactions } from '../../api/api';


global.alert = jest.fn();


jest.mock('../../api/api', () => ({
  __esModule: true,
  fetchTransactions: jest.fn(),

}))

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


describe(' transactions list', () => {
  
  beforeAll(() => {
    // Mock implementation of fetchTransactions to return mockData
    fetchTransactions.mockResolvedValue(mockData);
  });
  it('has 1 child', () => {
      const tree = renderer.create(<TransactionsList />).toJSON();
      expect(tree.children.length).toBe(2);
  });
  
  it('renders the title of the page', async () => {
    render(<TransactionsList />);
    expect(screen.getByText('History')).toBeTruthy();
      
  })

  it('displays transactions correctly', async () => {
    render(<TransactionsList />);
    await waitFor(() => {
      mockData.forEach(transaction => {
        expect(screen.getByText(`${transaction.date}: ${transaction.name}: ${transaction.amount}: ${transaction.currency}`)).toBeTruthy();
        
      }); 
      })
    })
  });