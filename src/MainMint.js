import { ethers, BigNumber } from "ethers";
import { useState } from "react";
import { ABI, contractAddress } from "./constants";
import MainPage from "./MainPage";
import { checkMerkle } from "./utils";
const wlWallet = "0x4174dd7962326F2a12D7b91D73923e039AC82939";

const MainMint = ({ account }) => {
  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(account);
  console.log(setMintAmount);
  if (!isConnected) return <p>Not connected yet</p>;

  const Mint = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      let c = checkMerkle(wlWallet);
      console.log(c);
      if (!c[0]) return alert("cant mint NOT in WL");
      //   const contract = new ethers.Contract(contractAddress, ABI, signer);
      const contract = new ethers.Contract(
        contractAddress,
        [
          "function publicMint(uint256 count) external payable",
          "function totalSupply() public view returns (uint256) ",
        ],
        signer
      );
      try {
        debugger;
        const price = ethers.utils.parseUnits("0.00001", "ether");
        // console.log(ethers.utils.formatUnits(BigNumber.from(10000000000000))); - format big number
        const response = await contract.publicMint(1, {
          value: price,
          //   gasLimit: 5000000,
          //   gasPrice: ethers.utils.parseUnits("100", "gwei"),
          gasLimit: 30000,
        });
        console.log("response from mint - ", response);
      } catch (err) {
        console.log("err handling the responde after submit", err);
      }
    }
  };

  return (
    <div>
      <MainPage mint={Mint} />
    </div>
  );
};

export default MainMint;

// async function execute() {
//   const addresses = await GetWhiteList()
//   const leaves = addresses.map(x => keccak256(x))
//   const tree = new MerkleTree(leaves, keccak256, { sortPairs: true })
//   const buf2hex = x => '0x' + x.toString('hex')

//   console.log(`the merkle root is: ${buf2hex(tree.getRoot())}`)

//   const leaf = keccak256(window.ethereum.selectedAddress) // address from wallet using walletconnect/metamask
//   proof = tree.getProof(leaf).map(x => buf2hex(x.data))
//   console.log(proof);
// }
