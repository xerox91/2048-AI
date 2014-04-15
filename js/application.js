
// Configurable values of the game
GAME_SIZE = 4;
START_TILES = 2;
USUAL_TILE_VAL = 2;
BONUS_TILE_VAL = 4;
BONUS_PROB = 0.9;
GOAL_VAL = 2048;
ANIMATION_DELAY = 500;
AI_SEARCH_TIME = 100;  // for AI algorithms


// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
    var manager = new GameManager(GAME_SIZE, KeyboardInputManager, HTMLActuator);
});