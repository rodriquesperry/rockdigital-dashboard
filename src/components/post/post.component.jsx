'use client';
import React from 'react';
import Image from 'next/image';
import usePosts from '../../app/Utilities/usePosts';
import config from '../../../config';
import Card from '@mui/material/Card';
import styles from './post.module.css';

const Post = () => {
	const token =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzM4NDQ2MjI1LCJleHAiOjE3NDEwMzgyMjV9.tKlE4JBo7K_0knJR2DnIiul0ijPWiUzavKqRIT43NtE';

	const { posts, loading, error } = usePosts(token);
	console.log('posts: ', posts);

	if (loading) {
		return <div>Loading posts...</div>;
	}

	if (error) {
		return <div>Error Loading posts: {error.message}</div>;
	}

	return (
		<>
			<div className={styles.tableheader_container}>
				<p className={styles.tableheader}>Image</p>
				<p className={styles.tableheader}>Title</p>
				<p className={styles.tableheader}>Featured</p>
				<p className={styles.tableheader}>Published</p>
			</div>
			<ul className={styles.unordered_post_list}>
				{posts.map((post) => (
					<div key={post.id} className={styles.post_information_container}>
						<div className={styles.post_information}>
							<Image
								src={`${config.api}${post.featured_image.url}`}
								alt='Post Image'
								height={100}
								width={150}
							/>
						</div>
						<div className={styles.post_information}>{post.title}</div>
						<div className={styles.post_information}>
							{post.featured ? 'Yes' : 'No'}
						</div>
						<div className={styles.post_information}>{post.publishedAt}</div>
					</div>
				))}
			</ul>
		</>
	);
};

export default Post;
