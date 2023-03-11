import { useState } from 'react';

import { IToDoItem } from '../TodoList';

import './TodoItem.css';

interface TodoItemProps {
	todoItem: IToDoItem;
}

export const TodoItem = ({ todoItem }: TodoItemProps) => {
	const { id, isCompleted, text } = todoItem;
	const [isInEditMode, setIsInEditMode] = useState(false);
	return (
		<div className='TodoItem'>
			{isInEditMode ? <input type='text' placeholder='edit your todo' /> : <p>{text}</p>}
			<span className='buttons'>
				<button>complete</button>
				<button onClick={()=> setIsInEditMode(true)}>edit</button>
				<button>delete</button>
			</span>
		</div>
	);
};
