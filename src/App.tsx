
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import { AppLink } from './Components/AppLink/AppLink';
import { Theme, ThemeSwitcher } from './Components/ThemeSwitcher/ThemeSwitcher';
import { USER_LOCALSTORAGE_KEY } from './constants/localStorage';
import { privateRoutes, publicRoutes, } from './routes/routes';


const App = () => {
	const [theme, setTheme] = useState<Theme>('dark');
	const userIsAuth = localStorage.getItem(USER_LOCALSTORAGE_KEY)

	const navigate = useNavigate()

	const handleLogout = () => {
		localStorage.removeItem(USER_LOCALSTORAGE_KEY)
		navigate('/login')
	}

	// useEffect(() => {
		if (!userIsAuth) {
			navigate('/login')
		}
	// }, [])

	return (
		<>
			<div className={`App ${theme}`}>
				<ThemeSwitcher setTheme={setTheme} />
				<button onClick={handleLogout}>log out</button>
				<AppLink to='/' >home</AppLink>
				<AppLink to='/todo'>todo</AppLink>
				<AppLink to='/login'>login</AppLink>
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

		</>
	);
};

export default App;





//======== homework ========

//Button Component
// Private Public AppLinks   
//redo app component
//useLocalStorage
//Navigation bar