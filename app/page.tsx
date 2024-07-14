import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Home() {
  return (
    <div className="bg-gray-400 w-full h-screen">
      <div className="grid grid-cols-2 bg-green-300 max-w-7xl mx-auto">
        <div className="col-span-2 py-24 flex justify-center">
          <div className="p-5 w-3/4 flex">
            <input type="text" className="w-full h-14 rounded-tl-xl rounded-bl-xl text-center outline-none" placeholder="Stadt..."/>
            <button className="bg-orange-500 h-14 w-28 rounded-tr-xl rounded-br-xl flex justify-center items-center">
              <MagnifyingGlassIcon className="h-8 w-auto"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
