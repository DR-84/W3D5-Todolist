const endpointAPI =
	'https://wincacademydatabase.firebaseio.com/daan/tasks.json';

const getTodoDatabase = async () => {
	try {
		const res = await fetch(endpointAPI, { method: 'GET' });
		console.log('deze is data weetje', res);
		const result = await res.json();
		console.log('Before (the raw result):', result);
		let tasks = Object.keys(result).map(key => ({
			id: key,
			description: result[key].description,
			done: result[key].done
		}));
		console.log('After the tasks array', tasks);
		return tasks;
	} catch (error) {
		console.log('sorry er gaat even wat mis', error);
	}
};

const postNewToDoToDB = async function(input) {
	const data = { description: input, done: 'false' };
	try {
		const response = await fetch(endpointAPI, {
			method: 'POST',
			body: JSON.stringify(data)
		});
		console.log('The response from the API in getData function ', response);
		const json = await response.json();
		setTodoDatabase();
		console.log('Posting succesful', JSON.stringify(json));
	} catch (error) {
		console.log(error);
	}
};

const deleteFromToDoDB = async function(inputId) {
	try {
		const response = await fetch(
			`https://wincacademydatabase.firebaseio.com/daan/tasks/${inputId}.json`,
			{
				method: 'DELETE'
			}
		);
		console.log('The response from the API in getData function ', response);
		const json = await response.json();
		setTodoDatabase();
		console.log('Posting succesful', JSON.stringify(json));
	} catch (error) {
		console.log(error);
	}
};

const EditFromToDoDB = async function(inputId) {
	try {
		const response = await fetch(
			`https://wincacademydatabase.firebaseio.com/daan/tasks/${inputId}.json`,
			{
				method: 'PUT',
				body: JSON.stringify(data)
			}
		);
		console.log('The response from the API in getData function ', response);
		const json = await response.json();
		setTodoDatabase();
		console.log('Posting succesful', JSON.stringify(json));
	} catch (error) {
		console.log(error);
	}
};
