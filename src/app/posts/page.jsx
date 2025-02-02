'use client';

import { useEffect, useState } from 'react';
import Post from '@/components/post/post.component';
import axios from 'axios';

const Posts = () => {
  const [userUuid, setUserUuid] = useState(null);
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzM4NDQ2MjI1LCJleHAiOjE3NDEwMzgyMjV9.tKlE4JBo7K_0knJR2DnIiul0ijPWiUzavKqRIT43NtE';
  

  useEffect(() => {
    console.log('token: ', token);
    
    const getUserUuid = async () => {
      const { data } = await axios.get('http://127.0.0.1:1337/api/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (data && data.user_uuid) {
        setUserUuid(data.user_uuid);
        console.log('userUuid: ', userUuid);
        
      } else {
        console.log('Error fetching user UUID.');
        
      }
    }
  }, []);

	useEffect(() => {
		const getPosts = async () => {
			const { data } = await axios.get(`http://127.0.0.1:1337/api/posts?filters[author_uuid][$eq]=${userUuid}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			if (!data) {
				console.log('Error fetching Data.');
			}
			console.log('posts: ', data.data);
		};
		getPosts();
	}, []);

	return (
		<div>
			This is where the Posts go!!
			<Post />
		</div>
	);
};

export default Posts;
