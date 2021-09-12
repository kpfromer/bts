import Logo from "./Logo";

export const Header = () => {
  return (
    <nav className="w-full z-30 text-white py-4 bg-logo select-none">
      <div className="flex flex-row mx-auto items-center px-2">
        <a className="inline-block flex flex-row">
          <Logo fill="white" width="5em" height="auto" />
          <h1 className="text-4xl font-bold ml-6 font-header">Bus to Show</h1>
        </a>
      </div>
    </nav>
  ); // return (
  // <nav className="w-full z-30 top-0 text-white py-1 lg:py-6 bg-logo">
  //     <div
  //         className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6"
  //     >
  //         <div className="pl-4 flex items-center">
  //             <a
  //                 className="text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
  //                 href="#"
  //             >
  //                 <Logo fill="white" width="3em" height="auto" />
  //             </a>
  //         </div>

  //         <div className="block lg:hidden pr-4">
  //             <button
  //                 id="nav-toggle"
  //                 className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-green-500 appearance-none focus:outline-none"
  //             >
  //                 <Logo fill="white" />
  //             </button>
  //         </div>

  //         <div
  //             className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20"
  //             id="nav-content"
  //         >
  //             <ul className="list-reset lg:flex justify-end flex-1 items-center">
  //                 <li className="mr-3">
  //                     <a
  //                         className="inline-block py-2 px-4 text-black font-bold no-underline"
  //                         href="#"
  //                     >Active</a
  //                     >
  //                 </li>
  //                 <li className="mr-3">
  //                     <a
  //                         className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
  //                         href="#"
  //                     >link</a
  //                     >
  //                 </li>
  //                 <li className="mr-3">
  //                     <a
  //                         className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
  //                         href="#"
  //                     >link</a
  //                     >
  //                 </li>
  //             </ul>
  //             <button
  //                 id="navAction"
  //                 className="bg-gradient-to-r from-amber-300 to-amber-500 mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded mt-4 lg:mt-0 py-4 px-8 shadow opacity-75"
  //             >
  //                 Action
  //             </button>
  //         </div>
  //     </div>
  // </nav >
  // )
};
