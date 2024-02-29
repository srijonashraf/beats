// @ts-nocheck
"use client";
import React, { useState } from "react";
import { Switch } from "antd";
import { useRouter } from "next/navigation";

const menuItems = [
  { label: "Discover", path: "/discover" },
  { label: "Trending", path: "/trending" },
  { label: "Genres", path: "/genres" },
  { label: "Albums", path: "/albums" },
  { label: "Speaker", path: "/speaker" },
];

const libraryItems = [
  { label: "Recent", path: "/recent" },
  { label: "Playlists", path: "/playlists" },
  { label: "Favourites", path: "/favourites" },
  { label: "Local", path: "/local" },
];

const playlistItems = [
  { label: "New playlist", path: "/new-playlist" },
  { label: "Import playlist", path: "/import-playlist" },
  { label: "Account", path: "/account" },
  { label: "Settings", path: "/settings" },
];

export default function Sidebar() {
  const router = useRouter();
  const [checked, setChecked] = useState(true);
  const handleClick = () => {
    setChecked((p) => !p);
  };
  return (
    <div className="w-[250px] h-screen bg-[#fbfbfb] p-5">
      <button
        onClick={() => router.push("/home")}
        className="font-medium text-xl text-center"
      >
        Groovy
      </button>
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

const MenuItem = ({ label, path }) => {
  const router = useRouter();
  return (
    <div>
      <button
        className="font-medium px-3 py-1.5 text-sm hover:bg-gray-200 rounded cursor-pointer"
        onClick={() => router.push(path)}
      >
        {label}
      </button>
    </div>
  );
};
