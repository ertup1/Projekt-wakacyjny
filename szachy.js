import Grid from './szachownica.js'
import Moves from './ruchy.js'

var board = new Grid()
var moves = new Moves()
board.fillGrid()
console.log(board.field)