import React from "react";

function BgScreen(props) {
  return (
    <div className="flex flex-col space-y-5">
      <div className="text-md md:text-lg text-center">{props.Id}</div>

      <div className="flex flex-col justify-items-center space-y-4 ">
        <a
          className="bg-gray-900 hover:bg-black hover:text-white hover:shadow-md rounded-md shadow  text-center py-1 px-3 md:px-5 xl:px-7"
          href={props.Book}
          target="_blank"
        >
          book
        </a>
        <a
          className="bg-gray-900 hover:bg-black hover:text-white hover:shadow-md  rounded-md shadow text-center py-1 px-3 md:px-5 xl:px-7"
          href={props.Site}
          target="_blank"
        >
          site
        </a>
        <a
          className="bg-gray-900 hover:bg-black hover:text-white hover:shadow-md rounded-md shadow  text-center py-1 px-3 md:px-5 xl:px-7"
          href={props.Dbc}
          target="_blank"
        >
          .dbc
        </a>
      </div>
    </div>
  );
}

export default BgScreen;
