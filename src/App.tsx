
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'

import { Navbar } from './Components/Navbar/Navbar';
import { Theme, ThemeSwitcher } from './Components/UI/ThemeSwitcher/ThemeSwitcher';
import { useAuth } from './Providers/AuthProvider';
import { privateRoutes, publicRoutes, } from './routes/routes';

const App = () => {
	const [theme, setTheme] = useState<Theme>('dark');
	const { userIsAuth } = useAuth()

	return (
		<div className={`App ${theme}`}>
			<Navbar />
			<ThemeSwitcher setTheme={setTheme} />
			<Routes>
				{
					(!userIsAuth ? publicRoutes : privateRoutes).map(({ element, path }) =>
						<Route path={path} element={element} key={path} />
					)
				}
			</Routes>
		</div>
	);
};

export default App;



//ThemeProvider
// useUsers hook
// userService --> create new private route /createUser --> where we can create new user --> get api from jsonPlaceholder

// UserService createUser like get all users
// UserService.createUser('login','password')