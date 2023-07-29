// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract Lottery {
  address[] public users;
  address public admin;

  mapping(address => uint) balance;

  constructor() {
    admin = msg.sender;
  }

  function balanceOf() public view returns (uint) {
    return address(this).balance;
  }

  function add_users(address users_address) external {
    users.push(users_address);
  }

  function totalUsers() public view returns (uint) {
    return users.length;
  }

  function view_users() public view returns (address[] memory) {
    return users;
  }
}
