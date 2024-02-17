// @ts-nocheck
"use client";
import React, { useState } from "react";
import { Switch } from "antd";

const menuItems = [
  { label: "Explore" },
  { label: "Genres" },
  { label: "Albums" },
  { label: "Artist" },
  { label: "Radio" },
];

const libraryItems = [
  { label: "Recent" },
  { label: "Albums" },
  { label: "Favourites" },
  { label: "Local" },
];

const playlistItems = [
  { label: "Create New" },
  { label: "Design Flow" },
  { label: "Best of 2020" },
];

export default function Sidebar() {
  const [checked, setChecked] = useState(true);
  const handleClick = () => {
    setChecked((p) => !p);
  };
  return (
    <div className="w-[250px] h-screen bg-[#fbfbfb] p-5">
      <h2 className="font-medium text-xl text-center">Groovy</h2>
      <div className="flex flex-col gap-5 mt-16">
        <div>
          <h2 className="mb-2">MENU</h2>
          <div>
            {menuItems.map((item, idx) => (
              <MenuItem key={idx} {...item} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-2">LIBRARY</h2>
          <div>
            {libraryItems.map((item, idx) => (
              <MenuItem key={idx} {...item} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-2">PLAYLIST</h2>
          <div>
            {playlistItems.map((item, idx) => (
              <MenuItem key={idx} {...item} />
            ))}
          </div>
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <Switch
              className="w-[50px]"
              defaultChecked
              checked={checked}
              onClick={handleClick}
            />
            {checked ? (
              <p className="text-gray-500 text-sm">Black</p>
            ) : (
              <p className="text-gray-500 text-sm">Light</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const MenuItem = ({ label }) => {
  return (
    <div className="font-medium px-3 py-1.5 text-sm hover:bg-gray-200 rounded cursor-pointer">
      {label}
    </div>
  );
};
