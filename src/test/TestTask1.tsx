import { useState } from "react";
import { TodoList } from "./TestTaskLits"; // Import your new component

interface Todo {
  id: number;
  title: string;
  description: string;
  subtask: string;
  tags: string[];
}

const avaialableTags = ["work", "urgent", "shopping", "personal"];

export function Testing() {
  const [isOpen, setIsOpen] = useState(false);
  const [todos, setTodo] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subtask, setSubtask] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagClick = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const addTodo = () => {
    if (!title) return;

    const newTodo: Todo = {
      id: Date.now(),
      title,
      description,
      subtask,
      tags: selectedTags,
    };
    setTodo([...todos, newTodo]);
    setTitle("");
    setDescription("");
    setSubtask("");
    setTags([]);
    setSelectedTags([]);
    setIsOpen(false);
  };

  const addtag = () => {
    if (!tagInput) return;
    setTags([...tags, tagInput]);
    setTagInput("");
  };

  return (
    <>
      <div className="flex items-center justify-center bg-gray-100">
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          New task
        </button>

        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-gray-300 p-5 rounded-md">
              <h1 className="flex font-bold pb-4">Create New Task</h1>

              <div className="justify-center items-center">
                <div className="w-[446px] pb-4">
                  <h2 className="font-semibold text-slate-800 pb-2">Title</h2>
                  <input
                    className="border-2 rounded border-gray-200 focus:border-black p-2 outline-offset-4 outline-gray-400 w-full text-sm font-medium"
                    type="text"
                    placeholder="Enter Task Title.."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div>
                  <h2 className="font-semibold text-slate-800 pb-2">
                    Description
                  </h2>
                  <input
                    type="text"
                    className="border-2 rounded border-gray-200 focus:border-black p-2 outline-offset-4 outline-gray-400 w-full text-sm font-medium pb-10"
                    placeholder="Add a Description.."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div>
                  <h2 className="font-semibold text-slate-800 pb-2">Subtask</h2>
                  <input
                    type="text"
                    className="border-2 rounded border-gray-200 focus:border-black p-2 outline-offset-4 outline-gray-400 w-full text-sm font-medium pb-10"
                    placeholder="subtask"
                    value={subtask}
                    onChange={(e) => setSubtask(e.target.value)}
                  />
                </div>
                <input
                  type="text"
                  placeholder="tags"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                />
                <button onClick={addtag}>Add tag</button>

                <div style={{ margin: "10px 0" }}>
                  {avaialableTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => handleTagClick(tag)}
                      style={{
                        margin: "5px",
                        padding: "5px 10px",
                        borderRadius: "6px",
                        border: selectedTags.includes(tag)
                          ? "2px solid green"
                          : "1px solid gray",
                        background: selectedTags.includes(tag)
                          ? "#d4f4d4"
                          : "white",
                      }}
                    >
                      {tag}
                    </button>
                  ))}
                </div>

                <div className="flex">{tags.join(",")}</div>
                <button className="pr-2" onClick={() => setIsOpen(false)}>
                  Cancel
                </button>
                <button onClick={addTodo}>Add to Do</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Render new component */}
      <TodoList todos={todos} />
    </>
  );
}