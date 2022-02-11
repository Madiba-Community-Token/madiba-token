import type { Signer } from '@ethersproject/abstract-signer'
import type { Provider } from '@ethersproject/providers'
import { Contract } from '@ethersproject/contracts'
import { simpleRpcProvider } from '../utils/web3';
import tokens from '../config/constants/tokens';

import dibaAbi from '../config/abis/diba.json';

const getContract = (abi: any, address: string, signer?: Signer | Provider) => {
  const signerOrProvider = signer ?? simpleRpcProvider
  return new Contract(address, abi, signerOrProvider)
}

export const getDibaTokenContract = (signer?: Signer | Provider) => {
  return getContract(dibaAbi, tokens.diba.address, signer)
}
