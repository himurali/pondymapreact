import React from 'react';

export class Sidebar extends React.Component {


    render() {
        return (


            <div class="container mx-auto my-12 p-2 bg-gray-100">
            <div class="mb-4 w-full md:w-1/4 border-t-4 border-red-400 rounded-b-lg rounded-t shadow-lg bg-white overflow-hidden">
               <div class="mt-4 mb-8 px-6 py-4">
                  <div class="py-4 text-lg text-gray-700 tracking-wide">ONE</div>
                  <div class="py-4 text-lg text-gray-700 tracking-wide">ONE</div>
                  <div class="py-4 text-lg text-gray-700 tracking-wide">THREE A</div>
                  
               </div>
            </div>
            <div class="mb-4 w-full md:w-1/4 shadow">
               <ul class="list-reset">
                  <li>
                     <a href="" class="block p-4 border-r-4 border-purple-400 text-base text-gray-gray-400 font-bold hover:border-purple-500 hover:bg-purple-100">AAA</a>
                  </li>
                  <li>
                     <a href="" class="block p-4 border-r-4 border-transparent text-base text-gray-gray-400 font-bold hover:border-purple-500 hover:bg-purple-100">BBB</a>
                  </li>
                  <li>
                     <a href="" class="block p-4 border-r-4 border-transparent text-base text-gray-gray-400 font-bold hover:border-purple-500 hover:bg-purple-100">CCC</a>
                  </li>
                  <li>
                     <a href="" class="block p-4 border-r-4 border-transparent text-base text-gray-gray-400 font-bold hover:border-purple-500 hover:bg-purple-100">DDD</a>
                  </li>
               </ul>
            </div>
         </div>);
        }

}