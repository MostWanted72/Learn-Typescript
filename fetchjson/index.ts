import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1' 

interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const ToDo = response.data as ToDo;

  const Id = ToDo.id;
  const title = ToDo.title;
  const finished = ToDo.completed;

  console.log(`
    The Todo with id: ${Id}
    has a title of: ${title}
   Is it finished? ${finished} 
  `)
})