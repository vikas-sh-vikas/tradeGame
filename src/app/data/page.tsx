"use client";

import React, { useEffect, useState } from "react";
import { dataSet } from "../redux/features/slice";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { FaPlus, FaTrash } from "react-icons/fa";
import { useFieldArray, useForm } from "react-hook-form";
import { useAppSelector } from "../redux/store";
// import router  from "next/router";
type CustomerModel = {
  itemList?: {
    name?: string;
    trade?: string;
    rate?: number;
    actualRate?: number;
  }[];
};

function Data() {

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [table, setTable] = useState(false);
  const username = useAppSelector((state) => state.dataReducer.value);
  const defaultValues: CustomerModel = {
    itemList: [
      {
        name: "",
        trade: "",
        rate: 0,
        actualRate: 0,
      },
    ],
  };
  useEffect(() => {
    console.log("use Effect");
    console.log("Redux Data",username)
  }, [table]);
  const [formData, setFormData] = useState<CustomerModel>(defaultValues);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    watch,
    control,
    formState: { errors, isSubmitting },
  } = useForm<CustomerModel>({
    mode: "all",
    defaultValues: formData,
    // resolver: yupResolver<CustomerModel>(schema),
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "itemList",
  });
  const formValues = getValues();
  const setCustomerName = async () => {
    setTable(!table);
  };
  const resetCustomerName = async () => {
    setName("");
    reset();
    setTable(!table);
  };
  // const setData = async () => {
  //   dispatch(dataSet("UsernameSet"));
  //   setTable(!table)
  //   // router.push("/")

  // };

  // console.log("Redux Home component", name);
  console.log("Redux Home component", formValues);
  return (
    <div className="bg-white h-screen">
      {/* <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => setData()}
      >
        Set Data
      </button>
      <Link href="/">Click to route</Link> */}
      <h1 className="bg-white flex justify-around text-blck title-font sm:text-2xl text-xl font-medium p-2 mb-3">
        Customer Detail & Data
      </h1>
      <div className="relative overflow-x-auto">
        {/* <div className="flex flex-col justify-around align-center">
          <div style={{ width: "30vw" }}>
            <label className="text-xs text-gray-700 uppercase">Name</label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              value={name ? name : ""}
              type="text"
              disabled={table ? true : false}
              placeholder="Name"
              onChange={(e: any) => {
                console.log(e.target.value);
                setName(e.target.value);
              }}
            />
          </div>
          {table == false ? (
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => setCustomerName()}
            >
              Set Name
            </button>
          ) : (
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => resetCustomerName()}
            >
              Restet Name
            </button>
          )}
        </div> */}
        <form className="max-w-sm mx-auto">
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Customer Name
            </label>
            <input
              disabled={table ? true : false}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Name"
              value={name ? name : ""}
              required
              onChange={(e: any) => {
                console.log(e.target.value);
                setName(e.target.value);
              }}
            />
          </div>
          {table == false ? (
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => setCustomerName()}
            >
              Set Name
            </button>
          ) : (
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => resetCustomerName()}
            >
              Restet Name
            </button>
          )}
          {/* <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button> */}
        </form>
        {table && (
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Sr. No.
                </th>
                {/* <th scope="col" className="px-6 py-3">
                  Name
                </th> */}
                <th scope="col" className="px-6 py-3">
                  Trade
                </th>
                <th scope="col" className="px-6 py-3">
                  Rate
                </th>
                <th scope="col" className="px-6 py-3">
                  Actual Rate
                </th>
                <th style={{ textAlign: "center" }}>Action</th>
                <th>
                  <FaPlus
                    onClick={() =>
                      append({
                        name: "",
                        trade: "",
                        rate: 0,
                        actualRate: 0,
                      })
                    }
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {fields.map((item, index) => (
                <tr key={index}>
                  <td>
                    <div className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                      {index + 1}
                    </div>
                  </td>
                  {/* <td>
                    <input
                      className=" hidden appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      // disabled={true}
                      value={name}
                      type="text"
                      placeholder="Name"

                      // {...register(`itemList.${index}.name`)}
                    />
                  </td> */}
                  <td>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      // disabled={true}
                      placeholder="Trade"
                      // {...register(`itemList.${index}.qty`)}
                      onChange={(e) => {
                        setValue(`itemList.${index}.trade`, e.target.value, {
                          shouldValidate: true,
                        });
                        setValue(`itemList.${index}.name`, name, {
                          shouldValidate: true,
                        });
                      }}
                    />
                  </td>

                  <td>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      // disabled={true}
                      placeholder="Rate"
                      // {...register(`itemList.${index}.unitPrice`)}
                      onChange={(e) => {
                        setValue(
                          `itemList.${index}.rate`,
                          parseInt(e.target.value),
                          {
                            shouldValidate: true,
                          }
                        );
                      }}
                    />
                  </td>

                  <td>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Actual Rate"
                      // {...register(`itemList.${index}.discount`)}
                      onChange={(e) => {
                        setValue(
                          `itemList.${index}.actualRate`,
                          parseInt(e.target.value),
                          {
                            shouldValidate: true,
                          }
                        );
                      }}
                    />
                  </td>
                  <td>
                    <FaTrash onClick={() => remove(index)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Data;
