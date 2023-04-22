
import { Routes, Route } from 'react-router-dom'

import { useAuth } from './Providers/AuthProvider';
import { useTheme } from './Providers/ThemeProvider';
import { privateRoutes, publicRoutes, } from './routes/routes';
import { ThemeSwitcher } from './shared/UI/ThemeSwitcher/ThemeSwitcher';
import { Layout } from 'Components/Layout/Layout';

const App = () => {
	const { userIsAuth } = useAuth()
	const { theme } = useTheme()
	return (
		<div className={`App ${theme}`}>
			<Layout>
				<ThemeSwitcher />
				<Routes>
					{
						(!userIsAuth ? publicRoutes : privateRoutes).map(({ element, path }) =>
							<Route path={path} element={element} key={path} />
						)
					}
				</Routes>
			</Layout>
		</div>
	);
};

export default App;

// --> HOC, memo, useCallback, useMemo,

// HOC --> High Order Component 