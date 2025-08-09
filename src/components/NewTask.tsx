  import { useState } from "react";
import { TodoList } from "./TaskListing";
import { MyTaskBar } from "./MyTaskBar";
import { PlusIcon } from "../icons/DotIcon";


  interface Todo {
      id:number;
      title:string;
      description:string;
      subtask:string;
      tags:string[];

  }


  const avaialableTags = ["Work","Urgent","Shopping", "Personal"]

  export function TaskCard(){

  //buttonfunc   
  const [isOpen, setIsOpen] = useState(false);

      const[todos,setTodo] = useState<Todo[]>([]);
      const[title,setTitle] = useState("");
      const[description,setDescription] = useState("");
      const[subtask,setSubtask] = useState("");
      // const[tagInput,setTagInput] = useState("");
      // const[tags,setTags] = useState<string[]>([]);
      const [selectedTags,setSelectedTags] = useState<string[]>([]);
  
  //tag selevtion

  const handleTagClick = (tag:string)=>{

  setSelectedTags((prev) =>
        prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
      );
    };




  //add new todo
      const addTodo = () => {
          if(!title) return;
          
        const newTodo : Todo ={
          id : Date.now(),
          title,
          description,
          subtask,
          tags:selectedTags
          
        }


        setTodo([...todos,newTodo]);

      // setTodo((prevTodos) => [...prevTodos, newTodo]);


        setTitle("");
        setDescription("");
        setSubtask("");
        // setTags([]);
        setSelectedTags([]);

        setIsOpen(false);
      }

      //add a tag

      // const addtag = ()=>{

      //     if(!tagInput) return;
      //     setTags([...tags,tagInput]);
      //     setTagInput("")

      // }
      






      return(<>
     
          <div className="w-[1650px]">

          <MyTaskBar/>




          <div className="  items-center justify-center bg-gray-100 shadow-lg">
        
          <div className="p-2 pl-6">
          
          <button
          onClick={() => setIsOpen(true)}
          className=" flex p-2 pr-3 pl-3 bg-black text-gray-200 font-semibold rounded-md items-center gap-2 cursor-pointer"
        >
          <PlusIcon/>
          New task
        </button>
          </div>

    
          {isOpen && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center  shadow-black">

      
        
          <div className="bg-white p-5 rounded-md w-[650px]">


          <h1 className="flex font-bold text-lg pb-4 font-sans tracking-tight">Create New Task</h1>

      <div className=" justify-center items-center" >
          <div className="w-[446px] pb-4">
              <h2 className="font-semibold text-slate-700 pb-2">Title</h2>
          <input  className=" border-2 rounded border-gray-200 focus:border-black p-2 outline-offset-4 outline-gray-400 w-full text-sm font-medium" type="text" placeholder="Enter Task Title.." value={title} onChange={(e)=>setTitle(e.target.value)}/>
          </div>
          <div>
              <h2 className="font-semibold text-slate-700 pb-2">Description</h2>
          <input type="text"className=" border-2 rounded border-gray-200 focus:border-black p-2 outline-offset-4 outline-gray-400 w-full text-sm font-medium pb-10" placeholder="Add a Description.." value={description} onChange={(e)=>setDescription(e.target.value)}/>
          
          </div>
          
          {/* <input type="text" placeholder="tags" value={tagInput} onChange={(e)=>setTagInput(e.target.value)}/>
          <button onClick={addtag}>Add tag</button> */}



          <div style={{ margin: "10px 0" }}>
            <div className="font-semibold text-slate-700 pb-2">Tags</div>
            
          {avaialableTags.map((tag) => (
            <button
              key={tag}
               
              onClick={() => handleTagClick(tag)}
               className={`m-[5px] px-[13px] py-[8px] rounded-[6px] border text-sm font font-semibold shadow-sm ${
               selectedTags.includes(tag)
               ? " bg-zinc-800 text-white"
               : "border-gray-200 bg-white hover:bg-gray-100"
          }`}
            >
             
              <div>

              {tag}
              </div>
            </button>
          ))}
        </div>
          <div>
              <h2 className="font-semibold text-slate-700 pb-2">Subtask</h2>
          <input type="text" className="border-2 rounded border-gray-200 focus:border-black p-2 outline-offset-4 outline-gray-400 w-full text-sm font-medium pb-10" placeholder="Add subtasks.." value={subtask} onChange={(e)=>setSubtask(e.target.value)}/>
          </div>


  {/* newtags */}
          {/* <div>
          {avaialableTags.map((tag)=>(
              <button key={tag} onClick={()=>handleTagClick}
              className={`m-1 px-2 py-1 rounded-md border ${
              selectedTags.includes(tag)
              ? "border-green-600 bg-green-100"
                  : "border-gray-400 bg-white"
              }`}>
      
      {tag}</button>
          ))}
          </div> */}


          {/* <div className="flex">{tags.join(",")}</div> */}
          <div className="flex justify-end pt-3 gap-2">

          <button className="p-2  border border-gray-200 pl-3 pr-3 rounded-md hover:bg-gray-100 shadow-sm" onClick={() => setIsOpen(false)}>Cancel  </button>
          <button onClick={addTodo} className="p-2  border bg-zinc-800 text-white  pl-3 pr-3 rounded-md font-sans shadow-sm hover:bg-zinc-700" >Create Task</button> 

          </div>

          

          </div>
          </div>
      </div>
          )}
 </div>




      {/* <div className="flex justify-center pt-10">
          <h2 className="pr-23">Todo:</h2>
          {todos.map((todo)=>(
              <div key={todo.id} className="font-bold">
                  <h3>title: {todo.title}</h3>
                  <h3>description: {todo.description}</h3>
                  <h3>subTask: {todo.subtask}</h3>
                  <h3>tags: {todo.tags}</h3>

              </div>
        ))}
          </div> */}

          {/* Render new component */}

        <div className="bg-gray-100 p-4 pl-7">

          <TodoList todos={todos} />
        </div>
      </div>
      </>
      )
      
    }
    


