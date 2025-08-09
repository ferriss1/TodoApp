interface Todo {
  id: number;
  title: string;
  description: string;
  subtask: string;
  tags: string[];
}

interface TodoListProps {
  todos: Todo[];
}

export function TodoList({ todos }: TodoListProps) {
  return (
    <div className="flex flex-col items-center ">
     
      {todos.length === 0 && <p>No tasks yet...</p>}
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="bg-white shadow-md p-4   rounded-md  w-full "
        >
          

          <h3 className=" bg-green-200 text-gray-900 text-lg font-medium  font-sans ">{todo.title}</h3>
          <h3>Description: {todo.description}</h3>
          <h3>Subtask: {todo.subtask}</h3>
          <h3>Tags: {todo.tags.join(", ")}</h3>
          </div>
       
      ))}
    </div>
  );
}