import './Users.css';
import { useState } from 'react';
import { Button } from '../UI/Button/Button';
import UserService from '../../api/Services/UserService/UserService';
import { User } from '../../api/Services/UserService/types';

export const Users = ({ isHiddenUsers }: { isHiddenUsers: boolean }) => {
	const [users, setUsers] = useState<User[]>()

	const handleGetAllUsers = async () => {
		try {
			const users = await UserService.getAllUsers()
			setUsers(users)
		} catch (error) {

		}
	}

	return (
		<div>
			<Button type='secondary' onClick={handleGetAllUsers}>get all users </Button>
			{users?.map((user) => {
				return (
					<p
						onClick={(e) => {
							console.log(e.currentTarget.getAttribute('data-secondattribute'));
						}}
						key={user.id}
						data-testid={user.id}
						data-secondattribute={user.phone}
					>
						{user.name}
					</p>
				);
			})}
		</div>
	);
};

// useRef, useEffect
// attributes, custom attributes
