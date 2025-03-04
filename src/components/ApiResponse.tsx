import  { FC } from "react";
import CodeBlock from "./CodeBlock";
import { ApiResponseProps, method } from "../type";


const ApiResponse:FC<ApiResponseProps> = ({ text,  method="GET",  url="https://backend-service-two.vercel.app/v1/getallnotes"}) => {
    const methodColors = (method:  method): string => {
            switch(method){
                case "GET":
                    return "bg-green-500";
                case "POST":
                    return "bg-blue-500";
                case "PUT":
                    return "bg-yellow-500";
                case "DELETE":
                    return "bg-red-500";
                case "UPDATE":
                    return "bg-purple-500";
                default:
                    return "bg-gray-500";
            }
    }

  return (
    <div className="w-full  p-2  relative overflow-hidden rounded-2xl bg-red-300">
        <div className={`relative overflow-hidden inline-block `}>
            <h1 className={`${methodColors(method)} px-3 py-2 rounded-full title-lg`}>Method: {method}</h1>
        </div>
        <div className="w-full relative overflow-hidden">
            <p className="text-[16.4px] py-2">Copy the code and paste any browser or terminal!
                {text}
            </p>
            <div className="code-block">
                <CodeBlock code={`fetch("${url}")`}/>
            </div>
            <button className="bg-green-500 text-white py-2 px-5 rounded-md cursor-pointer">Run</button>
            <div className="code-block">
                <CodeBlock language="json"/>
            </div>
        </div>
    </div>
  )
}

export default ApiResponse;