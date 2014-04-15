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
    // TODO here you should call whatever function you implement
    return this.sillyDecision();
}

///////////////////////////////////////////////
///////////////////////////////////////////////



// example function that makes a random decision
AI.prototype.sillyDecision = function () {
    mv = Math.floor(Math.random() * 4);  // a integer between 0 and 4
    result = { move: mv };
    
    console.log(this.translate(result.move));   // prints the decision
    return result;
}

// TODO here you should implement the algorithms for the agent




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


