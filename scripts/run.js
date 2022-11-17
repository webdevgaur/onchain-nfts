const main = async () => {
    try {
        const signer = await hre.ethers.getSigners();
        const nftContractFactory = await hre.ethers.getContractFactory("chainBattles");
        const nftContract = await nftContractFactory.deploy();
        await nftContract.deployed();

        console.log("Contract deployed to:", nftContract.address);
        
        const jsonString = await nftContract.getTokenURI(5);
        console.log(typeof(jsonString));

        process.exit(0);

    } catch (error) {
        console.log("There was an error in deployment:", error);
        process.exit(1);
    }
}

main();