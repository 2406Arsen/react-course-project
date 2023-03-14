import './TodoList.scss';

import { useState } from 'react';
import { TodoItem } from './TodoItem/TodoItem';

const TodoList = () => {
	const [inputValue, setInputValue] = useState('');
	const [todoList, setTodoList] = useState<IToDoItem[]>([]);

	const handleAddTodo = () => {
		if (!inputValue) {
			return;
		}
		const newTodo: IToDoItem = {
			id: Math.floor(Math.random() * 20000),
			isCompleted: false,
			text: inputValue,
		};
		setTodoList((prev) => [...prev, newTodo]);
		setInputValue('');
	};

	return (
		<div className='TodoList' >
			<div className='addTodo'>
				<input
					type='text'
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<button onClick={handleAddTodo} >Add todo</button>
			</div>

			{todoList.map((todo) => {
				return <TodoItem todoItem={todo} />;
			})}
		</div>
	);
};

export default TodoList;

export interface IToDoItem {
	id: number;
	text: string;
	isCompleted: boolean;
}
