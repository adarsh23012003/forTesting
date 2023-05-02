import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdArrowDropDown } from "react-icons/md";
import { useRouter } from "next/router";

const SearchMenu = () => {
  const [input, setInput] = useState();
  const [data, setData] = useState([]);
  const uniqueSet = new Set();
  const states = new Set();
  const cities = {};
  let autoCompleteData = [];
  const router = useRouter();
  const [dropdownArray, setDropdownArray] = useState([]);
  const [dropDownValue, setDropDownValue] = useState();
  // console.log(dropdownArray);

  useEffect(() => {
    function getAllData() {
      fetch("http://localhost:3000/api/staticdata")
        .then((res) => {
          return res.json();
        })
        .then((data) =>
          //  console.log(data),
          setData(data)
        );
    }
    getAllData();
  }, []);

  useEffect(() => {
    if (dropDownValue) {
      // router.push(`http://localhost:3000?cities=${dropDownValue}`);
      router.push(
        `http://localhost:3000/?cities=${input}&city=${dropDownValue}&page=1`
      );
    }
  }, [dropDownValue]);

  for (let index = 0; index < data.length; index++) {
    uniqueSet.add(data[index].locality);
  }
  uniqueSet.forEach((element) => {
    const [city, state] = element.split(",").map((e) => e.trim());
    states.add(state);
    if (!cities[state]) {
      cities[state] = [];
    }
    cities[state].push(city);
  });
  // first search
  // console.log(states);
  // second search
  // console.log(cities);

  states.forEach((element) => {
    if (element?.includes(input)) {
      autoCompleteData.push(element);
    }
  });

  const dropdown = function () {
    // console.log(cities[input]);
    setDropdownArray(cities[input]);
  };
  return (
    <>
      <div className='flex justify-center pt-4'>
        {/* --------- input and search bar icon */}
        <div className='flex w-full'>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            type='text'
            placeholder='Search by Category, Company or ...'
            className='rounded-l-full px-14 py-2 w-full bg-white shadow-sm focus:outline-blue-500 border-2'
          />
        </div>
        <button
          onClick={() => {
            router.push(`http://localhost:3000?cities=${input}`), dropdown();
          }}
          className='bg-[#5060FF] rounded-r-full flex w-12 shadow-sm justify-center items-center'
        >
          <BiSearchAlt2 />
        </button>
      </div>
      {/* ----------- Dropdown ------------------- */}
      <button>
        {input
          ? autoCompleteData?.map((e) => {
              return (
                <>
                  <div
                    onClick={() => {
                      setInput(e);
                    }}
                  >
                    {input === e ? "" : e}
                  </div>
                </>
              );
            })
          : ""}
      </button>
      {/* **************** dropdown ( scroll) *************************** */}
      <div>
        <div>
          {dropdownArray.length ? (
            <div className='flex gap-10'>
              <select
                className='border py-2 px-1 focus:outline-blue-500 rounded-xl'
                onChange={(event) => {
                  setDropDownValue(event.target.value);
                }}
              >
                <option selected>Choose a country</option>
                {dropdownArray?.map((element) => {
                  return (
                    <>
                      <option>{element}</option>
                    </>
                  );
                })}
              </select>
              <button
                className='text-[#5060FF]'
                onClick={() => {
                  alert("coming soon!");
                }}
              >
                Clear filters
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {/* -------------- */}
      {/* 
      <div className=' flex justify-center lg:justify-start flex-wrap flex-grow gap-5 pb-5'>
        <Button name='UX Designer' />
        <Button name='UI Designer' />
        <Button name='Product Designer' />
        <button className='text-[#5060FF]'>Clear filters</button>
      </div> */}
      {/* </div> */}
      <div className='flex justify-between py-5'>
        <div>
          <span>Jobs For You</span>
          <span className='text-[#5060FF] font-semibold'>&nbsp;Popular</span>
        </div>
        <div className='flex justify-end items-centers gap-3'>
          Sort:
          <button className='flex items-center border-2 rounded-full px-3 border-blue-100 py-0.5'>
            Newest
            <MdArrowDropDown />
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchMenu;
