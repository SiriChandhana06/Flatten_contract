// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// ERC20.sol from OpenZeppelin
// (flattened code for ERC20 contract and dependencies here)

contract MyToken {
    // Consolidated ERC20 logic here

    constructor(uint256 initialSupply) {
        _mint(msg.sender, initialSupply);
    }

    // Consolidated ERC20 functions here
}
