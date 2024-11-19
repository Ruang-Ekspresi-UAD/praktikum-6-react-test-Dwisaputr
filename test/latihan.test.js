import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Counter, Greeting, AlertButton } from './latihan';
import '@testing-library/jest-dom';

describe('Counter Component', () => {
  test('Default value must be 0', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counter-value');
    expect(counterValue).toHaveTextContent('0');
  });

  test('Increment works when button clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId('increment-button');
    const counterValue = screen.getByTestId('counter-value');

    fireEvent.click(incrementButton);
    expect(counterValue).toHaveTextContent('1');
  });

  test('Decrement works when button clicked', () => {
    render(<Counter />);
    const decrementButton = screen.getByTestId('decrement-button');
    const counterValue = screen.getByTestId('counter-value');

    fireEvent.click(decrementButton);
    expect(counterValue).toHaveTextContent('-1');
  });

  test('Reset the count using reset button', () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId('increment-button');
    const resetButton = screen.getByTestId('reset-button');
    const counterValue = screen.getByTestId('counter-value');

    fireEvent.click(incrementButton);
    fireEvent.click(resetButton);
    expect(counterValue).toHaveTextContent('0');
});
});

describe('Greeting Component', () => {
test('Displays greeting with my name', () => {
    render(<Greeting name="Aan Saputra" />); // Replace "Aan Saputra" with your name
    const greeting = screen.getByTestId('greeting');
    expect(greeting).toHaveTextContent('Hello, Aan Saputra');
});

test('Displays greeting with lecturer name', () => {
    render(<Greeting name="Pak Farid" />); // Replace "Pak Farid" with your lecturer's name
    const greeting = screen.getByTestId('greeting');
    expect(greeting).toHaveTextContent('Hello, Pak Farid');
});
});

describe('AlertButton Component', () => {
test('Triggers alert with correct message when clicked', () => {
    window.alert = jest.fn(); 
    const message = 'This is an alert message!';
    render(<AlertButton message={message} />);

    const alertButton = screen.getByTestId('alert-button');
    fireEvent.click(alertButton);

    expect(window.alert).toHaveBeenCalledWith(message);
});
});
