/***
 * Intelligent Agent template for 2048.
 *
 * Sergio Salomon Garcia
 */

///////////////////////////////////////////////
///// Required functions of the agent

function AI(grid) {
    this.grid = grid;
}

// performs a search and returns the best move
AI.prototype.getBest = function () {
    return this.sillyDecision();
}

///////////////////////////////////////////////
///////////////////////////////////////////////


AI.prototype.sillyDecision = function () {
    return {
        move: 0,        // a integer between 0 and 4
        score: 10000,
        positions: 0,
        cutoffs: 0
    };
}




///////////////////////////////////////////////
///// Auxiliar functions

AI.prototype.translate = function (move) {
    return {
        0: 'up',
        1: 'right',
        2: 'down',
        3: 'left'
    }[move];
}



