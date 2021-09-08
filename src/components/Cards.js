import React, { useState } from "react";
import { ArcherContainer, ArcherElement } from "react-archer";
import pathways from "../pathwaysContents.json";
import BgScreen from "./responsivities/BgScreen";
import Popup from "./responsivities/Popup";

function Cards() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState();
  const [id, setId] = useState();
  const [book, setBook] = useState();
  const [site, setSite] = useState();
  const [dbc, setDbc] = useState();
  const closePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="md:p=24 md:pt-24 p-7">
      <ArcherContainer strokeColor="#B5B5B3">
        {Object.keys(pathways.allRows).map((row, index) => (
          <div
            key={index}
            id={pathways.allRows[row].id}
            className="flex justify-evenly md:py-24 py-10 "
          >
            {Object.keys(pathways.allRows[row].cards).map((card, index) => (
              <ArcherElement
                key={index}
                id={pathways.allRows[row].cards[card].id}
                relations={pathways.allRows[row].cards[card].connections}
              >
                <div>
                  <div
                    className="hidden lg:block color flex flex-col p-2 md:p-5  rounded-lg ring ring-gray-700 ring-offset-2 space-y-6 shadow-lg xl:px-7 md:px-5 px-3"
                    title={pathways.allRows[row].cards[card].hover}
                  >
                    <BgScreen
                      Id={pathways.allRows[row].cards[card].id}
                      Book={pathways.allRows[row].cards[card].bookLink}
                      Site={pathways.allRows[row].cards[card].siteLink}
                      Dbc={pathways.allRows[row].cards[card].dbcLink}
                    />
                  </div>

                  <button
                    onClick={() => {
                      if (!isOpen) {
                        setTitle(pathways.allRows[row].cards[card].hover);
                        setId(pathways.allRows[row].cards[card].id);
                        setBook(pathways.allRows[row].cards[card].bookLink);
                        setSite(pathways.allRows[row].cards[card].siteLink);
                        setDbc(pathways.allRows[row].cards[card].dbcLink);
                      }
                      closePopup();
                    }}
                  >
                    <div
                      className="color hover:bg-gray-900 hover:text-white hover:shadow-xl block lg:hidden flex flex-col p-2 md:p-5  rounded-lg  space-y-6 shadow-lg xl:px-7 md:px-5 px-3"
                      title={pathways.allRows[row].cards[card].hover}
                    >
                      <div className="five_chars text-md md:text-lg text-center">
                        {pathways.allRows[row].cards[card].id}
                      </div>
                    </div>
                  </button>
                  {isOpen && (
                    <Popup
                      Title={title}
                      Id={id}
                      Book={book}
                      Site={site}
                      Dbc={dbc}
                      closePopup={closePopup}
                    />
                  )}
                </div>
              </ArcherElement>
            ))}
          </div>
        ))}
      </ArcherContainer>
    </div>
  );
}

export default Cards;
