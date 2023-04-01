import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './Providers/AuthProvider';
import { ThemeProvider } from './Providers/ThemeProvider';
import { store } from './store';

import './styles/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<Provider store={store} >
			<BrowserRouter>
				<AuthProvider>
					<ThemeProvider>
						<App />
					</ThemeProvider>
				</AuthProvider>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
);
