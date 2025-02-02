'use client';
import useUserUuid from '../Utilities/useUserUuid';
import usePosts from '../Utilities/usePosts';
import Post from '@/components/post/post.component';

const Posts = () => {
	const token =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzM4NDQ2MjI1LCJleHAiOjE3NDEwMzgyMjV9.tKlE4JBo7K_0knJR2DnIiul0ijPWiUzavKqRIT43NtE';

	const { userUuid, loading: userLoading } = useUserUuid(token);
  
	if (userLoading) {
    return <div>Loading user UUID...</div>;
	}
  
  if (!userUuid) {
    return <div>User UUID is not available. Please try again later.</div>
  }

  const { Posts, loading, error } = usePosts(userUuid, token);

  if (loading) {
    return <div>Loading posts...</div>;
	}
	
	if (error) {
    return <div>Error Loading posts: {error.message}</div>;
	}


  return (
		<div>
			This is where the Posts go!!
			<Post />
		</div>
	);
};

export default Posts;
