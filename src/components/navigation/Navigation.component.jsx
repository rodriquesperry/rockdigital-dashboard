import React from 'react';
import styles from './navigation.module.css';

const Navigation = () => {
	return (
		<nav className={styles.main_nav}>
			<a href='/' className={styles.theme_icon}>light/dark icon</a>
			<div className={styles.nav_links}>
				<a href='/' className={styles.nav_link}>Login</a>
				<a href='/profile' className={styles.nav_link}>Profile Pic</a>
			</div>
		</nav>
	);
};

export default Navigation;
