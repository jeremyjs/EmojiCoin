// Import the page's CSS. Webpack will know what to do with it.
import "../stylesheets/app.css";

// Import libraries we need.
import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract'
import lightwallet from 'eth-lightwallet';

// Import our contract artifacts and turn them into usable abstractions.
import emojicoin_artifacts from '../../build/contracts/EmojiCoin.json'

// MetaCoin is our usable abstraction, which we'll use through the code below.
var EmojiCoin = contract(emojicoin_artifacts);

window.addEventListener('load', () => {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 EmojiCoin, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask")
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
  } else {
    console.warn("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }

  var page = 1;

  $(document).ready(() => {
    $(".page").hide();
    $(".page-one").show();
    if (page == 1) {
      setInterval(() => {
        $(".emojis span")
        .transition({
          'rotate': 25,
          'duration': 500
        })
        .delay(250)
        .transition({
          'rotate': -25,
          'duration': 500
        })
        .delay(250)

      }, 2000)
    }
  });
});
