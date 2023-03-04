import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useWeb3 } from "../../hooks";
import Loading from "../../public/images/loading.png";

const Nft: NextPage = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const router = useRouter();
  const { id } = router.query;

  const { contract, nftData, getNftUri } = useWeb3();

  const onClickToggle = (toggle: boolean) => () => {
    setIsToggled(toggle);
  };

  useEffect(() => {
    getNftUri(parseInt(id as string));
  }, [contract, id]);

  if (!id) return <main>Loading...</main>;

  return (
    <main>
      <div className="relative flex flex-col items-center">
        <div className="h-12 md:h-20 flex w-full md:text-2xl">
          <button
            className={`w-1/2 ${
              isToggled ? "shadow-inner font-bold border-t-2 border-r-2" : ""
            }`}
            onClick={onClickToggle(true)}
          >
            Physical
          </button>
          <button
            className={`w-1/2 ${
              isToggled ? "" : "shadow-inner font-bold border-t-2 border-l-2"
            }`}
            onClick={onClickToggle(false)}
          >
            Digital(NFT)
          </button>
        </div>
        {isToggled ? (
          <Image
            className="absolute top-12 md:top-20 md:mt-8"
            src={`/images/clothes/${id}.png`}
            width={512}
            height={512}
            alt="loading"
          />
        ) : (
          <video
            className="absolute top-12 md:top-20 md:mt-8"
            src={nftData?.image as string}
            muted
            loop
            autoPlay
          />
        )}
        <div className="md:mt-8">
          <Image src={Loading} alt="loading" />
        </div>
        <div className="mt-8 md:mt-16 text-2xl md:text-4xl font-bold">
          {nftData?.name}
        </div>
        <div className="mt-4 md:mt-8  w-full px-8 md:px-32">
          <div className="text-xs md:text-sm">Description</div>
          <div className="md:text-2xl">{nftData?.description}</div>
          <div className="text-xs md:text-sm mt-2 md:mt-4">Attributes</div>
          <div className="flex mt-1 md:mt-2">
            {nftData?.attributes.map(
              (v: { trait_type: string; value: string }, i: number) => {
                return (
                  <div
                    className="text-center border-2 mr-4 border-gray-600 text-xs md:text-base"
                    key={i}
                  >
                    <div className=" border-b-2 border-gray-600 p-1 md:p-2">
                      {v.trait_type}
                    </div>
                    <div className="p-1 md:p-2 font-bold">{v.value}</div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Nft;
