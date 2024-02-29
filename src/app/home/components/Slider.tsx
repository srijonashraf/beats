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
          <div className="mt-3 flex items-center gap-3">
            <div>10, 000+ Plays</div>
            <div>179 currently playing</div>
          </div>
          <div className="flex items-center gap-3 mt-10">
            <button className="bg-red-500 cursor-pointer  rounded-full px-5 py-1.5 font-medium">
              Listen now
            </button>
            <button className="border border-gray-200 rounded-full px-5 py-1.5 font-medium hover:bg-red-500 hover:border-red-500 cursor-pointer">
              Add to favourites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
