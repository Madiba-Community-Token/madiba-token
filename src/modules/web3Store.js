import { ethers } from "ethers";
import { parseInt } from 'lodash'

const web3Store = {
  state: {
    web3Modal: null,

    active: false,
    account: null,
    chainId: 0,
    provider: null
  },
  mutations: {
    setWeb3Modal(state, web3Modal) {
      state.web3Modal = web3Modal
    },
    setActive(state, active) {
      state.active = active
    },
    setAccount(state, account) {
      state.account = !account ? null : account.toLowerCase()
    },
    setChainId(state, chainId) {
      state.chainId = chainId
    },
    setProvider(state, provider) {
      state.provider = provider;
    }
  },
  actions: {
    async connect({ state, commit, dispatch }) {
      const provider = await state.web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider)
 
      commit('setProvider', library.provider);

      library.pollingInterval = 12000

      const accounts = await library.listAccounts()
      if (accounts.length > 0) {
        commit('setAccount', accounts[0])
      }
      const network = await library.getNetwork()
      commit('setChainId', network.chainId)
      commit('setActive', true)

      provider.on("connect", async (info) => {
        let chainId = parseInt(info.chainId)
        commit('setChainId', chainId)
      });

      provider.on("accountsChanged", async (accounts) => {
        if (accounts.length > 0) {
          commit('setAccount', accounts[0])
        } else {
          await dispatch('resetApp')
        }
      });
      provider.on("chainChanged", async (chainId) => {
        chainId = parseInt(chainId)
        commit('setChainId', chainId)
      });
    },
    async resetApp({ state, commit }) {
      try {
        await state.web3Modal.clearCachedProvider();
      } catch (error) {
        console.error(error)
      }
      commit('setAccount', null);
      commit('setActive', false);
      commit('setProvider', null);
    },
  }
}

export default web3Store;