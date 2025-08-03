import React from "react";

interface Task {
  id: number;
  title: string;
  description: string;
  tags: string[];
}

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div className="mt-6">
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks yet.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className="mb-4 p-4 bg-gray-100 rounded-md shadow-sm"
            >
              <h3 className="font-bold text-lg">{task.title}</h3>
              <p className="text-sm text-gray-600">{task.description}</p>
              <div className="flex flex-wrap mt-2">
                {task.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full mr-2 mt-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;