import React from "react";

export default function MostPopular() {
  const mostPopular = [
    {
      id: "01",
      image:
        "https://lastfm.freetls.fastly.net/i/u/ar0/72be72f5d593a9b02f30700fd5079005.jpg",
      songName: "Makes You Beautiful",
      singerName: "One Direction",
    },
    {
      id: "02",
      image:
        "https://cdns-images.dzcdn.net/images/cover/231c66c0ed260c708163eff3bb8458da/500x500.jpg",
      songName: "I’m Not The Only One",
      singerName: "Sam Smith",
    },
    {
      id: "03",
      image: "https://i.scdn.co/image/ab67616d0000b2732572a7481f2144c1bb5db501",
      songName: "Lighthouse",
      singerName: "Shakira",
    },
    {
      id: "04",
      image:
        "https://cdns-images.dzcdn.net/images/cover/887046cf04e21cbbd944fd762bc906b8/500x500.jpg",
      songName: "Just Give Me A Reason",
      singerName: "Justin Bieber",
    },
  ];
  return (
    <section className="rounded-xl p-5  flex flex-col gap-6">
      <div>
        <h1 className="uppercase font-bold text-xl">Most Popular</h1>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-8 ">
          {mostPopular?.map((mp) => (
            <div
              key={mp.id}
              className="flex gap-4 border bg-gray-50  rounded-xl"
            >
              <div className="xl:w-[30%] 2xl:w-[25%]">
                <img
                  className="w-full 2xl:h-[130px] xl:h-[100px] rounded-l-xl"
                  src={mp?.image}
                  alt=""
                />
              </div>
              <div className="xl:w-[50%] 2xl:w-[55%] flex flex-col justify-center 2xl:gap-3 gap-1">
                <div className="truncate font-bold w-[80%] 2xl:text-2xl">
                  {mp?.songName}
                </div>

                <div className="2xl:text-xl text-gray-500">
                  {mp?.singerName}
                </div>
              </div>
              <div
                className="w-[20%] flex justify-center items-center
			  "
              >
                <button className="flex items-center justify-center cursor-pointer col-span-2">
                  <div className="bg-[#007aff]  p-[10px] rounded-full flex items-center justify-center">
                    <div
                      className="bg-white h-3 w-3"
                      style={{ clipPath: "polygon(100% 49%, 0 0, 0 100%)" }}
                    ></div>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
