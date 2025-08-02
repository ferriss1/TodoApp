import { Filter } from "../icons/FilterIcon";
import { Search } from "../icons/SearchIcon";

export function MyTaskBar(){


    return(
        <div className="p-4 w-[1000px]">
            {/* //newtask */}
            <div >
            <h1 className="font-semibold text-2xl text-gray-900">
                My task
            </h1>
            <p className="text-sm text-gray-500">
                Manage your daily tasks and projects
            </p>
            </div>

            <div className="flex gap-2 items-center">
                <div className="flex relative flex-1 max-w-md border border-gray-400 rounded-md p-1">
                <div className=""><Search/></div>
                <input type="text" placeholder="Search tasks" className="border-none outline-none"/>
                </div>
                <button className="border border-gray-300 rounded-md p-2 flex gap-2 items-center">
                    <div>
                        <Filter/>
                    </div>
                    <div className="font-medium text-gray-900">
                        Filter by Tags
                    </div>
                </button>
            </div>
        </div>
    )
}