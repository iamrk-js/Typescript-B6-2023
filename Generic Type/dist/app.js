"use strict";
let cl = console.log;
class Shelf {
    constructor() {
        this.items = [];
    }
    addItemToShelf(item) {
        // .....
        this.items.push(item);
    }
    removeItemFromShlef(item) {
        // ..////
    }
}
let bookShelf = new Shelf();
bookShelf.addItemToShelf({ bookTitle: "Rich dad Poor Dad", noOfCopies: 1000 });
cl(bookShelf);
let magzineShelf = new Shelf();
magzineShelf.addItemToShelf({ magzineTitle: "Science", vol: new Date(), noOfCopies: 1000 });
cl(magzineShelf);
