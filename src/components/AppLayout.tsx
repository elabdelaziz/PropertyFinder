import React, { useState, useEffect } from "react";
import {
  FaChevronDown,
  FaFacebook,
  FaLinkedin,
  FaSearch,
} from "react-icons/fa";
import DoubleSwitchButton from "./DoubleSwitchButtons";
import GridSection from "./GridSection";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useTypedDispatch, useTypedSelector } from "@/hooks/useRedux";
import { getFooterData, getLocalData } from "@/reducers/dataSlice";
import NoteModal from "./NoteModal";

export default function AppLayout() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLeftActive, setIsLeftActive] = useState(true);
  const [openNote, setOpenNote] = useState(false);
  const dispatch = useTypedDispatch();

  const footerData = useTypedSelector((state) => state.data.footerData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await import("../../data.json");
        const data = response.catalog;
        const footerData = response.footerData;
        dispatch(getLocalData(data));
        dispatch(getFooterData(footerData));
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setOpenNote(true);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      {openNote && <NoteModal setOpenNote={setOpenNote} />}
      <section className="flex relative bg-center bg-[url('/assets/hero-city.svg')] w-full bg-no-repeat bg-cover h-[100vh]">
        <nav className="flex px-[4rem] h-[80px] items-center w-full justify-between">
          <h1 className="font-[700] text-primaryBlue">PropertyFinder</h1>
          <div className="flex items-center">
            <ul className="flex [&_li]:ml-[2rem] [&_li]:tracking-[0.7px] [&_*]:flex [&_span]:items-center">
              <li
                onMouseEnter={toggleDropdown}
                onMouseLeave={toggleDropdown}
                className="relative"
              >
                Rentals
                <span className="mt-[5px] ml-[5px] text-primaryBlue">
                  <FaChevronDown size={"0.7rem"} />
                </span>
              </li>
              <li>
                Sales
                <span className="mt-[5px] ml-[5px] text-primaryBlue">
                  <FaChevronDown size={"0.7rem"} />
                </span>
              </li>
              <li>
                Buildings
                <span className="mt-[5px] ml-[5px] text-primaryBlue">
                  <FaChevronDown size={"0.7rem"} />
                </span>
              </li>
              <li>
                Tools
                <span className="mt-[5px] ml-[5px] text-primaryBlue">
                  <FaChevronDown size={"0.7rem"} />
                </span>
              </li>
              <li>
                Blogs
                <span className="mt-[5px] ml-[5px] text-primaryBlue">
                  <FaChevronDown size={"0.7rem"} />
                </span>
              </li>
            </ul>
            <button className="ml-[2rem] tracking-[0.7px] text-primaryBlue">
              Sign Up
            </button>
            <button className="ml-[2rem] tracking-[0.7px] font-[500] h-[45px] leading-[45px] p-[0_30px] text-primaryBlue bg-white shadow-[0_5px_24px_rgba(31,37,59,.15)] w-[110px] rounded-[60px]">
              Log In
            </button>
          </div>
        </nav>
        <div className="absolute left-1/2 p-[40px_40px_30px] rounded-[10px] shadow-[0_20px_50px_rgba(0,22,84,.15)] top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[540px] md:w-[1040px] bg-white min-h-[200px]">
          <h1 className="text-[40px] font-[700] opacity-[0.8]">
            NYC Apatments for rent
          </h1>
          <div className="flex items-center pt-[30px]">
            <DoubleSwitchButton
              isLeftActive={isLeftActive}
              setIsLeftActive={setIsLeftActive}
              onLeftClick={() => {}}
              onRightClick={() => {}}
            />
            <span className="ml-[10px] opacity-[0.6]">NYC Real Estate</span>
          </div>
          <div className="flex pt-[20px]">
            <div className="relative m-[0_10px_0_0]">
              <input
                type="text"
                placeholder="Search..."
                className="w-full shadow-[0_5px_24px_rgba(31,37,59,.15)] bg-white h-[60px] p-[0_45px_0_20px] rounded-[10px] border-[1px] border-solid border-[#e1e5f2] text-[18px] leading-[58px]"
              />
              <div className="absolute top-[10px] right-0 px-4 py-2">
                <FaSearch className="w-6 h-6 text-gray-400" />
              </div>
            </div>
            <div className="flex w-[270px] m-[0_10px_0_0] border-[1px] border-solid border-[#e1e5f2] rounded-[10px] overflow-hidden h-[60px] shadow-[0_5px_24px_rgba(31,37,59,.15)]">
              <input
                type="number"
                placeholder="$ Min"
                id="min-input"
                name="min-input"
                className="border-r-[1px] w-1/2 border-r-solid border-r-[#e1e5f2] h-[58px] leading-[58px] text-[18px] p-[0_20px]"
                // value={minValue}
                // onChange={handleMinChange}
              />
              <input
                type="number"
                placeholder="$ Max"
                id="max-input"
                name="max-input"
                className="h-[58px] w-1/2 leading-[58px] text-[18px] p-[0_20px]"
                // value={maxValue}
                // onChange={handleMaxChange}
              />
            </div>
            <div className="w-[250px] m-[0_10px_0_0] p-[0_10px] flex items-center bg-white border-[1px] border-solid border-[#e1e5f2] rounded-[10px] text-center shadow-[0_5px_24px_rgba(31,37,59,.15)]">
              <div className="text-[18px] leading-[38px] p-[0_12px] relative font-[600] flex-1 cursor-pointer z-1">
                Studio
              </div>
              <div className="text-[18px] leading-[38px] p-[0_12px] relative font-[600] flex-1 cursor-pointer z-1">
                1
              </div>
              <div className="text-[18px] leading-[38px] p-[0_12px] relative font-[600] flex-1 cursor-pointer z-1">
                2
              </div>
              <div className="text-[18px] leading-[38px] p-[0_12px] relative font-[600] flex-1 cursor-pointer z-1">
                3
              </div>
              <div className="text-[18px] leading-[38px] p-[0_12px] relative font-[600] flex-1 cursor-pointer z-1">
                4+
              </div>
            </div>
            <button className="min-w-[150px] h-[60px] leading-[60px] p-[0_30px] text-[17px] font-[600] uppercase rounded-[60px] text-white bg-[#fd6b4d] shadow-[0_5px_24px_rgba(31,37,59,.15)]">
              Search
            </button>
          </div>
        </div>
      </section>
      <section className="bg-[#f8faff]">
        <GridSection />
      </section>
      <section className="relative flex justify-between before:content-[''] before:absolute before:top-0 before:w-[110%] before:right-0 before:h-[8vw] before:rotate-[3deg] before:origin-[100%_100%] before:bg-[#f8faff] items-center p-[170px_0_80px] overflow-hidden">
        <div className="w-[50%] pl-[8rem] pr-[15px]">
          <h1 className="text-[46px] font-[500] leading-[1.4] pr-[20%]">
            New York City Neighborhood Guides
          </h1>
          <p className="text-[#817f96] leading-[1.7] text-[18px] m-[30px_0_50px] pr-[13%]">
            Get the inside scoop on what it&#39;s like to live in New York
            City&#39;s hottest neighborhoods before you move. Explore the best
            of each borough by searching the{" "}
            <span className="text-[#3151b7]">
              best Manhattan neighborhoods, best Brooklyn neighborhoods, and
              best Queens neighborhoods.{" "}
            </span>
            Our guides include everything from pricing data to information on
            the neighborhood&#39;s vibe, landmarks, and its cultural and
            entertainment scenes.
          </p>
        </div>
        <div className="flex w-[50%] overflow-hidden">
          <div className="bg-white relative min-w-[300px] h-[360px] mr-[15px] rounded-[15px] overflow-hidden bg-[50%] bg-cover shadow-[0_5px_24px_rgba(31,37,59,.15)] rounded-md overflow-hidden shadow-md">
            <img
              className="w-full relative h-full object-cover"
              src={"/assets/astoria.jpg"}
              alt={"title"}
            />
            <h2 className="absolute top-0 left-0 m-[30px] text-[20px] font-[500] text-white">
              Astoria
            </h2>
          </div>
          <div className="bg-white relative min-w-[300px] h-[360px] mr-[15px] rounded-[15px] overflow-hidden bg-[50%] bg-cover shadow-[0_5px_24px_rgba(31,37,59,.15)] rounded-md overflow-hidden shadow-md">
            <img
              className="w-full relative h-full object-cover"
              src={"/assets/batterypark.jpg"}
              alt={"title"}
            />
            <h2 className="absolute top-0 left-0 m-[30px] text-[20px] font-[500] text-white">
              Battery Park
            </h2>
          </div>
          <div className="bg-white relative min-w-[300px] h-[360px] mr-[15px] rounded-[15px] overflow-hidden bg-[50%] bg-cover shadow-[0_5px_24px_rgba(31,37,59,.15)] rounded-md overflow-hidden shadow-md">
            <img
              className="w-full relative h-full object-cover"
              src={"/assets/brownstones.jpg"}
              alt={"title"}
            />
            <h2 className="absolute top-0 left-0 m-[30px] text-[20px] font-[500] text-white">
              BrownStones
            </h2>
          </div>
        </div>
      </section>
      <section className="py-[50px] flex justify-center bg-[#f8faff]">
        <div className="container flex justify-around">
          {footerData.map((item) => (
            <div className="">
              <h3 className="font-[500] uppercase m-[20px_0] leading-[20px] text-[#3151b7]">
                {item.title}
              </h3>
              <div className="flex flex-col">
                {item.links.map((link) => (
                  <a className="text-[#817f96] leading-[30px] m-[5px_0] transition-[.1]">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer className="bg-[#f8faff]">
        <div className="flex items-center p-[35px_0] justify-center">
          <a className="p-[0_10px]">
            <FaFacebook color="#3b5998" size={"2.5em"} />
          </a>
          <a className="p-[0_10px]">
            <AiFillTwitterCircle color="#1DA1F2" size={"2.5em"} />
          </a>
          <a className="p-[0_10px]">
            <FaLinkedin color="#0072b1" size={"2.5em"} />
          </a>
        </div>
        <div className="text-center pb-[35px] [&>span]:mr-[10px] text-[15px] text-[#c6cbd3]">
          <span>© PropertyFinder 2023</span>
          <span>Terms | </span>
          <span>Privacy</span>
        </div>
      </footer>
    </>
  );
}
