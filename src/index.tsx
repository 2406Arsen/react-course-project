import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

export interface Data {
	h1: string;
	h2: string;
	h3: string;
	h4: string;
	h5: string;
	h6: string;
}

// type

const data: Data = {
	h1: 'heading tag 11111',
	h2: 'heading tag 2222',
	h3: 'heading tag 3333',
	h4: 'heading tag 4444',
	h5: 'heading tag 55555',
	h6: 'heading tag 66666',
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<App 
      h1='h1'
      h2='h2'
      h3='h3'
      h4='h4'
      h5='h5'
      h6='h6' 
    />
		{/* <App {...data} /> */}

	</React.StrictMode>,
);
