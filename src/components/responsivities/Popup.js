import React from "react";

function Popup(props) {
  return (
    <div
      className="popup color rounded-lg ring ring-gray-700 ring-offset-2 pt-10 pb-6 flex flex-col justify-center items-center px-10 md:px-14 shadow-lg space-y-7 text-lg"
      title={props.Title}
    >
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
          className="bg-gray-900 hover:bg-black hover:shadow-md hover:text-white  rounded-md shadow text-center py-1 px-3 md:px-5 xl:px-7"
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

      <div className="">
        <button
          type="button"
          class="bg-gray-300 rounded-md p-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-300 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          onClick={props.closePopup}
        >
          <span class="sr-only">Close menu</span>

          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Popup;
