// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "hardhat/console.sol";

contract chainBattles is ERC721URIStorage {
    using Strings for uint256;
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    mapping(uint256 => uint256) public tokenIdToLevels;

    mapping (address => Character[]) public playerToCharacter;
    
    // challenge: Map an uint to a struct
    // In the struct map the following - HP, strength, speed
    // At mint time, map out a full list of stats to the character
    // Figure how to do pseudo random number generation on chain (How to use chainlink for that?)
    // Update the train functionality to update the stats as they update

    struct Character {
        string name;
        string role;
        uint256 level;
        uint256 mana;
        uint256 strength;
        uint256 edginess;
        uint256 life;
        address playerAddress;
        uint256 timestamp;
    }

    Character[] characters;

    constructor() ERC721('Chain Battles', 'BTLX') {

    }


    function generateCharacter (uint256 tokenId) view public returns (string memory) {
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
            )
        );
    }

    function getLevels (uint256 tokenId) public view returns (string memory) {
        uint256 levels = tokenIdToLevels[tokenId];
        return levels.toString();
    }

    function getTokenURI (uint256 tokenId) view public returns (string memory) {
        bytes memory dataURI = abi.encodePacked(
            '{',
                '"name": "Chain Battles #', tokenId.toString(), '",',
                '"description": "', unicode"Battles on chain ⚔️", '",',
                '"image": "', generateCharacter(tokenId), '"',
            '}'
        );

        string memory metadata = string(
            abi.encodePacked(
                "data:application/json;base64,",
                Base64.encode(dataURI)
            )
        );

        // console.log(metadata);

        return metadata;

    }

    function mint(string memory _name, string memory _role, uint256 _mana, uint256 _strength, uint256 _edginess, uint256 _life) public {
        Character[] newOne;
        newOne(
            _name,
            _role,
            1,
            _mana,
            _strength,
            _edginess,
            _life,
            msg.sender,
            block.timestamp
        );
        characters.push(newOne);
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        // tokenIdToLevels[newItemId] = 0;
        _safeMint(msg.sender, newItemId);        
        _setTokenURI(newItemId, getTokenURI(newItemId));
    }

    error cannotTrainYet(uint256 lastTimestamp, uint256 timeStamp);

    function train(uint256 tokenId) public {
        require(_exists(tokenId), "Please use an existing token.");
        require(ownerOf(tokenId) == msg.sender, "Please only train your tokens.");
        // uint256 currentLevel = tokenIdToLevels[tokenId];
        // tokenIdToLevels[tokenId] = currentLevel + 1;

        // Update character strength
        uint256 currentStrength = playerToCharacter[msg.sender].strength;
        playerToCharacter[msg.sender].strength = currentStrength + 5;

        // Update character mana
        uint256 currentMana = playerToCharacter[msg.sender].mana;
        playerToCharacter[msg.sender].mana = currentMana + 5;

        // Update character edginess
        uint256 currentEdginess = playerToCharacter[msg.sender].edginess;
        playerToCharacter[msg.sender].edginess = currentEdginess + 5;


        _setTokenURI(tokenId, getTokenURI(tokenId));
    }


}