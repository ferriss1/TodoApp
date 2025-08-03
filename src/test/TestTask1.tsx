import React, { useState } from "react";
import TaskList from "./TestTaskLits";

interface Task {
  id: number;
  title: string;
  description: string;
  tags: string[];
}

export default function Testing() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    const newTask: Task = {
      id: Date.now(),
      title: "New Task",
      description: "This is a new task",
      tags: ["Work"],
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">My task</h1>
      <p className="text-gray-500 mb-4">Manage your daily tasks and projects</p>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-md"
        onClick={addTask}
      >
        New task
      </button>

      {/* Task list in new component */}
      <TaskList tasks={tasks} />
    </div>
  );
}