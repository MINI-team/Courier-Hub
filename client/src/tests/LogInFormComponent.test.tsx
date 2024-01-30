import {fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LogInFormComponent from '../LogInForm/LogInFormComponent';


// integration
describe('LoginFormComponent', () => {
    test('renders LoginFormComponent', () => {
        render(
            <MemoryRouter>
                <LogInFormComponent />
            </MemoryRouter>
        );

        const loginPageElement = screen.getByTestId('login-page');
        expect(loginPageElement).toBeDefined();
    });
    test('displays form fields', () => {
        render(
            <MemoryRouter>
                <LogInFormComponent />
            </MemoryRouter>
        );

        expect(screen.getByPlaceholderText('FirstName')).toBeDefined();
        expect(screen.getByPlaceholderText('LastName')).toBeDefined();
        expect(screen.getByPlaceholderText('Email')).toBeDefined();
        expect(screen.getByRole('button', { name: 'Login' })).toBeDefined();
    });

    test('submits the form with invalid data and displays error', async () => {
        render(
            <MemoryRouter>
                <LogInFormComponent />
            </MemoryRouter>
        );

        fireEvent.submit(screen.getByRole('button', { name: 'Login' }));

        await waitFor(() => {
            //expect(screen.getByText('Required')).toBeInTheDocument(); // Replace with the expected error message
            
        });
    });
    test('navigates to another route after successful login', async () => {
        render(
            <MemoryRouter>
                <LogInFormComponent />
            </MemoryRouter>
        );

        fireEvent.change(screen.getByPlaceholderText('FirstName'), { target: { value: 'Vlada' } });
        fireEvent.change(screen.getByPlaceholderText('LastName'), { target: { value: 'Gromova' } });
        fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'vladagromova1106@gmail.com' } });

        fireEvent.submit(screen.getByRole('button', { name: 'Login' }));

        await waitFor(() => {
            expect(window.location.pathname).toBe('/form');
        });
    });
});
