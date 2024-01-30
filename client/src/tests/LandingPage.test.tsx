import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LandingPage from '../LandigPage/LandingPage';


// integration
describe('LandingPage component', () => {
    test('renders LandingPage component', () => {
        render(
            <MemoryRouter>
                <LandingPage />
            </MemoryRouter>
        );

        const landingPageElement = screen.getByTestId('landing-page');
        expect(landingPageElement).toBeDefined();
    });

    test('displays "Load Form" button', () => {
        render(
            <MemoryRouter>
                <LandingPage />
            </MemoryRouter>
        );

        const loadFormButton = screen.getByTestId('landing-button');
        expect(loadFormButton).toBeDefined();
    });

    test('navigates to "/form" on button click', () => {
        render(
            <MemoryRouter>
                <LandingPage />
            </MemoryRouter>
        );

        const loadFormButton = screen.getByTestId('landing-button');
        fireEvent.click(loadFormButton);

        expect(window.location.pathname).toBe('/form'); 
    });

    test('navigates to "/login" when Google login is successful', () => {
        (window as any).google = {
            accounts: {
                id: {
                    initialize: jest.fn((options) => {
                        options.callback({ credential: 'mockCredential' });
                    }),
                    renderButton: jest.fn(),
                    prompt: jest.fn(),
                },
            },
        };

        render(
            <MemoryRouter>
                <LandingPage />
            </MemoryRouter>
        );

        expect(window.location.pathname).toBe('/login');
    });

    test('does not navigate on Google login failure', () => {
        (window as any).google = {
            accounts: {
                id: {
                    initialize: jest.fn((options) => {
                        options.callback({});
                    }),
                    renderButton: jest.fn(),
                    prompt: jest.fn(),
                },
            },
        };

        render(
            <MemoryRouter>
                <LandingPage />
            </MemoryRouter>
        );

        expect(window.location.pathname).not.toBe('/login'); 
    });
});
