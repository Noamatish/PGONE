const { MerkleTree } = require("merkletreejs");
const KECCAK256 = require("keccak256");

const addresses = [
  "0x1C541e05a5A640755B3F1B2434dB4e8096b8322f",
  "0x1071258E2C706fFc9A32a5369d4094d11D4392Ec",
  "0x25f7fF7917555132eDD3294626D105eA1C797250",
  "0xF6574D878f99D94896Da75B6762fc935F34C1300",
  "0xfDbAb374ee0FC0EA0D7e7A60917ac01365010bFe",
  "0xfB73f8B1DcD5d61D4dDC3872dA53200B8562F243",
  "0x95F6E4C94857f605b9A73c9163D5c94AAf849c40",
  "0xEd2C82417256DF74a995213713A586E07d3e5255",
  "0xCb14d0D43BB32705fAbbD863f860A1410fa14613",
  "0x7a865e44988a2ebcad845E977db07C71f8c62d31",
  "0x340F5bEcB63a33B53959026d0CEb1f83C53A102F",
  "0x969560dBBf4872049D0d245791eD74dEd0D66578",
  "0x81B8888dfbdcc3Ad1dfe30A6f58a6d47eaf99aE8",
  "0x29aB6E246c4aC305974A730B10459417FF65D469",
  "0x2B790Dd5d9440f098E057E4958e3Ac0214712352",
  "0xA53E16be846D815dfF774A384858021952b5B22E",
  "0x04473648f6BeA9b074DFd7693b20AFCF9971a125",
  "0xc26716b827c0d207AA3D25667028C2da1De787bf",
  "0x21BAa9441e2DF389Ca27c9dB1cD9B59f2504dfEa",
  "0x93D5193694a49eB85366ea1BDa69B577f1b878ae",
  "0x3654322cFecCD60965A8b7866f50e55FE14EEBCC",
  "0x174BAFfcB004ACfc53cDD3A48957b9D353BB171f",
  "0x1d9A510DfCa2b1f3C52BD81122816FD86C7C7Ba0",
  "0x55ae457519BbAf25d825772da81F57bD18E4B6Db",
  "0x0997680928431EA22C1930c12Dc91f06d10be0c6",
  "0xF9E8383bd1250aCf18Da971467B70045d4D06fB1",
  "0x847aB63F94e931F9264407C54C97DbCfFEC9f8FE",
  "0x5dcE9Fc14eED67D046A130d1d991163114b2820c",
  "0x53b5585AA42b79B0b8e620896ceB0D0435441071",
  "0x5E661e550Fcac43DEC925449A7F0bCA0C32D6A44",
  "0xA46f327d91282aFD4E99d79a8fD7Eac7A123dAF5",
  "0xD03241a89a18c779B71f1bD348d2BbF1e20b8ea8",
  "0xed0850a960ABE5715ECEa4b479272092733922f0",
  "0x4D15f921A25e8677Da2d878B01c80Df861E67F03",
  "0x98d450BfbBFD64D780B632f6acd0FC59d11E575e",
  "0xaef0FfA370108915d4198Fe6eF40eBa446f00d79",
  "0x5Bc46cf525E6E26f8799685E5247a93355354cBf",
  "0x5B9837c339F7b55564Aeb185e8DEdeEDD10AfcB7",
  "0xbda8049200F7a42312AFeBDb5b99D514EE0df302",
  "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
  "0x2fd0215CA2211BA56029Fc96f136532a0aF17Ea0",
  "0x4174dd7962326F2a12D7b91D73923e039AC82939",
];

const buf2hex = (x) => "0x" + x.toString("hex");

export const checkMerkle = (wallet) => {
  const leaves = addresses.map((x) => KECCAK256(x));
  const tree = new MerkleTree(leaves, KECCAK256, { sortPairs: true });

  let leaf = buf2hex(KECCAK256(wallet));
  let proof = tree.getProof(leaf).map((x) => buf2hex(x.data));
  return proof;
  //   const leaves = addresses.map((x) => keccak256(x));
  //   const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
  //   const buf2hex = (x) => "0x" + x.toString("hex");
  //   console.log(buf2hex(tree.getRoot()));
  //   const leaf = keccak256(wallet); // address from wallet using walletconnect/metamask
  //   const proof = tree.getProof(leaf).map((x) => buf2hex(x.data));

  //   let leaf = buf2hex(KECCAK256(accounts[0]));
  //   let proof = tree.getProof(leaf).map((x) => buf2hex(x.data));

  //   return proof;
};
