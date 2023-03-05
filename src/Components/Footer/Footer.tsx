import { FC } from 'react';
import './Footer.css';

interface FooterProps {
	footer: string;
}

const Footer:FC<FooterProps> = ({footer}) => {
	return <footer className='Footer'>{footer}</footer>;
};

export default Footer;
