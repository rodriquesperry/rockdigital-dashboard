'use client';

import React from 'react';
import { useTheme } from '@/components/theme/ThemeProvider.component';
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";


import styles from './navigation.module.css';

const Navigation = () => {
	const { themeType, switchThemes } = useTheme();
	return (
		<nav className={styles.main_nav}>
			<div className={styles.theme_icon}>
				<a onClick={switchThemes} type="button">
        {themeType === 'dark' ? <MdOutlineDarkMode className={styles.darkIcon} size={28} /> :<MdOutlineLightMode className={styles.lightIcon} size={28} />}
        </a> 
			</div>
			<div className={styles.nav_links}>
				<a href='/' className={styles.nav_link}>
					Login
				</a>
				<a href='/profile' className={styles.nav_link}>
					Profile Pic
				</a>
			</div>
		</nav>
	);
};

export default Navigation;
