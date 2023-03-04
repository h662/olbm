import { useEffect, useState } from "react";
import Web3 from "web3";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../web3.config";

export const useWeb3 = () => {
  const [web3, setWeb3] = useState<any>();
  const [contract, setContract] = useState<any>();

  useEffect(() => {
    setWeb3(new Web3(process.env.NEXT_PUBLIC_RPC_URL!));
  }, []);

  useEffect(() => {
    if (!web3) return;

    setContract(new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS));
  }, [web3]);

  return { web3, contract };
};
