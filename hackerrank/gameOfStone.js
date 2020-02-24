/**
 * Game of Stones
 *
 * Two players called P1 and P2 are playing a game with n stones. Player 1 always plays first, and the two
 * players move in alternating turns. The game's rules are as follows:
 * In a single move, a player can remove either 2, 3, or 5 stones from the game board.
 * If a player is unable to make a move, that player loses the game.
 * Given the starting number of stones, find and print the name of the winner. P1 is named First and P2 is named Second.
 * Each player plays optimally, meaning they will not make a move that causes them to lose the game if a winning move exists.
 * For example, if n=4, P1 can make the following moves:
 * P1 removes 2 stones leaving 2. P2 will then remove stones and win.
 * P1 removes 3 stones leaving 1. P2 cannot move and loses.
 * P1 would make the second play and win the game.
 *
 * Function Description
 * Complete the gameOfStones function in the editor below. It should return a string, either First or Second.
 * gameOfStones has the following parameter(s):
 * n: an integer that represents the starting number of stones
 *
 * Input Format
 *
 * The first line contains an integer, t, the number of test cases.
 * Each of the next t lines contains an integer, n, the number of stones in a test case.
 *
 * Constraints
 * 1 <= n, t <= 100
 *
 * Output Format
 *
 * On a new line for each test case, print First if the first player is the winner. Otherwise print Second.
 *
 * Sample Input
 * 8
 * 1
 * 2
 * 3
 * 4
 * 5
 * 6
 * 7
 * 10
 *
 * Sample Output
 * Second
 * First
 * First
 * First
 * First
 * First
 * Second
 * First
 *
 * Explanation
 * In the sample, we have t = 8 testcases.
 * If n=1, P1 can't make any moves and loses the game.
 * If n=2, P1 removes 2 stones and wins the game.
 * If n=3, P1 removes 2 stones in their first move, leaving 1 stone on the board and winning the game.
 * If n=4, P1 removes 3 stones in their first move, leaving 1 stone on the board and winning the game.
 * If n=5, P1 removes all 5 stones from the game board, winning the game.
 * If n=6, P1 removes 5 stones in their first move, leaving 1 stone on the board and winning the game.
 * If n=7, P1 can make any of the following three moves:
 * 1) Remove 2 stones, leaving 5 stones on the board. P2 then removes 5 stones, winning the game.
 * 2) Remove 3 stones, leaving 4 stones on the board. P2 then removes 3 stones, leaving 1 stone left on the board and winning the game.
 * 3) Remove 5 stones, leaving 2 stones on the board. P2 then removes the 2 remaining stones and wins the game.
 * All possible moves result in P2 winning.
 * If n=10, P1 can remove either 2 or 3 stones to win the game.
 */

const gameOfStones = n => {
  for (let i = 0; i < n; i++) {
    for (let j = 2; j <= 6; j++) {
      if (n === j + 7 * i) {
        return 'First';
      } else if (n < j + 7 * i) {
        return 'Second';
      }
    }
  }
  return 'Second';
};

const gameOfStones2 = n => {
  for (let i = 0; i < n; i++) {
    for (let j = 7; j <= 8; j++) {
      if (n === j + 7 * i) {
        return 'Second';
      } else if (n < j + 7 * i) {
        return 'First';
      }
    }
  }
  return 'First';
};

function gameOfStones3(input) {
  return input % 7 <= 1 ? 'Second' : 'First';
}

console.log(gameOfStones(8));
console.log(gameOfStones2(22));
console.log(gameOfStones3(22));
