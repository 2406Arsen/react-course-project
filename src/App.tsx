
import { useState } from 'react';
import TodoList from './Components/TodoList/TodoList';
import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/MainPage/MainPage';
import { NotFound } from './pages/NotFound/NotFound';

type Theme = 'dark' | 'light'
const App = () => {

	const [theme, setTheme] = useState<Theme>('dark');

	return (
		<>
			<div className={`App ${theme}`}>
				<button onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}>theme switcher</button>
				<Routes>
					{true && (
						<>
							<Route path='/' element={<MainPage />} />
							<Route path='/todo' element={<TodoList />} />
							<Route path='/*' element={<NotFound />} />
						</>
					)}
				</Routes>
			</div>

		</>
	);
};

export default App;





//======== homework ========

//new login page
// if not user authenticated hide routes 

//// - not available user UserChecker HOC provider
//// - homework create AuthProvider
//// - react router useNavigation, useLocation, useParams