/**
 * Nim is another 2-player game that's a simple variation on a Nim game. The rules of the games are as follows:
 * The game starts with piles of chips indexed from 0 to n-1. Each pile (where 0 <= i < n ) has c of i chips.
 * The players move in alternating turns. During each move, the current player must perform either of the following actions:
 * Remove one or more chips from a single pile.
 * Add one or more chips to a single pile.
 * At least 1 chip must be added or removed during each turn.
 * To ensure that the game ends in finite time, a player cannot add chips to any pile i more than k times.
 * The player who removes the last chip wins the game.
 * Given the values of n, k, and the numbers of chips in each of the  piles, determine whether the person who wins the game is the first or second person to move. Assume both players move optimally.
 *
 * Input Format
 *
 * The first line contains an integer, T, denoting the number of test cases.
 * Each of the 2T subsequent lines defines a test case. Each test case is described over the following two lines:
 * Two space-separated integers, n(the number of piles) and k(the maximum number of times an individual player can add chips to some pile i), respectively.
 * n space-separated integers, c0, c1,....., cn-1 where each c of i describes the number of chips at pile.
 *
 * Constraints
 * 1 <= T <= 100
 * 1 <= n, k <= 100
 * 1 <= ci <= 10^9
 *
 * Output Format
 *
 * For each test case, print the name of the winner on a new line (i.e., either First or Second).
 *
 * Sample Input
 * 2
 * 2 5
 * 1 2
 * 3 5
 * 2 1 3
 *
 * Sample Output
 * First
 * Second
 */
