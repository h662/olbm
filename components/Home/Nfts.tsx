import { FC } from "react";
import NftCard from "./NftCard";

const Nfts: FC = () => {
  return (
    <div className="mt-8 mx-8">
      <h1 className="font-bold md:text-2xl">NFTs</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center">
        <NftCard tokenId={3} />
        <NftCard tokenId={2} />
        <NftCard tokenId={1} />
      </div>
      <div className="text-center px-1 md:px-2 my-4 md:my-8">
        <button className="bg-gray-200 py-1 px-4 md:py-2 md:px-6 rounded-full md:text-2xl font-bold text-gray-50">
          More
        </button>
      </div>
    </div>
  );
};

export default Nfts;
