import "./App.css";
import { ArcherContainer, ArcherElement } from "react-archer";
import pathways from "./pathwaysContents.json";
import mix from "./pics/mix.png";
import aws from "./pics/aws.png";
import databricks from "./pics/databricks.png";
import wasp from "./pics/wasp2.png";
import uu from "./pics/uu3.png";
import lamastex from "./pics/DISP-lamastex-1600x524.jpeg";

function App() {
  return (
    <div className="w-full text-gray-100 bg-gray-100 font-mono">
      <div className="relative w-full">
        <img className="w-full" src={lamastex} alt=""></img>
        <div className="centered w-full md:text-2xl xl:text-2xl text-xl text-center text-white font-medium subpixel-antialiased shadow-lg brightness-110">
          <a href="https://lamastex.github.io/scalable-data-science/sds/3/x/">
            ScaDaMaLe Course Pathways
          </a>
        </div>
      </div>

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
                  <div
                    className="color flex flex-col p-2 md:p-5  rounded-lg ring ring-gray-700 ring-offset-2 space-y-6 shadow-lg xl:px-7 md:px-5 px-3"
                    title={pathways.allRows[row].cards[card].hover}
                  >
                    <div className="text-md md:text-lg text-center">
                      {pathways.allRows[row].cards[card].id}
                    </div>
                    <div className="flex flex-col justify-items-center space-y-4 ">
                      <a
                        className="bg-gray-900 hover:bg-black hover:shadow-md rounded-md shadow  text-center py-1 px-3 md:px-5 xl:px-7"
                        href={pathways.allRows[row].cards[card].bookLink}
                        target="_blank"
                      >
                        book
                      </a>
                      <a
                        className="bg-gray-900 hover:bg-black hover:shadow-md  rounded-md shadow text-center py-1 px-3 md:px-5 xl:px-7"
                        href={pathways.allRows[row].cards[card].siteLink}
                        target="_blank"
                      >
                        site
                      </a>
                      <a
                        className="bg-gray-900 hover:bg-black hover:shadow-md rounded-md shadow  text-center py-1 px-3 md:px-5 xl:px-7"
                        href={pathways.allRows[row].cards[card].dbcLink}
                        target="_blank"
                      >
                        .dbc
                      </a>
                    </div>
                  </div>
                </ArcherElement>
              ))}
            </div>
          ))}
        </ArcherContainer>
      </div>
      <div className="flex justify-center items-center w-full md:p-7 p-3 bg-white text-gray-900">
        <div className="flex justify-center items-center w-full space-x-10 ">
          <div className="flex justify-center w-1/2 ">
            <div className="flex justify-end">
              <p>2020-2021 instance was Sponsored by</p>
            </div>
          </div>
          <div className="flex justify-center w-1/2">
            <div className="flex flex-col justify-start items-start space-y-3 ">
              <div className="flex justify-start items-center space-x-2">
                <img
                  className="h-8 w-12 object-scale-down border border-gray-50 p-1 rounded-sm "
                  src={mix}
                  alt=""
                />

                <a
                  className="hover:text-indigo-200 text-sm md:text-md xl:text/lg"
                  href="https://combient.com/mix"
                  target="_blank"
                >
                  Combient Mix
                </a>
              </div>
              <div className="flex justify-start items-center space-x-2 ">
                <img
                  className="h-8 w-12 object-scale-down border border-gray-50 p-1 rounded-sm "
                  src={wasp}
                  alt=""
                />
                <a
                  className="hover:text-indigo-200 text-sm md:text-md xl:text/lg"
                  href="https://wasp-sweden.org/"
                  target="_blank"
                >
                  Wallenberg AI, Autonomous Systems and Software Program
                </a>
              </div>
              <div className="flex justify-start items-center space-x-2 ">
                <img
                  className="h-8 w-12 object-scale-down border border-gray-50 p-1 rounded-sm "
                  src={uu}
                  alt=""
                />
                <a
                  className="hover:text-indigo-200 text-sm md:text-md xl:text/lg"
                  href="https://math.uu.se/"
                  target="_blank"
                >
                  Department of Mathematics and Centre for Interdisciplinary
                  Mathematics at Uppsala University
                </a>
              </div>
              <div className="flex justify-start items-center space-x-2 ">
                <img
                  className="h-8 w-12 object-scale-down border border-gray-50 p-1 rounded-sm "
                  src={databricks}
                  alt=""
                />
                <a
                  className="hover:text-indigo-200 text-sm md:text-md xl:text/lg"
                  href="http://databricks.com/"
                  target="_blank"
                >
                  Databricks
                </a>
                
                <span className="text-sm md:text-md xl:text/lg">
          
                  University Alliance with
                </span>
                <img
                  className="h-8 w-12 object-scale-down border border-gray-50 p-1 rounded-sm "
                  src={aws}
                  alt=""
                />
                <a
                  className="hover:text-indigo-200 text-sm md:text-md xl:text/lg"
                  href="https://aws.amazon.com/"
                  target="_blank"
                >
                  AWS
                </a>
                <div className="text-sm md:text-md xl:text/lg"> credits</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
