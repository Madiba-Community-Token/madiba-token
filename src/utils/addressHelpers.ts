import { ChainId, Address } from '../config/constants/types'
import addresses from '../config/constants/contracts'

export const getAddress = (address: Address): string => {
  const chainId = process.env.VUE_APP_PUBLIC_CHAIN_ID
  return address[chainId] ? address[chainId] : address[ChainId.MAINNET]
}

export const getDibaTokenAddress = () => {
  return getAddress(addresses.diba);
}