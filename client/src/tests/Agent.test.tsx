import agent from "../api/agent";
import { ClientFormValues } from "../models/client";
import { IOrder } from "../models/order";


describe('Agent functions', () => {
    test('fetches current account information', async () => {
        const accountInfo = await agent.Account.current();
        expect(accountInfo).toBeDefined();
    });

    test('logs in a client', async () => {
        const loginDetails: ClientFormValues = {
            firstName: 'Vlada',
            lastName: 'Gromova',
            email: 'vladagromova1106@gmail.com',
            sub: '' 
        };
        const loggedInClient = await agent.Account.login(loginDetails);
        expect(loggedInClient).toBeDefined();
    });

    test('creates a new order', async () => {
        const newOrder: IOrder = {
            clientId: 1,
            inquiryId: 1,
            companyName: 'DHL',
            price: 100 
        };
        const createdOrder = await agent.Orders.post(newOrder);
        expect(createdOrder).toBeDefined();
    });

    test('fetches a list of orders', async () => {
        const ordersList = await agent.Orders.get();
        expect(Array.isArray(ordersList)).toBe(true);
    });

    test('fetches a list of inquiries', async () => {
        const inquiriesList = await agent.Inquiries.get();
        expect(Array.isArray(inquiriesList)).toBe(true);
    });
});
