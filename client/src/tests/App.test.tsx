import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';


test('renders LandingPage when "/" is accessed', () => {
    render(
        <MemoryRouter initialEntries={['/']}>
            <App />
            </MemoryRouter>
    );
    const landingPageElement = screen.getByTestId('landing-page');
    expect(landingPageElement).toBeDefined();
});

test('renders FormComponent when "/form" is accessed', () => {
    render(
        <MemoryRouter initialEntries={['/form']}>
            <App />
            </MemoryRouter>
    );
    const landingPageElement = screen.getByTestId('form-page');
    expect(landingPageElement).toBeDefined();
});

test('renders InfoSummaryComponent when "/summary" is accessed', () => {
    render(
        <MemoryRouter initialEntries={['/summary']}>
            <App />
        </MemoryRouter>
    );
    const landingPageElement = screen.getByTestId('summary-page');
    expect(landingPageElement).toBeDefined();
});

test('renders InfoSummaryComponent when "/orders" is accessed', () => {
    render(
        <MemoryRouter initialEntries={['/orders']}>
            <App />
        </MemoryRouter>
    );
    const landingPageElement = screen.getByTestId('orders-page');
    expect(landingPageElement).toBeDefined();
});

test('renders LogInFormComponent when "/login" is accessed', () => {
    render(
        <MemoryRouter initialEntries={['/login']}>
            <App />
        </MemoryRouter>
    );
    const landingPageElement = screen.getByTestId('login-page');
    expect(landingPageElement).toBeDefined();
});