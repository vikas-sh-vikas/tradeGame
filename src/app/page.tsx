"use client";

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "./redux/store";
import { dataSet } from "./redux/features/slice";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import router from "next/router";
import { Task, getSharedState, setSharedState } from "@/app/redux/shared";

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

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  // const setData = async () => {
  //   setTable(!table)
  // };
  console.log("taskArray", tasks);
  return (
    <div className="homeData">
      <div className="flex justify-between">
        {tasks.itemList?.map((key) => (
          <div className="flex flex-col items-center w-dvw p-2">
            {/* <h1 className="text-white">{key.name}</h1> */}
            <h1 className="font-sans font-bold bg-slate-300 w-full text-cyan-800 text-center text-4xl p-2">{key.trade}</h1>
            <h1 className="text-white text-4xl font-bold p-2">
              {key.rate}
            </h1>
            {key.actualRate - key.rate >= 0 ? (
              <FaCaretUp
                style={{ fontSize: "100px" }}
                className="text-green-500 font-bold p-2"
              ></FaCaretUp>
            ) : (
              <FaCaretDown
                style={{ fontSize: "100px" }}
                className="text-red-500 p-2"
              ></FaCaretDown>
            )}
            <h1
              className={
                key.actualRate - key.rate >= 0
                  ? "text-green-500 text-4xl font-bold p-2"
                  : "text-red-500 text-4xl font-bold p-2"
              }
            >
              {key.actualRate}
            </h1>
            <h1
              className={
                key.actualRate - key.rate >= 0
                  ? "text-green-500 text-4xl font-bold p-2"
                  : "text-red-500 text-4xl font-bold p-2"
              }
            >
              {" "}
              {/* {key.actualRate - key.rate} */}
              {key.actualRate - key.rate >= 0
                ? `+${key.actualRate - key.rate}`
                : key.actualRate - key.rate}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
