import type { ReactElement } from "react";

interface buttonProps {

    variant: "primary";
    text :string;
    startIcon?: ReactElement;
    color:"blue"|"green"|"red"|"purple";

}


const colorVariant = {
    "primary" : "text-gray-900 font-semibold text-md"
}


const startColor = {
    "blue":"bg-blue-500",
    "green":"bg-green-500",
    "red":"bg-red-500",
    "purple":"bg-purple-500"
}


export function Button({variant,text,color}:buttonProps){

    return(
    <div  className="p-3 hover:bg-gray-200 rounded-md">
        <button className={colorVariant[variant]+" flex items-center space-x-2 "}>
            <div className={startColor[color] +" h-2 w-2  rounded-full"}></div>
            
            <div>{text}</div>
            
            </button>
    </div>
    )
}