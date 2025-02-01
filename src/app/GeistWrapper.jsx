'use client';
import { GeistProvider, CssBaseline } from '@geist-ui/core';

const GeistWrapper = ({ children, themeType }) => {
	return (
		<GeistProvider themeType={themeType}> 
			<CssBaseline />
			{children}
		</GeistProvider>
	);
};

export default GeistWrapper;
