import { FC, useRef, useState } from 'react';
import { Button } from '../UI/Button/Button';
import { Input } from '../UI/Input/Input';
import { Users } from '../Users/Users';
import './Content.css';

interface ContentProps {
	content: string;
}

// const fruits = () => ['', () => 'state'];

// const [fruits, setFruits] = fruits();

const Content: FC<ContentProps> = ({ content }) => {
	const [value, setValue] = useState('');
	const ref = useRef<HTMLInputElement>(null);
	const [isHiddenUsers, setHiddenUsers] = useState(false);
	// const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
	// 	e.preventDefault();
	// 	console.log('login');
	// };

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		setValue((prevState) => {
			return `blur ${prevState}`;
		});
	};

	return (
		<main className='Content'>
			<p>{content}</p>
			<form onSubmit={handleSubmit}>
				<Input
					label='Username'
					type='text'
					name='username'
					onChange={handleChange}
					onBlur={handleBlur}
					// defaultValue='default value'
					value={value}
				/>
				<Input
					type='ref'
					name='ref'
					label='ref'
				// onChange={(e)=> ref.current = e.target.value}
				/>
				<p>{value}</p>
				{/* <p>{ref.current}</p> */}
				<label>
					Password
					<Input type='password' name='password' />
				</label>
				<Button>submit Button</Button>
				<Button>
					reset Button
				</Button>
				<Button
					onClick={() => setHiddenUsers((prev) => !prev)}
					type='secondary'
				>
					hide users
				</Button>
			</form>
			{!isHiddenUsers&& <Users isHiddenUsers={isHiddenUsers} />}
		</main>
	);
};

export default Content;
