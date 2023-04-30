import { Apartment } from "@/reducers/dataSlice";
import { FaBath } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";

interface CardProps {
  cardData: Apartment;
}

const Card: React.FC<CardProps> = ({ cardData }) => {
  return (
    <div className="rounded-[10px] overflow-hidden  shadow-[0_16px_15px_rgba(0,22,84,.06)]">
      <img
        className="w-full h-[230px] object-cover"
        src={cardData.img}
        alt={cardData.title}
      />
      <div className="px-6 py-4">
        <div className="font-[500] mb-2">{cardData.title}</div>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-[#3151b7] text-[20px] font-[500] before:content-['$'] before:absolute relative before:left-[-7px] before:top-[.3em] before:text-[.5em]">
              {cardData.price}
            </span>
            <span className="text-[14px] text-[#817f96]">/mo</span>
          </div>
          <div className="flex">
            <span className="text-[14px] flex items-center text-[#817f96]">
              <span className="mr-[5px]">
                <IoBedOutline />
              </span>
              {cardData.bed}
              {" bd"}
            </span>
            <span className="text-[14px] ml-[10px] flex items-center text-[#817f96]">
              <span className="mr-[5px]">
                <FaBath />
              </span>
              {cardData.bath}
              {" ba"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
