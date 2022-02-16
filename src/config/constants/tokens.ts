import { Token, ChainId } from '@pancakeswap/sdk'
import { serializeToken } from '../../helpers/utils'
import { CHAIN_ID } from './networks'
import { SerializedToken } from './types';

const { MAINNET, TESTNET } = ChainId

interface TokenList {
  [symbol: string]: Token
}

const defineTokens = <T extends TokenList>(t: T) => t

export const mainnetTokens = defineTokens({
  diba: new Token(
    MAINNET,
    '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    8,
    'DIBA',
    'Madiba Token',
    'https://madiba.app/',
  )
} as const)

export const testnetTokens = defineTokens({
  diba: new Token(
    TESTNET,
    '0x408E0dea0c6977eB74Ea2264934Dc2bE800465e0',
    8,
    'DIBA',
    'Madiba Token',
    'https://madiba.app/',
  )
} as const)

const tokens = () => {
  const chainId = CHAIN_ID

  // If testnet - return list comprised of testnetTokens wherever they exist, and mainnetTokens where they don't
  if (chainId === ChainId.TESTNET) {
    return Object.keys(mainnetTokens).reduce((accum, key) => {
      return { ...accum, [key]: testnetTokens[key] || mainnetTokens[key] }
    }, {} as typeof testnetTokens & typeof mainnetTokens)
  }

  return mainnetTokens
}

const unserializedTokens = tokens()

type SerializedTokenList = Record<keyof typeof unserializedTokens, SerializedToken>

export const serializeTokens = () => {
  const serializedTokens = Object.keys(unserializedTokens).reduce((accum, key) => {
    return { ...accum, [key]: serializeToken(unserializedTokens[key]) }
  }, {} as SerializedTokenList)

  return serializedTokens
}

export default unserializedTokens
