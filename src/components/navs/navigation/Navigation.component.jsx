'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import profile_pic from '@/assets/profile_pic.avif';
import { useTheme } from 'next-themes';
import { MdOutlineLightMode } from 'react-icons/md';
import { MdOutlineDarkMode } from 'react-icons/md';

import styles from './navigation.module.css';

const Navigation = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(true);
	const { setTheme, theme } = useTheme();
	return (
		<>
			<nav className={styles.main_nav}>
				<div className={styles.theme_icon}>
					<a
						onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
						type='button'
						className={styles.theme_button}
					>
						{theme === 'dark' ? (
							<MdOutlineDarkMode className={styles.darkIcon} size={28} />
						) : (
							<MdOutlineLightMode className={styles.lightIcon} size={28} />
						)}
					</a>
				</div>
				<div className={styles.nav_links}>
					<div className={`${styles.logout_container}`}>
						<a href='/' className={`${styles.logout}`}>
							Log out
						</a>
					</div>
					<div className={styles.profile_pic}>
						<a href='/profile'>
							<Image src={profile_pic} alt='Profile picture' />
						</a>
					</div>
				</div>
			</nav>
			<div className={styles.border_bottom}></div>
		</>
	);
};

export default Navigation;
