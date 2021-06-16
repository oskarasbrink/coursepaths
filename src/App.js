import "./App.css";
import { ArcherContainer, ArcherElement } from "react-archer";


const rootStyle = { display: "flex", justifyContent: "center" };
const rowStyle = {
  margin: "200px 0",
  display: "flex",
  justifyContent: "space-between",
};
const boxStyle = { padding: "10px", border: "1px solid black" };
function App() {
  return (
    <div className="w-full p-2  md:p-7 m-5 md:m-2 text-white">
	  <div className="flex justify-center items-center w-full">
	  <p className=" mt-10 text-gray-50 text-4xl bg-indigo-400 p-5"><a href="https://lamastex.github.io/scalable-data-science/sds/3/x/">ScaDaMaLe Course Pathways</a></p>
	  </div>
      <div className="p=24 pt-24">
        <ArcherContainer strokeColor="#8c8fe7">
          <div id="1st-row" className="flex justify-evenly">
            <ArcherElement
              id="001"
              relations={[
                {
                  targetId: "002",
                  targetAnchor: "left",
                  sourceAnchor: "right",
                },
              ]}
            >
              <div className="flex flex-col p-5 bg-indigo-600 rounded-lg ring ring-indigo-300 ring-offset-2 space-y-6 shadow-lg pl-5 pr-5">
                <div className="text-lg text-center">001</div>
                <div className="flex flex-col justify-items-center space-y-4 ">
                  <a
                    className="bg-indigo-400 rounded-md shadow-sm  text-center p-1 pl-5 pr-5"
                    href="https://lamastex.github.io/ScaDaMaLe/000_1-sds-3-x"
                  >
                    book
                  </a>
                  <a
                    className="bg-indigo-400 rounded-md shadow-sm text-center p-1 pl-5 pr-5"
                    href="https://lamastex.github.io/scalable-data-science/sds/3/x/#000_1-sds-3-x"
                  >
                    site
                  </a>
                  <a
                    className="bg-indigo-400 rounded-md shadow-sm  text-center p-1 pl-5 pr-5"
                    href="https://github.com/lamastex/scalable-data-science/raw/master/dbcArchives/2021/000_1-sds-3-x.dbc"
                  >
                    .dbc
                  </a>
                </div>
              </div>
            </ArcherElement>
            <ArcherElement
              id="002"
              relations={[
                {
                  targetId: "003",
                  targetAnchor: "left",
                  sourceAnchor: "right",
                },
                {
                  targetId: "004",
                  targetAnchor: "top",
                  sourceAnchor: "bottom",
                },
                {
                  targetId: "005",
                  targetAnchor: "top",
                  sourceAnchor: "bottom",
                },
                {
                  targetId: "006",
                  targetAnchor: "top",
                  sourceAnchor: "bottom",
                },
                {
                  targetId: "008",
                  targetAnchor: "top",
                  sourceAnchor: "bottom",
                },
              ]}
            >
              <div className="flex flex-col p-5 bg-indigo-600 rounded-lg ring ring-indigo-300 ring-offset-2 space-y-6 shadow-lg pl-5 pr-5">
                <div className="text-lg text-center">002</div>
                <div className="flex flex-col justify-items-center space-y-4 ">
                  <a
                    className="bg-indigo-400 rounded-md shadow-sm  text-center p-1 pl-5 pr-5"
                    href="#"
                  >
                    Book
                  </a>
                  <a
                    className="bg-indigo-400 rounded-md shadow-sm text-center p-1 pl-5 pr-5"
                    href="#"
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
            </ArcherElement>
            <ArcherElement id="003">
              <div className="flex flex-col p-5 bg-indigo-600 rounded-lg ring ring-indigo-300 ring-offset-2 space-y-6 shadow-lg pl-5 pr-5">
                <div className="text-lg text-center">003</div>
                <div className="flex flex-col justify-items-center space-y-4 ">
                  <a
                    className="bg-indigo-400 rounded-md shadow-sm  text-center p-1 pl-5 pr-5"
                    href="#"
                  >
                    Book
                  </a>
                  <a
                    className="bg-indigo-400 rounded-md shadow-sm text-center p-1 pl-5 pr-5"
                    href="#"
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
            </ArcherElement>
          </div>

          <div id="2nd-row" className="flex justify-evenly pt-24 pb-24">
            <ArcherElement
              id="004"
              relations={[
                {
                  targetId: "009",
                  targetAnchor: "top",
                  sourceAnchor: "bottom",
                  style: { strokeColor: "blue", strokeWidth: 1 },
                  label: <div style={{ marginTop: "-20px" }}>Arrow 2</div>,
                },
              ]}
            >
              <div className="flex flex-col p-5 bg-indigo-600 rounded-lg ring ring-indigo-300 ring-offset-2 space-y-6 shadow-lg pl-5 pr-5">
                <div className="text-lg text-center">004</div>
                <div className="flex flex-col justify-items-center space-y-4 ">
                  <a
                    className="bg-indigo-400 rounded-md shadow-sm  text-center p-1 pl-5 pr-5"
                    href="#"
                  >
                    Book
                  </a>
                  <a
                    className="bg-indigo-400 rounded-md shadow-sm text-center p-1 pl-5 pr-5"
                    href="#"
                  >
                    Site
                  </a>
                  <a
                    className="bg-indigo-400 rounded-md shadow-sm  text-center p-1 pl-5 pr-5"
                    href="#"
                  >
                    Dbc
                  </a>
                </div>
              </div>
            </ArcherElement>

            <ArcherElement id="005">
              <div className="flex flex-col p-5 bg-indigo-600 rounded-lg ring ring-indigo-300 ring-offset-2 space-y-6 shadow-lg pl-5 pr-5">
                <div className="text-lg text-center">005</div>
                <div className="flex flex-col justify-items-center space-y-4 ">
                  <a
                    className="bg-indigo-400 rounded-md shadow-sm  text-center p-1 pl-5 pr-5"
                    href="#"
                  >
                    Book
                  </a>
                  <a
                    className="bg-indigo-400 rounded-md shadow-sm text-center p-1 pl-5 pr-5"
                    href="#"
                  >
                    Site
                  </a>
                  <a
                    className="bg-indigo-400 rounded-md shadow-sm  text-center p-1 pl-5 pr-5"
                    href="#"
                  >
                    Dbc
                  </a>
                </div>
              </div>
            </ArcherElement>

            <ArcherElement
              id="006"
              relations={[
                {
                  targetId: "007",
                  targetAnchor: "top",
                  sourceAnchor: "bottom",
                  style: { strokeColor: "blue", strokeWidth: 1 },
                  label: <div style={{ marginTop: "-20px" }}>Arrow 2</div>,
                },
              ]}
            >
              <div className="flex flex-col p-5 bg-indigo-600 rounded-lg ring ring-indigo-300 ring-offset-2 space-y-6 shadow-lg pl-5 pr-5">
                <div className="text-lg text-center">006</div>
                <div className="flex flex-col justify-items-center space-y-4 ">
                  <a
                    className="bg-indigo-400 rounded-md shadow-sm  text-center p-1 pl-5 pr-5"
                    href="#"
                  >
                    Book
                  </a>
                  <a
                    className="bg-indigo-400 rounded-md shadow-sm text-center p-1 pl-5 pr-5"
                    href="#"
                  >
                    Site
                  </a>
                  <a
                    className="bg-indigo-400 rounded-md shadow-sm  text-center p-1 pl-5 pr-5"
                    href="#"
                  >
                    Dbc
                  </a>
                </div>
              </div>
            </ArcherElement>

            <ArcherElement id="008">
              <div className="flex flex-col p-5 bg-indigo-600 rounded-lg ring ring-indigo-300 ring-offset-2 space-y-6 shadow-lg pl-5 pr-5">
                <div className="text-lg text-center">008</div>
                <div className="flex flex-col justify-items-center space-y-4 ">
                  <a
                    className="bg-indigo-400 rounded-md shadow-sm  text-center p-1 pl-5 pr-5"
                    href="#"
                  >
                    Book
                  </a>
                  <a
                    className="bg-indigo-400 rounded-md shadow-sm text-center p-1 pl-5 pr-5"
                    href="#"
                  >
                    Site
                  </a>
                  <a
                    className="bg-indigo-400 rounded-md shadow-sm  text-center p-1 pl-5 pr-5"
                    href="#"
                  >
                    Dbc
                  </a>
                </div>
              </div>
            </ArcherElement>
          </div>
          <div id="3nd-row" className="flex justify-evenly pt-24 pb-24">
            <ArcherElement id="007">
              <div className="flex flex-col p-5 bg-indigo-600 rounded-lg ring ring-indigo-300 ring-offset-2 space-y-6 shadow-lg pl-5 pr-5">
                <div className="text-lg text-center">007</div>
                <div className="flex flex-col justify-items-center space-y-4 ">
                  <a
                    className="bg-indigo-400 rounded-md shadow-sm  text-center p-1 pl-5 pr-5"
                    href="#"
                  >
                    Book
                  </a>
                  <a
                    className="bg-indigo-400 rounded-md shadow-sm text-center p-1 pl-5 pr-5"
                    href="#"
                  >
                    Site
                  </a>
                  <a
                    className="bg-indigo-400 rounded-md shadow-sm  text-center p-1 pl-5 pr-5"
                    href="#"
                  >
                    Dbc
                  </a>
                </div>
              </div>
            </ArcherElement>
            <ArcherElement id="009">
              <div className="flex flex-col p-5 bg-indigo-600 rounded-lg ring ring-indigo-300 ring-offset-2 space-y-6 shadow-lg pl-5 pr-5">
                <div className="text-lg text-center">009</div>
                <div className="flex flex-col justify-items-center space-y-4 ">
                  <a
                    className="bg-indigo-400 rounded-md shadow-sm  text-center p-1 pl-5 pr-5"
                    href="#"
                  >
                    Book
                  </a>
                  <a
                    className="bg-indigo-400 rounded-md shadow-sm text-center p-1 pl-5 pr-5"
                    href="#"
                  >
                    Site
                  </a>
                  <a
                    className="bg-indigo-400 rounded-md shadow-sm  text-center p-1 pl-5 pr-5"
                    href="#"
                  >
                    Dbc
                  </a>
                </div>
              </div>
            </ArcherElement>
          </div>
        </ArcherContainer>
      </div>
    </div>
  );
}

export default App;
