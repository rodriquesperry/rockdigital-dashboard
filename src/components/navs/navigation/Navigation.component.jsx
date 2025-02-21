'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import profile_pic from '@/assets/profile_pic.avif';
import { useTheme } from 'next-themes';
import { MdOutlineLightMode } from 'react-icons/md';
import { MdOutlineDarkMode } from 'react-icons/md';

import styles from './navigation.module.css';

const Navigation = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(true);
	const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  

	return (
		<>
			<nav className={styles.main_nav}>
				<div className={styles.theme_icon}>
					<div
						onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
						type='button'
						className={styles.theme_button}
					>
						{resolvedTheme === 'dark' ? (
							<MdOutlineDarkMode className={styles.darkIcon} size={28} />
						) : (
							<MdOutlineLightMode className={styles.lightIcon} size={28} />
						)}
					</div>
				</div>
				<div className={styles.nav_links}>
					<div className={`${styles.logout_container}`}>
						<Link href='/' className={`${styles.logout}`}>
							Log out
						</Link>
					</div>
					<div className={styles.profile_pic}>
						<Link href='/profile'>
							<Image src={profile_pic} alt='Profile picture' />
						</Link>
					</div>
				</div>
			</nav>
			<div className={styles.border_bottom}></div>
		</>
	);
};

export default Navigation;
