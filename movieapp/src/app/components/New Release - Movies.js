import React from "react";
import Image from "next/image";
import CardList from "../data1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faPlayCircle,
  faClock,
  faArrowCircleRight,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Newreleasemovies = () => {
  return (
    <main className="flex justify-center gap-10 flex-col px-20  bg-black py-10">
      <div className="flex justify-between">
      <h1 className="text-white font-bold ">New Release Movies</h1>
      <div className="flex gap-4  ">
                    <h4 className="flex text-white items-center  font-bold">View all</h4>
                    <FontAwesomeIcon icon={faArrowCircleRight}
                    className="flex fa-solid fa-arrow-right text-white w-8 h-8" />
                  </div>
                  </div>

      <div className="flex justify-between  gap-10">
        {CardList.map((card) => (
          <div className=" rounded-lg items-center justify-between">
            <div>
              <img className="rounded-lg w-52 h-64 " src={card.img} alt="" />
            
            </div>
            <div className=" flex justify-between">
              <h3 className="flex  text-normal  text-slate-600">
                {card.title}
              </h3>
              <div class="flex justify-end gap-2 ">
                <button className="bg-red-500 flex  hover:bg-red-300 items-center text-white  rounded">
                  Hd
                </button>
                <button className="bg-transparent flex hover:bg-red-300 ring-1 ring-orange-700 ring-inset  text-white rounded">
                  3:12:00
                  <FontAwesomeIcon
                    icon={faClock}
                    className="fa-regular fa-circle-play flex mt-1 ml-2 h-4 w-4 text-green-50"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
export default Newreleasemovies;
