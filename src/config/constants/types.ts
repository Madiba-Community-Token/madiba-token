export interface Address {
  97?: string
  56: string,
  5777?: string
}
export enum ChainId {
  MAINNET = 56,
  TESTNET = 97,
  DEV = 5777
}

export enum FetchStatus {
  Idle = 'IDLE',
  Fetching = 'FETCHING',
  Fetched = 'FETCHED',
  Failed = 'FAILED',
}

export interface SerializedToken {
  chainId: number
  address: string
  decimals: number
  symbol?: string
  name?: string
  projectLink?: string
}