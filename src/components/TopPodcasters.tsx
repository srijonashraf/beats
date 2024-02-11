import React from "react";

export default function TopPodcasters() {
  const podcastersList = [
    {
      id: 1,
      img: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
      artist: "Joe Rogan",
      followers: "407,109",
      following: false,
    },
    {
      id: 2,
      img: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
      artist: "Andrew Klavan",
      followers: "321,826",
      following: false,
    },
    {
      id: 3,
      img: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
      artist: "Joyce Meyer",
      followers: "266,001",
      following: true,
    },
  ];

  return (
    <div className="rounded-xl flex flex-col p-5">
      <h4 className="uppercase font-semibold">Top Podcasters</h4>
      <div className="">
        {podcastersList.map((item) => (
          <div
            key={item.id}
            className="podcaster mt-4 flex flex-row justify-around items-center"
          >
            <div className="img">
              <img
                src={item.img}
                alt="user-photo"
                className="w-12 h-12 rounded-full"
              />
            </div>
            <div className="info">
              <div className="name font-bold text-sm">{item.artist}</div>
              <div className="follower text-xs text-gray-500">
                {item.followers} followers
              </div>
            </div>
            <div className="follow">
              <button
                className={`text-xs  font-bold  rounded-full cursor-pointer w-20 py-1.5 ${
                  item.following
                    ? "bg-blue-500 text-white"
                    : "bg-blue-200 text-blue-600"
                }`}
              >
                {item.following ? "Following" : "Follow"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
