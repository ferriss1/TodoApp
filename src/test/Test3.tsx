export function Testing3(){


    return(
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
  <div className="bg-white p-6 rounded-lg shadow-lg w-[500px]">
    <h2 className="text-lg font-bold mb-4">Create New Task</h2>
    <input
      type="text"
      placeholder="Task title"
      className="border p-2 w-full rounded mb-3"
    />
    <button className="px-4 py-2 bg-blue-600 text-white rounded">
      Create Task
    </button>
  </div>
</div>
    )
}