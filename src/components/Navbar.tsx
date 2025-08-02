
import { Logo } from "../icons/Logo";
import { Profile } from "../icons/ProfileIcon";
import { Button } from "./Button";


export function Navbar(){

    return(
        <div className="w-64 flex flex-col border border-gray-300 border-r">
            <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
            <Logo/>

            <div className="font-semibold text-gray-900">TodoApp

            </div>
        </div>
        </div>

        {/* //tasks and tags */}
        
        <div className="p-4 flex-1">
            <div className="space-y-2">
                <Button text="All Tasks" variant="primary" color="blue"/>
                <Button text="Completed" variant="primary" color="green"/>
                <Button text="Progress" variant="primary"  color="red"/>
            </div>
                <div className="text-gray-500 font-semibold pt-6 pb-6">Tags</div>

                <div className="space-y-2">
                    <Button text="Work" variant="primary" color="blue"/>
                    <Button text="Personal" variant="primary" color="green"/>
                    <Button text="Urgent" variant="primary" color="red"/>
                    <Button text="Shopping" variant="primary" color="purple"/>
                </div>
        </div>
        {/* Profile login */}
        <div className="flex font-medium p-4 border-t border-gray-200">
        <button className="flex gap-2">
            <div>
                <Profile/>
            </div>
            <div>
                John Dow
            </div>
            </button>
        </div>

        </div>
    )
}