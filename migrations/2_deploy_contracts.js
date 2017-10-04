var ConvertLib = artifacts.require("./ConvertLib.sol");
var EmojiCoin = artifacts.require("./EmojiCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, EmojiCoin);
  deployer.deploy(EmojiCoin);
};
