import Sidebar from "@/components/Sidebar";
import React from "react";

export default function Home() {
	return (
		<div className="flex">
			<Sidebar />
			<main className="p-8 flex-1 flex flex-col gap-5">
				<Header />
				<div className="flex items-stretch gap-5">
					<div className="w-[75%] flex flex-col gap-5">
						<Artits />
						<div className="flex gap-5">
							<Genres />
							<TopCharts />
						</div>
					</div>
					<Player />
				</div>
			</main>
		</div>
	);
}

const Header = () => {
	return <div className="h-[350px] w-full bg-gray-200">header</div>;
};

const Artits = () => {
	return <div className="h-[200px] bg-gray-200 shadow">artist</div>;
};

const Genres = () => {
	return <div className="h-[200px] w-[40%] bg-gray-200 shadow">Genres</div>;
};

const TopCharts = () => {
	return <div className="h-[200px] w-[60%] bg-gray-200 shadow">top Charts</div>;
};

const Player = () => {
	return <div className="h-full w-[25%] bg-gray-200 shadow">player</div>;
};
