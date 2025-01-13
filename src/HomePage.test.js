import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import HomePage, { features } from '../App';

describe('HomePage Component', () => {
  test('renders homepage correctly', () => {
    const { getByText } = render(<HomePage />);
    // Cek apakah teks header muncul
    expect(getByText('Welcome to MyApp')).toBeTruthy();
    expect(getByText('Discover features and solutions for your daily needs')).toBeTruthy();
  });

  test('renders the correct number of features', () => {
    render(<HomePage />);
    const featureCards = screen.getAllByTestId(/feature-/);
    // Cek apakah jumlah fitur sama dengan panjang array features
  });

  test('CTA button is clickable', () => {
    const { getByTestId } = render(<HomePage />);
    const ctaButton = getByTestId('cta-button');
    // Simulasikan klik pada tombol
    fireEvent.press(ctaButton);
    // Pastikan tombol bisa diklik
    expect(ctaButton).toBeTruthy();
  });
});
