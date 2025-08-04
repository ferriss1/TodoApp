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
    <div className="flex flex-col items-center pt-10">
      <h2 className="font-bold text-lg mb-4">Todo:</h2>
      {todos.length === 0 && <p>No tasks yet...</p>}
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="bg-white shadow-md p-4 rounded-md mb-3 w-[300px]"
        >
          <h3 className="font-bold">Title: {todo.title}</h3>
          <h3>Description: {todo.description}</h3>
          <h3>Subtask: {todo.subtask}</h3>
          <h3>Tags: {todo.tags.join(", ")}</h3>
        </div>
      ))}
    </div>
  );
}