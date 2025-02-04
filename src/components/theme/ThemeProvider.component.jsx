'use client';

import { createContext, useContext, useState, useMemo } from 'react';
import { GeistProvider, CssBaseline } from '@geist-ui/core';
import {
	ThemeProvider as MuiThemeProvider,
	createTheme,
} from '@mui/material/styles';

// Create Theme Context
const ThemeContext = createContext();

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
	const [themeType, setThemeType] = useState('light');

	// Function to toggle theme
	const switchThemes = () => {
		setThemeType((prev) => (prev === 'dark' ? 'light' : 'dark'));
	};

	const muiTheme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: themeType,
				},
			}),
		[themeType]
	);

	return (
		<ThemeContext.Provider value={{ themeType, switchThemes }}>
			<MuiThemeProvider theme={muiTheme}>
				<GeistProvider themeType={themeType}>
					<CssBaseline />
					{children}
				</GeistProvider>
			</MuiThemeProvider>
		</ThemeContext.Provider>
	);
};

// Custom hook to use theme context
export const useTheme = () => useContext(ThemeContext);
