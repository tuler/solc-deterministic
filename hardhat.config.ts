import { HardhatUserConfig } from "hardhat/config";
import { HttpNetworkUserConfig } from "hardhat/types";

import "@nomiclabs/hardhat-ethers";
import "hardhat-deploy";

// read MNEMONIC from env variable
let mnemonic = process.env.MNEMONIC;

const infuraNetwork = (
  network: string,
  chainId?: number,
  gas?: number
): HttpNetworkUserConfig => {
  return {
    url: `https://${network}.infura.io/v3/${process.env.PROJECT_ID}`,
    chainId,
    gas,
    accounts: mnemonic ? { mnemonic } : undefined,
  };
};

const config: HardhatUserConfig = {
  networks: {
    hardhat: mnemonic ? { accounts: { mnemonic } } : {},
    localhost: {
      url: "http://localhost:8545",
      accounts: mnemonic ? { mnemonic } : undefined,
    },
    mainnet: infuraNetwork("mainnet", 1, 6283185),
    goerli: infuraNetwork("goerli", 5, 6283185),
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  paths: {
    artifacts: "artifacts",
    deploy: "deploy",
    deployments: "deployments",
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};

export default config;
