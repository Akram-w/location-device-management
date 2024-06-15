"use client";
import CreateButton from "@/components/create.button";
import Divider from "@/components/divider";
import ToggleButton from "@/components/toggle.button";
import { useState } from "react";
import DeviceList from "./deviceList/page";

export default function Location({isUpdate,setShow,data}:any) {
  const [view, setView] = useState<"ALL"|"ADD">("ALL")
  const changeHandler = () => {};
  const handleCreate = () => {
    setView("ADD");
  };
  const submitHandler = (event: any) => {
    event.preventDefault();
    const title = event.target.title.value;
    const address = event.target.address.value;
  };
  
  if(view == "ADD"){
    return (<DeviceList />)
  }else{
    return (
      <div className="flex justify-center px-6 py-12 md:px-8">
        <form onSubmit={submitHandler}>
          <div>
            <div className="flex justify-between gap-x-6 py-5">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                {isUpdate == "UPDATE" ? 'Update'
                :
                isUpdate == "VIEW" ? 'View'
                :
                'Add'} Location
              </h2>
              <div className="hidden shrink-0 sm:flex sm:flex-row sm:items-end space-x-2">
                <CreateButton click={handleCreate} />
              </div>
            </div>
            <Divider />
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Title
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={data && data.title}
                    autoComplete="title"
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-3">
                <label
                  htmlFor="status"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Status
                </label>
                <div className="mt-2">
                  <ToggleButton name="status" toggleStatus={data && data.status} changeHandler={changeHandler} />
                </div>
              </div>
            </div>
          </div>
  
          <div className="sm:col-span-3">
            <label
              htmlFor="address"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Address
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="address"
                id="address"
                autoComplete="address"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              />
            </div>
          </div>
  
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={()=>setShow('ALL')}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled = {isUpdate == "VIEW"}
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {isUpdate  == "UPDATE" ? 'Update':'Save'}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
