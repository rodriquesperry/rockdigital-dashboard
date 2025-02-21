'use client';

import React, { useEffect, useState } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider(props) {
	const { children, ...rest } = props;
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		document.documentElement.setAttribute('data-theme', 'light');
	}, []);

	if (!mounted) {
		return <>{children}</>;
	}
	return <NextThemesProvider {...rest}>{children}</NextThemesProvider>;
}
