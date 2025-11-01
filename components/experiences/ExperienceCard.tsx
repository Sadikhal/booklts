'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { ExperienceCardProps } from "@/types";
import { formatPrice } from "@/lib/utils";


const ExperienceCard: React.FC<ExperienceCardProps> = ({
  data
}) => {
  const router = useRouter();
  return (
    <div 
      onClick={() => router.push(`/experience/${data.id}`)} 
      className="cursor-pointer min-w-[240px] min-h-[312px]"
    >
      <div className="flex flex-col w-full">
        <div 
          className="
            w-full 
            h-[170px]
            relative 
            overflow-hidden 
            rounded-t-lg "
        >
          <Image
            fill
            className="
              object-cover 
              object-center
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
            src={data.image}
            alt="Listing"
          />
        </div>
       <div className="flex flex-col px-4 gap-4 py-3 bg-card ">
        
        <div className="flex flex-row items-center justify-between">
         <div className="font-medium text-base">
          {data.title}
        </div>
        <div className="px-2 py-1 rounded-sm bg-grayColor">
        <div className="font-medium text-[11px] text-nowrap">
          {data.location}
        </div>
        </div>
        </div>
        <div className="font-normal text-desc text-xs w-full">
          {data.description}
        </div>
        <div className="flex flex-row justify-between items-center gap-1">
          <div className="font-medium text-heading text-xl leading-4 flex flex-row items-center gap-2">
           <span className="font-normal text-heading text-xs leading-4">From</span>{formatPrice(data.price)}
          </div>
            <Button className="bg-yellow py-1.5 px-2 h-[30px] rounded-sm text-heading font-medium text-sm ">
            View Details
          </Button>
        </div>
        
      </div> 
      </div>
    </div>
   );
}
 
export default ExperienceCard;