const button = document.getElementById('btn')
const inputElement = document.getElementById('input-element') as HTMLInputElement
const form = document.querySelector('form')
const list = document.getElementById('ulListTodo')

interface Todo {
  text: string,
  completed: boolean,
}

const getTodos = (): Todo[] => {
  const todos = localStorage.getItem('todos');
  if (todos === null) return [];
  return JSON.parse(todos)
}

const todo : Todo[] = getTodos()

const saveTodo = () => localStorage.setItem('todos', JSON.stringify(todo))

const createListItem = (todo: Todo) => {
  const li = document.createElement('LI');
  li.append(todo.text)
  const checkBoxElement = document.createElement('input');
  checkBoxElement.type = 'checkbox';
  checkBoxElement.checked = todo.completed;
  checkBoxElement.addEventListener('change', () => {
    todo.completed = checkBoxElement.checked;
    saveTodo()
  })
  list?.append(li)
  list?.append(checkBoxElement)
}

todo.forEach(createListItem)

const handleSubmit = (event : SubmitEvent) => {
  event.preventDefault()
  const todoItem: Todo = {
    text: inputElement.value,
    completed: false,
  }
  todo.push(todoItem)
  createListItem(todoItem);
  inputElement.value = '';
}

form?.addEventListener('submit', handleSubmit)

// button?.addEventListener('click', () => {
//   alert(inputElement.value)
//   inputElement.value = ""
// })