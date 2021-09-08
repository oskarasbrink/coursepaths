import React from "react";
import mix from "../pics/mix.png";
import aws from "../pics/aws.png";
import databricks from "../pics/databricks.png";
import wasp from "../pics/wasp2.png";
import uu from "../pics/uu3.png";

function Footer() {
  return (
    <div className="flex justify-center items-center w-full md:p-7 p-3 bg-white text-gray-900">
      <div className="flex md:flex-row flex-col space-y-5 justify-center items-center w-full md:space-x-10 xl:space-x-16 px-5">
        <div className="flex justify-center md:justify-end w-full md:w-1/2 break-words  ">
          <div className="flex justify-center md:justify-end text-sm sm:text-md xl:text/lg">
            <p>2020-2021 instance was Sponsored by</p>
          </div>
        </div>
        <div className="flex justify-center md:justify-start w-2/3 md:w-1/2">
          <div className="flex flex-col justify-start items-start space-y-3 text-xs sm:text-sm md:text-md xl:text/lg">
            <div className="flex justify-start items-center space-x-2 break-words ">
              <img
                className="h-8 w-12 object-scale-down border border-gray-50 p-1 rounded-sm "
                src={mix}
                alt=""
              />

              <a
                className="hover:text-indigo-200 "
                href="https://combient.com/mix"
                target="_blank"
              >
                Combient Mix
              </a>
            </div>
            <div className="flex justify-start items-center space-x-2 break-words  ">
              <img
                className="h-8 w-12 object-scale-down border border-gray-50 p-1 rounded-sm "
                src={wasp}
                alt=""
              />

              <a
                className="hover:text-indigo-200 "
                href="https://wasp-sweden.org/"
                target="_blank"
              >
                Wallenberg AI, Autonomous Systems and Software Program
              </a>
            </div>
            <div className="flex justify-start items-center space-x-2 break-words  ">
              <img
                className="h-8 w-12 object-scale-down border border-gray-50 p-1 rounded-sm "
                src={uu}
                alt=""
              />
              <p>
                <a
                  className="hover:text-indigo-200"
                  href="https://math.uu.se/"
                  target="_blank"
                >
                  Department of Mathematics and Centre for Interdisciplinary
                  Mathematics at Uppsala University
                </a>
              </p>
            </div>
            <div className="flex justify-start items-center space-x-2 break-words">
              <img
                className="h-8 w-12 object-scale-down border border-gray-50 p-1 rounded-sm "
                src={databricks}
                alt=""
              />
              <a
                className="hover:text-indigo-200 "
                href="http://databricks.com/"
                target="_blank"
              >
                Databricks
              </a>
              <div>University Alliance with</div>
              <img
                className="h-8 w-12 object-scale-down border border-gray-50 p-1 rounded-sm "
                src={aws}
                alt=""
              />
              <a
                className="hover:text-indigo-200 "
                href="https://aws.amazon.com/"
                target="_blank"
              >
                AWS
              </a>
              <div> credits</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
