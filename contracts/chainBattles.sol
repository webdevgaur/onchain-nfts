// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract chainBattles is ERC721URIStorage {
    using Strings for uint256;
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    mapping(uint256 => uint 256) public tokenIdToLevels;

    constructor() ERC721('Chain Battles', 'BTLX') {

    }


    function generateCharacter (uint256 tokenId) public returns (string memory) {
        bytes memory svg = abi.encodePacked(
           "<svg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMinYMin meet' viewBox='0 0 350 350'>",
           "<style>.role { fill: white; font-family: sans-serif; font-size: 60px; font-weight: bold }</style>",
           "<style>.level { fill: white; font-family: serif; font-size: 30px; }</style>",
           "<rect width='100%' height='100%' fill='black' />",
           "<text x='50%' y='45%' class='role' dominant-baseline='middle' text-anchor='middle'>", "Warrior", "</text>",
           "<text x='50%' y='60%' class='level' dominant-baseline='middle' text-anchor='middle'>","Levels: ", getLevels(tokenId), "</text>",
           "</svg>"
        );
        return string(
            abi.encodePacked(
                'data:image/svg+xml;base64,',
                Base64.encode(svg)
            );
        );
    }

    function getLevels (uint256 tokenId) public view returns (string memory) {
        uint256 levels = tokenIdToLevels[tokenId];
        return levels.toString();
    }

    function getTokenURI (uint256 tokenId) public returns (string memory) {
        bytes memory dataURI = abi.encodePacked(
            '{',
                '"name": "Chain Battles #', tokenId.toString(), '",',
                '"description": "Battles on chain ⚔️",',
                '"image": "', generateCharacter(tokenId), '"',
            '}'
        );

        return string(
            abi.encodePacked(
                "data:application/json;base64,",
                Base64.encode(dataURI)
            );
        );

    }


}