import React, { useState } from 'react';

function ListItem({ todo, onClick, checkHandler }) {
	const [checked, setChecked] = useState(todo.completed);

	function onClickHandler() {
		onClick(todo.id);
	}

	return (
		<li
			style={{
				color: 'orange',
				margin: '30px',
				display: 'flex',
				alignItems: 'center',
			}}>
			<h2>{todo.name}</h2>
			<input
				type='checkbox'
				id={todo.id}
				checked={checked}
				onChange={(e) => {
					checkHandler(e);
					setChecked(!checked);
				}}
			/>
			<button
				style={{
					background: 'red',
					fontWeight: 'bold',
					cursor: 'pointer',
				}}
				onClick={onClickHandler}>
				Delete
			</button>
		</li>
	);
}

export default ListItem;
