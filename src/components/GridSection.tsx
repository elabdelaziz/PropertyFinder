import React from "react";
import Card from "./Card";
import { useTypedSelector } from "@/hooks/useRedux";
import Link from "next/link";

const GridSection = () => {
  const cardsData = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Card 1",
      price: 9.99,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Card 2",
      price: 14.99,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Card 3",
      price: 19.99,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Card 4",
      price: 24.99,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Card 5",
      price: 29.99,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Card 6",
      price: 34.99,
    },
  ];

  const data = useTypedSelector((state) => state.data);

  return (
    <>
      <h1 className="text-[40px] text-center p-[70px_0_0] mb-[50px] font-[500] mb-8">
        Trending Apartments For Rent In NYC
      </h1>
      {data.data.map((item) => (
        <div className="max-w-6xl p-[20px_0_20px] overflow-hidden mx-auto px-4">
          <h1 className="text-[20px] text-left font-[500] mb-8">
            {item.title}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {item.apartments.map((cardData) => (
              <Link href={`/rentals/${cardData.id}`}>
                <Card key={cardData.id} cardData={cardData} />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default GridSection;
