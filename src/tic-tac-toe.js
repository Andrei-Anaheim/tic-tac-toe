class TicTacToe {
    constructor() {
        this.turn = 0;
        this.battlefield = [['','',''],['','',''],['','','']]

    }

    getCurrentPlayerSymbol() {
        if(this.turn%2===0) {
            //console.log('xod:' + this.turn + 'znak: x')
            return 'x';
        } else {
            //console.log('xod:' + this.turn + 'znak: o')
            return 'o';
        }
        

    }

    nextTurn(rowIndex, columnIndex) {
        if (rowIndex<3 && rowIndex>=0 && columnIndex<3 && columnIndex>=0 && this.getFieldValue(rowIndex, columnIndex)===null) {
            this.battlefield[rowIndex][columnIndex] = this.getCurrentPlayerSymbol()
            //console.log(rowIndex, columnIndex, this.getCurrentPlayerSymbol())
            this.turn+=1;
            this.getWinner();
        } else {
            //console.log('error')
        }
    }

    isFinished() {
        if(this.getWinner()!==null || this.isDraw()===true) {
            return true;
        } else {
            return false;
        }

    }

    getWinner() {
        for (let i=0;i<3;i+=1) {
            if (this.battlefield[i].filter((el)=> el==='x').length === 3) {
                return 'x';
            } else if (this.battlefield[i].filter((el)=> el==='o').length === 3) {
                return 'o';
            }
        }
        const transpose = array => array.reduce((r, a) => a.map((v, i) => [...(r[i] || []), v]), []);
        let transposebattlefield = transpose(Array.from(this.battlefield));
        for (let i=0;i<3;i+=1) {
            if (transposebattlefield[i].filter((el)=> el==='x').length === 3) {
                return 'x';
            } else if (transposebattlefield[i].filter((el)=> el==='o').length === 3) {
                return 'o';
            }
        }
        let mainDiagon = [this.battlefield[0][0],this.battlefield[1][1],this.battlefield[2][2]];
        let secondDiagon = [this.battlefield[2][0],this.battlefield[1][1],this.battlefield[0][2]];
        if (mainDiagon.filter((el)=> el==='x').length === 3) {
            return 'x';
        } else if (mainDiagon.filter((el)=> el==='o').length === 3) {
            return 'o';
        }
        if (secondDiagon.filter((el)=> el==='x').length === 3) {
            return 'x';
        } else if (secondDiagon.filter((el)=> el==='o').length === 3) {
            return 'o';
        }
        return null;

    }

    noMoreTurns() {
        for (let i=0; i<3;i+=1) {
            //console.log(this.battlefield)
            let summ = this.battlefield[i].filter((el)=> el==='x').length + this.battlefield[i].filter((el)=> el==='o').length;
            //console.log('sum:' + summ)
            if (summ<3) {
                return false;
            }
        }
        return true;
    }

    isDraw() {
        if (this.noMoreTurns()===true && this.getWinner()===null) {
            return true
        }
        return false
    }

    getFieldValue(rowIndex, colIndex) {
        if (this.battlefield[rowIndex][colIndex]!=='') {
            return this.battlefield[rowIndex][colIndex];
        } else {
            return null
        }
    }
}

module.exports = TicTacToe;
