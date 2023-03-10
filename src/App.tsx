// import Content from './Components/Content/Content';
// import Footer from './Components/Footer/Footer';
// import Header from './Components/Header/Header';

import TodoList from './Components/TodoList/TodoList';

export interface Data {
	header: string;
	content: string;
	footer: string;
}

// const data: Data = {
// 	header: 'Text for Header component',
// 	content: 'Text for Content component',
// 	footer: 'Text for Footer component',
// };

const App = () => {
	return (
		<>
			<TodoList />
			{/* <Header title={data.header} />
			<Content content={data.content} />
			<Footer footer={data.footer} /> */}
		</>
	);
};

export default App;

// react key
// onChange, onBlur
// useState, useRef
