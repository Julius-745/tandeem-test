import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom"
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { theme } from "../assets/theme";
import store from "../redux/store";
import { i18n } from '../i18n';
import Banner from '../components/section/banner';
import { IWheater } from '../components/card';
import {vi} from "vitest"

vi.mock('../components/card', () => ({
  CardWeather: ({ location, temp, humidity, wind, visibility, pressure, feelsLike, weather, icon, unit, date }: IWheater) => (
    <div data-testid="weather-card">
      <p>{location}</p>
      <p>{temp}</p>
      <p>{humidity}</p>
      <p>{wind}</p>
      <p>{visibility}</p>
      <p>{pressure}</p>
      <p>{feelsLike}</p>
      <p>{weather}</p>
      <img src={icon} alt="weather-icon" />
      <p>{unit}</p>
      <p>{date}</p>
    </div>
  )
}));

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <ChakraProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <BrowserRouter>
            {ui}
          </BrowserRouter>
        </Provider>
      </I18nextProvider>
    </ChakraProvider>
  );
};

describe('Banner Component', () => {
  test('renders input and search button', () => {
    renderWithProviders(<Banner />);
    expect(screen.getByPlaceholderText('Search City')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  test('displays loading spinner when loading is true', () => {
    store.dispatch({ type: 'weather/fetchWeather/pending' });

    renderWithProviders(<Banner />);
    expect(screen.getByRole('status')).toBeInTheDocument(); 
  });

  test('displays CardWeather component with correct data after search', async () => {
    const mockWeatherData = {
      name: 'New York',
      main: { temp: 22, humidity: 60, pressure: 1012, feels_like: 21 },
      wind: { speed: 5 },
      visibility: 10000,
      weather: [{ description: 'clear sky', icon: '01d' }]
    };

    store.dispatch({ type: 'weather/setCity', payload: 'New York' });
    store.dispatch({ type: 'weather/fetchWeather/fulfilled', payload: mockWeatherData });

    renderWithProviders(<Banner />);
    
    expect(screen.getByText('New York')).toBeInTheDocument();
    expect(screen.getByText('22')).toBeInTheDocument();
    expect(screen.getByText('clear sky')).toBeInTheDocument();
  });

  test('shows toast error when an invalid city is searched', async () => {
    
    store.dispatch({
      type: 'weather/fetchWeather/rejected',
      payload: 'City not found'
    });

    renderWithProviders(<Banner />);
    
   
    fireEvent.click(screen.getByRole('button', { name: /search/i }));
    
    
    const toastMessage = await screen.findByText((content, element) => 
      content.includes('Please Search Valid City')
    );
    
    expect(toastMessage).toBeInTheDocument();
  });
});
