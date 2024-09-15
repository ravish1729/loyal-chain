import React from "react";

import type { NFT } from "@/types/nft";

type Props = NFT & {
  children: React.ReactNode;
};

const NftCard = ({ id, imgUrl, children }: Props) => {
  return (
    <div
      key={id}
      className="overflow-hidden rounded-md relative cursor-pointer"
    >
      <img
        alt={id}
        src={`${process.env.NEXT_PUBLIC_HOTEL_IMAGE_URL_PREFIX}/${imgUrl}`}
        height={300}
        width={300}
      />
      <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-gray-950 from-30%">
        <h4 className="font-semibold text-4xl mb-2">#{id}</h4>
        {children}
      </div>
    </div>
  );
};

export default NftCard;
