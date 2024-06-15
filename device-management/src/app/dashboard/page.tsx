"use client";
import CreateButton from "@/components/create.button";
import DeleteButton from "@/components/delete.button";
import Divider from "@/components/divider";
import UpdateButton from "@/components/update.button";
import ViewButton from "@/components/view.button";
import Location from "./location/page";
import { useState } from "react";

export default function Dashboard() {
  const [show, setShow] = useState<"ALL"| "VIEW" | "UPDATE" | "ADD">("ALL");
  const handleView = () => {
    setShow("VIEW")
  };
  const handleUpdate = () => {
    setShow("UPDATE");
  };
  const handleDelete = () => {};
  const handleCreate = () => {
    setShow("ADD");
  };

  const locationList = () => {
    const array = [];
    for (let index = 0; index < 40; index++) {
      array.push(
        <li key="index" className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                Leslie Alexander
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                leslie.alexander@example.com
              </p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-row sm:items-end space-x-2">
            <ViewButton click={handleView} />
            <UpdateButton click={handleUpdate} />
            <DeleteButton click={handleDelete} />
          </div>
        </li>
      );
    }
    return array;
  };

  if (show == "UPDATE") {
    return <Location isUpdate={show} setShow={setShow}
    data={
        {
        'title': 'ABC',
        'status': true,
        'address': 'ABC',
        }
    }
    />;
  } else if (show == "ADD") {
    return <Location isUpdate={show} setShow={setShow} data={null}/>;
  } else if(show == "VIEW"){
    return <Location isUpdate={show} setShow={setShow} data={null}/>;
  }else {
    return (
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="flex justify-between gap-x-6 py-5">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Location List
          </h2>
          <div className="hidden shrink-0 sm:flex sm:flex-row sm:items-end space-x-2">
            <CreateButton click={handleCreate} />
          </div>
        </div>
        <Divider />
        <ul
          role="list"
          className="divide-y h-svh divide-gray-100 overflow-scroll"
        >
          {...locationList()}
        </ul>
      </div>
    );
  }
}
