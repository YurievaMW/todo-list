import React, { useState } from 'react';
import ListItem from './ListItem';

const getRandomNum = () => {
	const min = 1;
	const max = 10;
	var Range = max - min;
	var Rand = Math.random();
	return (min + Math.round(Rand * Range)).toString();
};

const todoItems = [
	{ name: 'To do: english homework', completed: false, id: getRandomNum() },
	{ name: 'To do: complete project', completed: false, id: getRandomNum() },
	{ name: 'To do: listen to music', completed: false, id: getRandomNum() },
];

function Todo() {
	const [todos, setTodos] = useState(todoItems);
	// console.log(todos);

	function checkHandler(e) {
		const changedTodo = todos.find((i) => {
			console.log(e, e.target.id, e.target.checked);
			// обратиться к ключу элемента, сравнить два объекта
		});
	}

	function deleteItem(id) {
		console.log('here', id);
		const newArr = todos.filter((todo) => todo.id !== id);
		setTodos(newArr);
	}

	return (
		<ul
			style={{
				display: 'block',
				alignItems: 'center',
			}}>
			{todos.map((todo) => (
				<ListItem
					key={todo.id}
					todo={todo}
					onClick={deleteItem}
					checkHandler={checkHandler}
				/>
			))}
		</ul>
	);
}

export default Todo;
