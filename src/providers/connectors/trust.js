import walletconnectConnector from './walletconnect';
import injectedConnector from './injected';
import { isMobile } from "../../helpers";

const ConnectToTrustWallect = (WalletConnectProvider, opts) => {
  if (isMobile()){
    return walletconnectConnector(WalletConnectProvider, opts);
  }
  return injectedConnector();
}

export default ConnectToTrustWallect;