/* eslint-disable @next/next/no-img-element */
"use client";
import { useRouter } from "next/navigation";
import React from "react";

const navLinks = [
  { id: 1, label: "New releases", path: "/navber/new-releases" },
  { id: 2, label: "Shuffle play", path: "/navber/shuffle-play" },
  { id: 3, label: "Live podcasts", path: "/navber/live-podcasts" },
];

export default function TopNavbar() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between border-b border-gray-200 px-10 py-5">
      <div className="flex gap-6">
        {navLinks.map((item) => (
          <button onClick={() => router.push(item.path)} key={item.id}>
            {item.label}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <h4>Upgrade plan</h4>
        <img
          src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
          alt="user-photo"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </div>
  );
}
