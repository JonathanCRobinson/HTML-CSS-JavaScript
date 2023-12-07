"use strict";
const settings = {
    // Properties for the name of the player and amount of cards
    playerName: "",
    numImages: 48,

    // Methods to set and get the name of the player and number of images
    getPlayerName(){
        return this.playerName;
    },
    getNumberOfImages(){
        return this.numImages;
    },
    setPlayerName(name) {
        this.playerName = name;
    },
    setNumberOfImages(num){
        this.numImages = num;
    }

};