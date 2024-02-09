/* eslint-disable @next/next/no-img-element */
import React from "react";

const navLinks = [
	{ id: 1, label: "New releases" },
	{ id: 2, label: "Shuffle play" },
	{ id: 3, label: "Live podcasts" },
];

export default function TopNavbar() {
	return (
		<div className="flex items-center justify-between border-b border-gray-200 px-10 py-5">
			<div className="flex gap-6">
				{navLinks.map((item) => (
					<div key={item.id}>{item.label}</div>
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
