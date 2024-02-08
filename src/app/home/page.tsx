import Sidebar from "@/components/Sidebar";
import React from "react";
import Slider from "./components/Slider";
import TopNavbar from "@/components/TopNavbar";
import RecentlyPlayed from "./components/RecentlyPlayed";
import MostPopular from "./components/MostPopular";
import Search from "@/components/Search";
import TopPodcasters from "@/components/TopPodcasters";
import Player from "@/components/Player";

export default function HomePage() {
	return (
		<div className="flex">
			<Sidebar />
			<main className="flex-1 flex flex-col gap-5">
				<TopNavbar />
				<div className="px-8 grid grid-cols-12">
					<div className="col-span-9 flex flex-col gap-4">
						<Slider />
						<RecentlyPlayed />
						<MostPopular />
					</div>
					<div className="p-4 col-span-3 flex flex-col gap-4">
						<Search />
						<TopPodcasters />
						<Player />
					</div>
				</div>
			</main>
		</div>
	);
}
