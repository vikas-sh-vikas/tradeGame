"use client";

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from './redux/store';
import { dataSet } from "./redux/features/slice";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import router  from "next/router";
import { Task, getSharedState, setSharedState } from '@/app/redux/shared';

function Home() {
  const username = useAppSelector((state) => state.dataReducer.value);
  const [table, setTable] = useState(false);
  const [tasks, setTasks] = useState<Task>(getSharedState());

  // const router = useRouter();
  const [options, setOptions] = useState([
    {
      name: "vikas2",
      trade: "SBI",
      rate: "1000",
      actualRate: "1200",
    },
    {
      name: "vikas3",
      trade: "SBI",
      rate: "1000",
      actualRate: "1200",
    },
    {
      name: "vikas4",
      trade: "SBI",
      rate: "1000",
      actualRate: "1200",
    },
    {
      name: "vikas",
      trade: "SBI",
      rate: "1000",
      actualRate: "1200",
    },
  ]);
  useEffect(() => {
    const handleStorageChange = () => {
      setTasks(getSharedState());
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  // const setData = async () => {
  //   setTable(!table)
  // };
  console.log("taskArray",tasks)
  return (
    <div>
            {/* <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => setData()}
      >
        Set Data
      </button> */}
      {/* <h4 className="bg-white flex justify-around pb-3 mb-3">data set</h4> */}
      <h1 className="bg-white flex justify-around text-blck title-font sm:text-2xl text-xl font-medium p-2 mb-3">
        customer
      </h1>
      <div className="flex justify-around">
        {tasks.itemList?.map((key) => (
          <div>
            <h1 className="text-white title-font sm:text-2xl text-xl font-medium p-2">
              {key.name}
            </h1>
            <h1 className="text-white title-font sm:text-2xl text-xl font-medium p-2">
              {key.trade}
            </h1>
            <div className="flex items-center p-2">

            <h1 className="text-green-500 title-font sm:text-2xl text-xl font-medium">
              {key.rate}
            </h1>
            <FaCaretUp style={{fontSize:"x-large"}} className="text-green-500"></FaCaretUp>
            </div>
            <div className="flex items-center p-2">
              <h1 className="text-red-500 title-font sm:text-2xl text-xl font-medium">
                {key.actualRate}
              </h1>
              <FaCaretDown style={{fontSize:"x-large"}} className="text-red-500"></FaCaretDown>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
