import { useEffect, useState } from 'react';
import axios from 'axios';

const useUserUuid = async (token) => {
	const [userUuid, setUserUuid] = useState(null);
  const [userLoading, setUserLoading] = useState(true);

	useEffect(() => {
		const fetchUserUuid = async () => {
			if (!token) {
				console.log('No token!');
        setUserLoading(false);
				return;
			}

			try {
				const { data } = await axios.get('http://127.0.0.1:1337/api/users', {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});

				if (data && data[0]?.user_uuid) {
					console.log('Fetched userUuid:', data[0].user_uuid);

					setUserUuid(data[0].user_uuid);
				} else {
					console.log('Error fetching user UUID.');
				}
			} catch (error) {
				console.error('Error fetching user UUID:', error);
			} finally {
				setUserLoading(false);
			}
		};
		fetchUserUuid();
	}, [token]);
	return { userUuid, userLoading };
};

export default useUserUuid;
