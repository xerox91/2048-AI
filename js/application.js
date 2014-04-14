
// Configurable values of the game
GAME_SIZE = 4;
START_TILES = 2;
USUAL_TILE_VAL = 2;
BONUS_TILE_VAL = 4;
GOAL_VAL = 2048;
ANIMATION_DELAY = 600;
AI_SEARCH_TIME = 300;  // for AI algorithms


// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
    var manager = new GameManager(GAME_SIZE, KeyboardInputManager, HTMLActuator);
});