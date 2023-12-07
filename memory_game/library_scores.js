"use strict";

const scores = {
    //Properties to keep track of ingame score, the highscore, how many turns the player has done, and how many correct matches they made
    gameScore: 0,
    highScore: 0,
    turns: 0,
    matches: 0,

    // Get Set method for the score and highscore
    getGameScore(){
        return this.gameScore;
    },
    getHighScore(name){
        const percentage = localStorage.getItem(name) || null;
	    return parseInt(percentage);
    },
    setGameScore(score){
        this.gameScore = score;
    },
    setHighScore(name, score){
        if ( isValid(name, score) ) {
            localStorage.setItem(name, score);
        }
    },
    turn() {
        this.turns++;
    },
    matched() {
        this.matches++;
    },

    // Method to calculate the high score
    calcScore(){
        return Math.floor((this.matches / this.turns) * 100);
    },
    isValid(name, percentage){
        name && name !== "" && !isNaN(percentage)
    },
    //Method to check if the current score is better than the highscore and then makes the current score the new high score if true
    compareScores(name, percentage){
        if ( isValid(name, percentage) ) {
            const highScore = getHighScore(name);
            if (isNaN(highScore) || percentage > highScore) {
                setHighScore(name, percentage);
            }
        }
    },

    displayHighScore(name){
        if (name !== "") {
            const percent = getHighScore(name);
            if (!isNaN(percent)) {
                $("#high_score").text(`High score: ${percent}%`);
            }
        }
    }
};
