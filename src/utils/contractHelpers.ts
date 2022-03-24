import type { Signer } from '@ethersproject/abstract-signer'
import type { Provider } from '@ethersproject/providers'
import { Contract } from '@ethersproject/contracts'
import { simpleRpcProvider } from '../utils/web3';
import tokens from '../config/constants/tokens';
import { CHAIN_ID } from '../config/constants/networks';
import contracts from '../config/constants/contracts';

import dibaAbi from '../config/abis/diba.json';
import dibaAirAbi from '../config/abis/dibaAir.json';

const getContract = (abi: any, address: string, signer?: Signer | Provider) => {
  const signerOrProvider = signer ?? simpleRpcProvider
  return new Contract(address, abi, signerOrProvider)
}

export const getDibaTokenContract = (signer?: Signer | Provider) => {
  return getContract(dibaAbi, tokens.diba.address, signer)
}

export const getDibaAirContract = (signer?: Signer | Provider) => {
  return getContract(dibaAirAbi, contracts.dibaAir[CHAIN_ID], signer)
}
