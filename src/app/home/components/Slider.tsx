import React from "react";

export default function Slider() {
	return (
		<div className="w-full">
			<h3 className="font-semibold text-lg mb-4 uppercase">
				Trending podcasts
			</h3>
			<div>
				<div
					style={{
						background:
							"url(https://www.elegantthemes.com/blog/wp-content/uploads/2020/10/000-Podcast-Cover-Art-Featured.png)",
					}}
					className="text-white bg-cover bg-center px-10 py-8 rounded-xl"
				>
					<h2 className="text-4xl font-semibold">On Purpose</h2>
					<h5 className="font-semibold text-lg mt-2">with Jay Shetty</h5>
					<div className="mt-3 flex items-center gap-2">
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="icon icon-tabler icon-tabler-headphones-filled"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path
									d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
									strokeWidth="0"
									fill="currentColor"
								/>
							</svg>
						</div>
						<div>10, 000+ Plays</div>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="icon icon-tabler icon-tabler-headphones-filled ml-2"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path
									d="M21 18a3 3 0 0 1 -2.824 2.995l-.176 .005h-1a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-3a3 3 0 0 1 2.824 -2.995l.176 -.005h1c.351 0 .688 .06 1 .171v-.171a7 7 0 0 0 -13.996 -.24l-.004 .24v.17c.25 -.088 .516 -.144 .791 -.163l.209 -.007h1a3 3 0 0 1 2.995 2.824l.005 .176v3a3 3 0 0 1 -2.824 2.995l-.176 .005h-1a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-6a9 9 0 0 1 17.996 -.265l.004 .265v6z"
									strokeWidth="0"
									fill="currentColor"
								/>
							</svg>
						</div>
						<div>179 currently playing</div>
					</div>
					<div className="flex items-center gap-3 mt-10">
						<button className="bg-red-500 cursor-pointer  rounded-full px-5 py-1.5 font-medium">
							Listen now
						</button>
						<button className="border border-gray-200 rounded-full px-5 py-1.5 font-medium hover:bg-red-500 hover:border-red-500 cursor-pointer">
							Add to favorites
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
