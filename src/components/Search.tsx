import React from "react";

export default function Search() {
	return (
		<div className="h-[100px] flex flex-col p-5 justify-center">
			<h4 className="font-semibold mb-4 uppercase">Quick Search</h4>
			<div className="relative w-full">
				<input
					className="rounded-full py-2 pl-8 pr-10 focus:outline-none placeholder:text-xs placeholder-gray-400"
					type="text"
					placeholder="Type here to search"
				/>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={2.5}
					stroke="currentColor"
					className="absolute top-1/2 right-10 transform -translate-y-1/2 w-7 h-7 bg-blue-600 rounded-full text-white p-1.5"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
					/>
				</svg>
			</div>
		</div>
	);
}
