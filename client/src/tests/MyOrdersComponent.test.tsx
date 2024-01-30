import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import agent from '../api/agent'; // Update the path to your agent file
import { IOrderDisplay } from '../models/order'; // Update the path to your order model
import MyOrdersComponent from '../MyOrders/MyOrdersComponent';

// Mocking the agent function
jest.mock('../api/agent', () => ({
    Orders: {
        get: jest.fn()
    }
}));


// unit
describe('MyOrdersComponent', () => {
    const mockOrders: IOrderDisplay[] = [
        { id: 1, companyName: 'Company A', price: 100, inquiry: { id: 101, width: 10, height: 20, weight: 500 } },
        { id: 2, companyName: 'Company B', price: 150, inquiry: { id: 102, width: 15, height: 25, weight: 700 } },
    ];

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders MyOrdersComponent and displays order information', async () => {
        (agent.Orders.get as jest.Mock).mockResolvedValueOnce(mockOrders);

        render(<MyOrdersComponent />);

        expect(agent.Orders.get).toHaveBeenCalledTimes(1); 
        expect(agent.Orders.get).toHaveBeenCalledWith(); 

        await waitFor(() => {
            expect(screen.getByTestId('orders-page')).toBeInTheDocument();
            expect(screen.getByText('Company A')).toBeInTheDocument();
            expect(screen.getByText('Company B')).toBeInTheDocument();
        });
    });
});
