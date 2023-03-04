import axios from "axios";
import { useEffect, useState } from "react";
import Web3 from "web3";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../web3.config";

interface INft {
  attributes: {
    trait_type: string;
    value: string;
  }[];
  description: string;
  image: string;
  name: string;
}

export const useWeb3 = () => {
  const [web3, setWeb3] = useState<any>();
  const [contract, setContract] = useState<any>();
  const [nftUri, setNftUri] = useState<string>("");
  const [nftData, setNftData] = useState<INft>();

  const getNftUri = async (tokenId: number) => {
    try {
      if (!contract || !tokenId) return;

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
    setWeb3(new Web3(process.env.NEXT_PUBLIC_RPC_URL!));
  }, []);
  useEffect(() => {
    if (!web3) return;

    setContract(new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS));
  }, [web3]);

  useEffect(() => {
    getMetadata();
  }, [nftUri]);

  return { web3, contract, nftData, getNftUri };
};
