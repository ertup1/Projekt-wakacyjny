export default
class Grid{
    field=new Array(64)

    fillGrid(){
        this.field[0]='WR' //W - White R - Rook
        this.field[1]='WH' //H - horse
        this.field[2]='WB' //B - bishop
        this.field[3]='WK' //K - king
        this.field[4]='WQ' //Q - queen
        this.field[5]='WB'
        this.field[6]='WH'
        this.field[7]='WR'
        for(var i=8;i<16;i++){
            this.field[i]='WP' //P - pawn
        }
        this.field[63-0]='BR' //B - Black R - Rook
        this.field[63-1]='BH' //H - horse
        this.field[63-2]='BB' //B - bishop
        this.field[63-3]='BK' //K - king
        this.field[63-4]='BQ' //Q - queen
        this.field[63-5]='BB'
        this.field[63-6]='BH'
        this.field[63-7]='BR'
        for(var i=55;i>47;i--){
            this.field[i]='BP' //P - pawn
        }
        for(var i=16;i<48;i++){
            this.field[i]='  '
        }
    }
}