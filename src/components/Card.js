import React from "react";

function Card({name,book,dbc}) {
  return (
    <div className="flex flex-col p-5 bg-indigo-600 rounded-lg ring ring-indigo-300 ring-offset-2 space-y-6 shadow-lg pl-5 pr-5">
      <div className="text-lg text-center">{name}</div>
      <div className="flex flex-col justify-items-center space-y-4 ">
        <a
          className="bg-indigo-400 rounded-md shadow-sm  text-center p-1 pl-5 pr-5"
          href={book}
        >
          Book
        </a>
        <a
          className="bg-indigo-400 rounded-md shadow-sm text-center p-1 pl-5 pr-5"
          href={dbc}
        >
          dbc
        </a>
        <a
          className="bg-indigo-400 rounded-md shadow-sm  text-center p-1 pl-5 pr-5"
          href="#"
        >
          Book
        </a>
      </div>
    </div>
  );
}

export default Card;
