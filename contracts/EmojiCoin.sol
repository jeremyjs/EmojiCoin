pragma solidity ^0.4.2;

import "./ConvertLib.sol";

contract EmojiCoin {

	address ChrisCates;

	mapping (address => mapping(uint => uint)) accounts;

	event Transfer(address indexed _from, address indexed _to, uint256 _value);

	function EmojiCoin() public {
		accounts[ChrisCates][0] = 10000000;
		accounts[ChrisCates][1] = 10000000;
		accounts[ChrisCates][2] = 10000000;
	}

	function sendCoin(address receiver, uint amount, uint index) returns(bool sufficient) {
		if (accounts[msg.sender][index] < amount) return false;
		accounts[msg.sender][index] -= amount;
		accounts[receiver][index] += amount;
		Transfer(msg.sender, receiver, amount);
		return true;
	}

	function getBalances(address addr, uint index) constant returns(uint) {
		return accounts[addr][index];
	}
}
