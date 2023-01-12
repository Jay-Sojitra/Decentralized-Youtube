const hre = require("hardhat");

async function main() {
  const YouTube = await hre.ethers.getContractFactory("Youtube");
  const youtube = await YouTube.deploy();

  await youtube.deployed();

  console.log("YouTube deployed to:", youtube.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
// npx hardhat run scripts/deploy.js --network mumbai
// 0x72D11368593E0b3938e202C17d862fd0626be728
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDA5MTJkNzc3QTU3YUE4NDAyOEJBMzY1Njg4OTU1MDRmMTRiYzJjQjQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Njc1NTQ0ODEwMDEsIm5hbWUiOiJvbmJvYXJkIn0.sQdQbLWLzp3KnMf1f9brsAfMlVV-WBx7MKUOzYlGw1w
