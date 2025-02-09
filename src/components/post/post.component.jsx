'use client';
import React from 'react';
import Image from 'next/image';
import usePosts from '../../app/Utilities/usePosts';
import config from '../../../config';
import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import styles from './post.module.css';

const Post = () => {
	const token =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzM4NDQ2MjI1LCJleHAiOjE3NDEwMzgyMjV9.tKlE4JBo7K_0knJR2DnIiul0ijPWiUzavKqRIT43NtE';

	const { posts, loading, error } = usePosts(token);
	const [checkedItems, setCheckedItems] = React.useState({});

	const handleChange = (id) => {
		setCheckedItems((prevCheckedItems) => ({
			...prevCheckedItems,
			[id]: !prevCheckedItems[id],
		}));
	};

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
				{posts.map((post) => {
					const isPublished = post.publishedAt != null;
					const dateString = post.publishedAt;
					let formattedDate = isPublished
						? new Date(dateString).toLocaleDateString()
						: 'Draft';

					return (
						<div key={post.id} className={styles.post_information_container}>
							<div className={styles.checkbox_container}>
								<Checkbox
									className={styles.checkbox}
									checked={checkedItems[post.id] || false}
									onChange={() => handleChange(post.id)}
									inputProps={{ 'aria-label': 'controlled' }}
								/>
							</div>
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

							<div className={styles.post_information}>{formattedDate}</div>
						</div>
					);
				})}
			</ul>
		</>
	);
};

export default Post;
