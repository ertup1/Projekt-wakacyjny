export default
class Moves{
    allowed_move=new Array(64)

    reset(){
        for(var i=0;i<64;i++){
            allowed_move[i]=false
        }
    }

    rook(field){
        var p=Math.floor(field/8)
        for(var i=0;i<8;i++){
            if(field+8*i<64){
                allowed_move[field+8*i]=true  
            }
            if(field-8*i>=0){
                allowed_move[field-8*i]=true  
            }
            allowed_move[8*p+i]=true
        }
        allowed_move[field]=false
        return allowed_move
    }

    bishop(field){
        var p=Math.floor(field/8)
        for(var i=0;i<8;i++){
            if(field+9*i<64 && Math.floor((field+9*i)/8)==p+i){
                allowed_move[field+9*i]=true
            }
            if(field-9*i>=0){
                allowed_move[field-9*i]=true
            }
            if(field+7*i<64 && Math.floor((field+7*i)/8)==p+i){
                allowed_move[field+7*i]=true
            }
            if(field-7*i>=0){
                allowed_move[field-7*i]=true
            }
        }
        allowed_move[field]=false
        return allowed_move
    }

    horse(field){
        var p=Math.floor(field/8)
        if(field+17<64 && Math.floor((field+17)/8)==p+2){
            allowed_move[field+17]=true
        }
        if(field+15<64 && Math.floor((field+15)/8)==p+2){
            allowed_move[field+15]=true
        }
        if(field-15>=0 && Math.floor((field-15)/8)==p-2){
            allowed_move[field-15]=true
        }
        if(field-17>=0 && Math.floor((field-17)/8)==p-2){
            allowed_move[field-17]=true
        }
        if(field+10<64 && Math.floor((field+10)/8)==p+1){
            allowed_move[field+10]=true
        }
        if(field-6>=0 && Math.floor((field-6)/8)==p-1){
            allowed_move[field-6]=true
        }
        if(field-10>=0 && Math.floor((field-10)/8)==p-1){
            allowed_move[field-10]=true
        }
        if(field+6<64 && Math.floor((field+6)/8)==p+1){
            allowed_move[field+6]=true
        }
        return allowed_move
    }

    queen(field){
        this.rook(field)
        this.bishop(field)
        return allowed_move
    }

    king(field){
        var p=Math.floor(field/8)
        if(field+1<64 && Math.floor((field+1)/8)==p)
            allowed_move[field+1]=true
        if(field+8<64 && Math.floor((field+8)/8)==p+1)
            allowed_move[field+8]=true
        if(field+7<64 && Math.floor((field+7)/8)==p+1)
            allowed_move[field+7]=true
        if(field+9<64 && Math.floor((field+9)/8)==p+1)
            allowed_move[field+9]=true
        if(field-1>=0 && Math.floor((field-1)/8)==p)
            allowed_move[field-1]=true
        if(field-8>=0 && Math.floor((field-8)/8)==p-1)
            allowed_move[field-8]=true
        if(field-7>=0 && Math.floor((field-7)/8)==p-1)
            allowed_move[field-7]=true
        if(field-9>=0 && Math.floor((field-9)/8)==p-1)
            allowed_move[field-9]=true
        return allowed_move
    }

    pawn(field,color){
        if(field>7 && field <16 && color=='W'){
            allowed_move[field+16]=true
        }
        if(field+8<64 && color=='W'){
            allowed_move[field+8]=true
        }
        if(field>47 && field <56 && color=='B'){
            allowed_move[field-16]=true
        }
        if(field-8>=0 && color=='B'){
            allowed_move[field-8]=true
        }
        return allowed_move
    }
}