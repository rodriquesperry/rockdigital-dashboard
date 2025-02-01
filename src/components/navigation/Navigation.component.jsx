'use client';

import React from 'react';
import { useTheme } from '@/components/theme/ThemeProvider.component';
import { MdOutlineLightMode } from 'react-icons/md';
import { CiLight } from "react-icons/ci";

import styles from './navigation.module.css';

const Navigation = () => {
	const { switchThemes } = useTheme();
	return (
		<nav className={styles.main_nav}>
			<div className={styles.theme_icon}>
				<a onClick={switchThemes} type="button"><CiLight size={30} /></a> 
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
