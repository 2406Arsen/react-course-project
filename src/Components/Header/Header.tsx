import { FC, useState, useCallback } from 'react';
import cls from './Header.module.scss';
import { Button } from 'shared/UI/Button/Button';
import { Drawer } from '@mui/material';
import { Navbar } from 'Components/Navbar/Navbar';


const Header: FC = () => {
	const [isOpenDrawer, setOpenDrawer] = useState(false)

	const toggleDrawer = useCallback(() => setOpenDrawer((prev) => !prev), [])
	return (
		<>
			<header className={cls.Header}>
				<Button type='primary' onClick={toggleDrawer}>Open</Button>
			</header>
			<Drawer
				anchor='left'
				open={isOpenDrawer}
				onClose={toggleDrawer}
			>
				<Navbar />
			</Drawer>
		</>
	);
};

export default Header;
