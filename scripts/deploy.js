const hardhat = require('hardhat');
const { ethers } = require('ethers');

async function main(){
    const multiSigContractFactory = await hre.ethers.getContractFactory("Multisig");
    const multiSig = await multiSigContractFactory.deploy(["0xbDA5747bFD65F08deb54cb465eB87D40e51B197E", "0xdD2FD4581271e230360230F9337D5c0430Bf44C0", "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199"], 2);
    const multiSigAddress = await multiSig.deployed();
    console.log(`This is the deployed contract address ${multiSig.address}`)
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})