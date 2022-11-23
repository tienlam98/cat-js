const readline = require('readline-sync');
const Rectangle = require('./rectangle');

class Square extends Rectangle {
    constructor(side = 1) {
        super(side, side);
    }

    get side() {
        return this.width;
    }

    set side(newSide) {
        this.width = this.height = newSide;
    }

    scan() {
        this.width = Number(readline.question("+ Nhập cạnh hình vuông: "));
        this.height = this.width;
    }
    print() {
        console.log(`=> Hình vuông: ${this.width} x ${this.height}`);
    }
}

module.exports = Square;