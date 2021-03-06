import useMaker from './useMaker';

const useAuctionActions = () => {
  const { maker, web3Connected } = useMaker();

  //ETH tend
  async function callTend(auctionId, lotSize, bidAmount) {
    console.log('tend, auctionId, lotSize, bidAmount', auctionId, lotSize, bidAmount);
    try {
      const tend = await maker
        .service('validator')
        .flipEthTend(auctionId, lotSize, bidAmount.toNumber());
    } catch (err) {
      window.alert(err);
    }
  }

  //ETH dent
  async function callEthDent(auctionId, lotSize, bidAmount) {
    console.log('eth dent, auctionId, lotSize, bidAmount', auctionId, lotSize, bidAmount);
    try {
      const tend = await maker
        .service('validator')
        .flipEthDent(auctionId, lotSize.toNumber(), bidAmount);
    } catch (err) {
      window.alert(err);
    }
  }

  function callFlopDent(auctionId, lotSize, bidAmount) {
    console.log('flop dent, auctionId, lotSize, bidAmount', auctionId, lotSize, bidAmount);
    try {
      return maker.service('validator').flopDent(auctionId, lotSize, bidAmount);
    } catch (err) {
      window.alert(err);
    }
  }

  function callFlopDeal(auctionId) {
    console.log('flop deal, auctionId:', auctionId);
    try {
      return maker.service('validator').flopDeal(auctionId);
    } catch (err) {
      window.alert(err);
    }
  }

  return { callTend, callFlopDent, callFlopDeal, callEthDent };
};

export default useAuctionActions;
