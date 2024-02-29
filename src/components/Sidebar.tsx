// @ts-nocheck
"use client";
import React, { useState } from "react";
import { Switch } from "antd";
import { menuItems, libraryItems, customizeItems } from "./SidebarMenu.tsx";

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
					<h2 className="mb-2">CUSTOMIZE</h2>
					<div>
						{customizeItems.map((item, idx) => (
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

const MenuItem = ({ label, icon, path }) => {
	const router = useRouter();

	return (
		<div
			className="flex items-center gap-3 font-medium px-3 py-1.5 text-sm hover:bg-gray-200 rounded cursor-pointer"
			onClick={() => router.push(path)}
		>
			{icon}
			{label}
		</div>
	);
};
