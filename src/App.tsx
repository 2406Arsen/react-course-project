
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import useAuth from './Components/hooks/useAuth';
import { Navbar } from './Components/Navbar/Navbar';
import { Theme, ThemeSwitcher } from './Components/UI/ThemeSwitcher/ThemeSwitcher';
import { privateRoutes, publicRoutes, } from './routes/routes';


const App = () => {
	const [theme, setTheme] = useState<Theme>('dark');
	const { userIsAuth } = useAuth()


	return (
		<div className={`App ${theme}`}>
			<Navbar />
			<ThemeSwitcher setTheme={setTheme} />
			<Routes>
				{!userIsAuth ? (
					<>
						{
							publicRoutes.map(({ element, path }) =>
								<Route path={path} element={element} key={path} />
							)
						}
					</>
				) :
					<>
						{
							privateRoutes.map(({ element, path }) =>
								<Route path={path} element={element} key={path} />
							)
						}
					</>
				}
			</Routes>
		</div>
	);
};

export default App;

