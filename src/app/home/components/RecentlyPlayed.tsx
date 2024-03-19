import React from "react";

export default function RecentlyPlayed() {
  const recentlyPlayedList = [
    {
      id: "001",
      album_link: "https://source.unsplash.com/800x600/?music",
      album_name: "Harmony Echo",
      singer_name: "Aria Melodica",
    },
    {
      id: "002",
      album_link: "https://source.unsplash.com/800x600/?melody",
      album_name: "Sonic Waves",
      singer_name: "Rhythm Maestro",
    },
    {
      id: "003",
      album_link: "https://source.unsplash.com/800x600/?tune",
      album_name: "Ephemeral Notes",
      singer_name: "Serena Symphony",
    },
    {
      id: "004",
      album_link: "https://source.unsplash.com/800x600/?harmony",
      album_name: "Crescendo",
      singer_name: "Melvin Harmony",
    },
    {
      id: "005",
      album_link: "https://source.unsplash.com/800x600/?instrument",
      album_name: "Instrumental Bliss",
      singer_name: "Lyra Virtuoso",
    },
  ];
  return (
    <div className="rounded-xl  bg-gray-100  p-5">
      <h4 className="uppercase font-semibold pb-4">Recently Played</h4>
      <div>
        {
          <div className="flex space-x-4">
            {recentlyPlayedList.map((recentlyPlayed) => (
              <div key={recentlyPlayed.id}>
                <img
                  className="rounded b-2"
                  src={recentlyPlayed.album_link}
                  alt=""
                />
                <div className="name font-bold text-sm">
                  {recentlyPlayed.album_name}
                </div>
                <div className="text-xs text-gray-500">
                  {recentlyPlayed.singer_name}
                </div>
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  );
}
