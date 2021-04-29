// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Hello.sol";

contract HelloWorld is Hello {
    function world() external pure override returns (uint256) {
        return 0;
    }
}
