"use client";

import { createContext, useContext, useState } from "react";
import { GeistProvider, CssBaseline } from "@geist-ui/core";

// Create Theme Context
const ThemeContext = createContext();

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
	const [themeType, setThemeType] = useState("light");

	// Function to toggle theme
	const switchThemes = () => {
		setThemeType((prev) => (prev === "dark" ? "light" : "dark"));
	};

	return (
		<ThemeContext.Provider value={{ themeType, switchThemes }}>
			<GeistProvider themeType={themeType}>
				<CssBaseline />
				{children}
			</GeistProvider>
		</ThemeContext.Provider>
	);
};

// Custom hook to use theme context
export const useTheme = () => useContext(ThemeContext);
