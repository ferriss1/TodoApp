import { Filter } from "../icons/FilterIcon";
import { Search } from "../icons/SearchIcon";
import { TaskCard } from "./NewTask";

export function MyTaskBar(){


    return(
        <div className="p-4 w-screen ">
            {/* //newtask */}
            <div className="flex justify-between">
                <div>
            <h1 className="font-semibold text-2xl text-gray-900">
                My task
            </h1>
            <p className="text-sm text-gray-500">
                Manage your daily tasks and projects
            </p>
            </div>
            <div>
                <TaskCard/>
            </div>
            </div>

            <div className="flex gap-2 items-center">
                <div className="flex relative flex-1 max-w-md border border-gray-300 rounded-md items-center gap-2 p-2">
                <div className=""><Search/></div>
                <input type="text" placeholder="Search tasks" className="border-none outline-none text-sm"/>
                </div>
                <button className="border border-gray-300 rounded-md p-2 flex gap-2 items-center">
                    <div>
                        <Filter/>
                    </div>
                    <div className="font-medium text-gray-900 text-sm">
                        Filter by Tags
                    </div>
                </button>
            </div>
        </div>
    )
}