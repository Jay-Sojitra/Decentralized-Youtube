import ContractAbi from "../artifacts/contracts/YouTube.sol/YouTube.json";
import { ethers } from "ethers";

export default function getContract() {
  
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  
  const signer = provider.getSigner();
 
  let contract = new ethers.Contract(       
    "0x72D11368593E0b3938e202C17d862fd0626be728",
    ContractAbi.abi,
    signer
  );
  
  return contract;
}
