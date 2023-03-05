import { FC } from 'react';
import './Content.css';

interface ContentProps {
	content: string;
}

const Content: FC<ContentProps> = ({ content }) => {
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		console.log('login');
	};

	return (
		<main className='Content'>
			<p>{content}</p>
			<form>
				<label>
					Username
					<input type='text' name='username' />
				</label>
				<label>
					Password
					<input type='password' name='password' />
				</label>
				<button onClick={handleClick}>login</button>
			</form>
		</main>
	);
};

export default Content;
