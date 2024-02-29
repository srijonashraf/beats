import Sidebar from "@/components/Sidebar";
import React from "react";
import Header from "./home/components/Header";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="p-8 flex-1 flex flex-col gap-5">
        <div className="grid grid-cols-12">
          <div className="col-span-9">
            <Header />
          </div>
          <div className="col-span-3">
            <h1>hello</h1>
          </div>
        </div>
      </main>
    </div>
  );
}
