import { useState, useEffect } from 'react';
import useUserUuid from './useUserUuid';
import axios from 'axios';

const usePosts = (userUuid, token) => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const { data } = await axios.get(
					`http://127.0.0.1:1337/api/posts`,
				);

				if (data?.data) {
					console.log('Fetched Posts:', data.data);
					setPosts(data.data);
				}
			} catch (error) {
				console.error('Error fetching posts:', error);
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		fetchPosts();
	}, [userUuid, token]); // Runs only when userUuid or token changes

	return { posts, loading, error };
};

export default usePosts;
