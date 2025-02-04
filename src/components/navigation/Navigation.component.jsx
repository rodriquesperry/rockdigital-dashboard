'use client';

import React from 'react';
import Image from 'next/image';
import profile_pic from '@/assets/profile_pic.avif';
import { useTheme } from '@/components/theme/ThemeProvider.component';
import { MdOutlineLightMode } from 'react-icons/md';
import { MdOutlineDarkMode } from 'react-icons/md';

import styles from './navigation.module.css';

const Navigation = () => {
	const { themeType, switchThemes } = useTheme();
	return (
		<>
			<nav className={styles.main_nav}>
				<div className={styles.theme_icon}>
					<a onClick={switchThemes} type='button'>
						{themeType === 'dark' ? (
							<MdOutlineDarkMode className={styles.darkIcon} size={28} />
						) : (
							<MdOutlineLightMode className={styles.lightIcon} size={28} />
						)}
					</a>
				</div>
				<div className={styles.nav_links}>
					<div>
						<a href='/' className={`${styles.login}`}>
							Login
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
