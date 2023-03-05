import { FC } from 'react';
import './Header.css';

interface HeaderProps {
	title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {

	return <header className='Header'>{title}</header>;
};

export default Header;
