import axios from "axios";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { useWeb3 } from "../../hooks";
import Loading from "../../public/images/loading.png";
import Link from "next/link";

interface INft {
  attributes: {
    trait_type: string;
    value: string;
  }[];
  description: string;
  image: string;
  name: string;
}

interface NftCardProps {
  tokenId: number;
}

const NftCard: FC<NftCardProps> = ({ tokenId }) => {
  const [nftUri, setNftUri] = useState<string>("");
  const [nftData, setNftData] = useState<INft>();

  const { contract } = useWeb3();

  const getNftUri = async () => {
    try {
      if (!contract) return;

      const response: string = await contract.methods.uri(tokenId).call();

      setNftUri(response);
    } catch (error) {
      console.error(error);
    }
  };
  const getMetadata = async () => {
    try {
      if (!nftUri) return;

      const response = await axios.get(nftUri);

      if (response.status !== 200) return;

      setNftData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getNftUri();
  }, [contract]);
  useEffect(() => {
    getMetadata();
  }, [nftUri]);

  useEffect(() => {
    console.log(nftData);
  }, [nftData]);

  if (!nftData)
    return (
      <div className="w-32 h-32 md:w-60 md:h-60 mt-2 md:mt-4 pb-2 md:pb-4 mb-4 md:mb-8">
        <Image className="rounded-2xl" src={Loading} alt="loading" />
      </div>
    );

  return (
    nftData && (
      <div className="relative w-32 md:w-60 bg-gray-50 mt-2 md:mt-4 rounded-2xl pb-2 md:pb-4 shadow-md mb-4 md:mb-8">
        <video
          className="absolute top-0 rounded-t-2xl"
          src={nftData?.image}
          muted
          loop
          autoPlay
        />
        <div className="w-32 h-32 md:w-60 md:h-60">
          <Image className="rounded-t-2xl" src={Loading} alt="loading" />
        </div>
        <div className="px-1 md:px-2 mt-1 md:mt-2 font-bold text-sm md:text-xl">
          {nftData.name}
        </div>
        <div className="text-right px-1 md:px-2 mt-2 md:mt-4">
          <button className="bg-indigo-300 py-1 px-4 rounded-full text-xs md:text-base font-bold text-gray-800">
            <Link
              href={{
                pathname: `/nft/${tokenId}`,
                query: {
                  tokenId,
                  image: nftData.image,
                  name: nftData.name,
                  description: nftData.description,
                  attributes: JSON.stringify(nftData.attributes),
                },
              }}
            >
              Detail
            </Link>
          </button>
        </div>
      </div>
    )
  );
};

export default NftCard;
