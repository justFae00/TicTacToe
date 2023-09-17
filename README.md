# Tic Tac Toe

Game implementation roadmap:

The current player (X or O)

The game state (still playing, X won, O won, tie)

Implement the main game loop:
Get the player's move

Make the computer move (using some logic to choose an optimal move)

Update the board with both moves

Check if there is a winner or tie

Switch players

Implement computer move logic:
Define a function getComputerMove()

It should use some logic to choose the best move:
First, see if it can win in the next move and choose that spot

If not, see if the player can win in the next move and block that spot

Otherwise, pick a random open spot

Return the row and column for its chosen move
Implement input validation:
When getting the player's move, check that the input row/col is valid
Re-prompt if invalid until they enter a valid move

Display the final winner or tie game result

Play again option - allow players to reset the board and play again

The main components are the game loop, the board representation, determining valid moves, computer move logic, and win/tie checking.
