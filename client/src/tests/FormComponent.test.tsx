import axios from 'axios';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FormComponent from '../InquiryForm/FormComponent';

jest.mock('axios');

describe('FormComponent', () => {
    // unit
    test('renders FormComponent', () => {
        render(<FormComponent />);
        const formPageElement = screen.getByTestId('form-page');
        expect(formPageElement).toBeDefined();
    });
    
    // unit
    test('submits form and displays form submitted message', async () => {
        render(<FormComponent />);
        fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

        await waitFor(() => {
            expect(screen.getByText('Form submitted')).toBeDefined();
        });
    });
    
    // unit
    test('handles input changes properly', () => {
        render(<FormComponent />);
        const widthInput = screen.getByLabelText('Width (cm)');
        fireEvent.change(widthInput, { target: { value: '100' } });
        expect(widthInput).toBe('100');
    });
    
    // integration
    test('performs API requests on form submission', async () => {
        const mockedAxios = axios as jest.Mocked<typeof axios>;
        mockedAxios.post.mockResolvedValueOnce({ data: 'some response' });
        mockedAxios.get.mockResolvedValueOnce({ data: { price: 50 } });

        render(<FormComponent />);
        fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

        await waitFor(() => {
            expect(axios.post).toHaveBeenCalledWith('http://localhost:5000/inquiries', expect.any(Object));
        });
    });
    
    // integration
    test('performs API requests with proper data when form is submitted', async () => {
        render(<FormComponent />);
        const widthInput = screen.getByLabelText('Width (cm)');
        const heightInput = screen.getByLabelText('Height (cm)');
        const submitButton = screen.getByRole('button', { name: 'Submit' });

        fireEvent.change(widthInput, { target: { value: '100' } });
        fireEvent.change(heightInput, { target: { value: '200' } });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(axios.post).toHaveBeenCalledWith('http://localhost:5000/inquiries', {
                width: '100',
                height: '200',
            });
        });
    });
});
