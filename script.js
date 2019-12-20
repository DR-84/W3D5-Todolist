const setTodoDatabase = async () => {
	const todoList = document.getElementById('list');
	todoList.innerHTML = '';
	const data = await getTodoDatabase();
	console.log(data);
	data.forEach(todoTask => {
		const checkPic = document.createElement('a');
		const yodaPic = document.createElement('img');
		const li = document.createElement('li');
		const liContent = document.createTextNode(`${todoTask.description}`);
		//const deleteId = document.createTextNode(`${todoTask.id}`);
		const clickable = document.createElement('a');
		const thrashPic = document.createElement('img');
		checkPic.setAttribute('class', 'check');
		yodaPic.src = 'yoda.png';
		thrashPic.src = 'thekardashians.png';
		thrashPic.setAttribute('class', 'thrash');
		thrashPic.setAttribute('job', 'delete');
		thrashPic.setAttribute('id', `${todoTask.id}`); //thrashPic.setAttribute('id', deleteId);
		checkPic.appendChild(yodaPic);
		clickable.appendChild(thrashPic);
		li.append(checkPic);
		li.appendChild(liContent);
		todoList.append(li);
		li.append(clickable); //deze later toegevoegd
		//li.append(addThrashIcon());
	});
};

/* const addThrashIcon = () => {
	const clickable = document.createElement('a');
	const thrashPic = document.createElement('img');
	thrashPic.src = 'thekardashians.png';
	thrashPic.setAttribute('class', 'thrash');
	thrashPic.setAttribute('job', 'delete');
	thrashPic.setAttribute('id', 'thrashcan');
	clickable.appendChild(thrashPic);
	return thrashPic;
}; */

/* const addToTodoList = todoTextValue => {
	const todoList = document.getElementById('list');
	console.log(todoTextValue);
	const li = document.createElement('li');
	const liContent = document.createTextNode(todoTextValue);
	//const thrashPic = document.createElement('img');
	//thrashPic.src = 'thekardashians.png';
	//thrashPic.setAttribute('job', 'delete');
	console.log(liContent);
	todoList.appendChild(li);
	li.append(liContent);
	li.append(addThrashIcon());
}; */
//eventlistener voor de add task knop
const addEventListenerForAddTaskButton = () => {
	const button = document.getElementById('addToToDoDoWaDiDiDiDumDiDiDayButton');
	//button.addEventListener("keypress", (event) =>
	//event.keyCode === 13
	button.addEventListener('click', () => {
		const input = document.getElementById('todoTextinput');
		const todoTextValue = input.value;

		//addToTodoList(todoTextValue);
		postNewToDoToDB(todoTextValue);
	});
};

const addEventListenerForDelete = () => {
	const ul = document.getElementById('list');
	ul.addEventListener('click', event => {
		event.target.id;
		let witchTrashcan = event.target.id;
		console.log(witchTrashcan);
		deleteFromToDoDB(witchTrashcan);
		setTodoDatabase(witchTrashcan);
	});
};

//text in "add todo item field" to list
//event listener voor add buttom
//push list item to api

document.addEventListener('DOMContentLoaded', () => {
	console.log('DOM fully loaded and parsed');
	getTodoDatabase();
	setTodoDatabase();
	addEventListenerForAddTaskButton();
	addEventListenerForDelete();
});
