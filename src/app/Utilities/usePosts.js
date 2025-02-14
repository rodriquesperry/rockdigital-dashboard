import { useState, useEffect } from 'react';
import axios from 'axios';

const usePosts = (userUuid, token) => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const { data } = await axios.get(
					`https://rockdigital.agency/api/posts?status=published&populate=*`
				);

				if (data?.data) {
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
