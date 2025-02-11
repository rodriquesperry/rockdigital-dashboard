import Sidebar from '@/components/navs/sidebar/Sidebar.component';
import Navigation from '@/components/navs/navigation/Navigation.component';
import { ThemeProvider } from '@/components/theme/ThemeProvider.component';
import { Lato, Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';

import './globals.css';

const latoFont = Lato({
	variable: '--font-lato',
	weight: ['100', '300', '400', '700', '900'],
	subsets: ['latin'],
});

const pfDisplay = Playfair_Display({
	variable: '--font-playfair_display',
	weight: ['400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
});

const jakartaFont = Plus_Jakarta_Sans({
	variable: '--font-plus-jakarta-sans',
	subsets: ['latin'],
});

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={`${latoFont.variable} ${pfDisplay.variable} ${jakartaFont}`}
			>
				<ThemeProvider
					// attribute='class'
					defaultTheme='light'
					enableSystem
					disableTransitionOnChange
				>
					<div className='layout'>
						<Sidebar />
						<div className='main-container'>
							<Navigation />
							<main>{children}</main>
						</div>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
