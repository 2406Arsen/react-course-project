import './Users.css';
import { users } from './users.data';
import { useEffect, useState } from 'react';

export const Users = ({ isHiddenUsers }: { isHiddenUsers: boolean }) => {
	useEffect(() => {
		console.log(isHiddenUsers, 'changed');

		return () => {
			console.log('unmount');
		};
	}, [isHiddenUsers]);

	return (
		<div>
			{users.map((user) => {
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
