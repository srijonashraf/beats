import Sidebar from "@/components/Sidebar";
import TopNavbar from "@/components/TopNavbar";
import React from "react";

export default function LivePodcasts() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <TopNavbar />
        <div className="grid grid-cols-12">
          <h1>Live Podcasts</h1>
        </div>
      </main>
    </div>
  );
}
