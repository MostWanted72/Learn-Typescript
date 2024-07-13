import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const ToDo = response.data as ToDo;

  const id = ToDo.id;
  const title = ToDo.title;
  const finished = ToDo.completed;

  logTodo(id, title, finished);
});

const logTodo = (id: number, title: string, finished: boolean) => {
  console.log(`
    The Todo with id: ${id}
    has a title of: ${title}
   Is it finished? ${finished} 
  `);
};
