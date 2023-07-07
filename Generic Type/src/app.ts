let cl = console.log;

interface Ibook {
    bookTitle: string;
    auther?: string;
    noOfCopies: number;
}

interface Imagzine {
    magzineTitle : string;
    vol : Date;
    noOfCopies : number
}

class Shelf<T> {
    items : Array<T> = [];

    addItemToShelf(item : T){
        // .....
        this.items.push(item)
    }

    removeItemFromShlef(item : T){
        // ..////
    }
}

let bookShelf = new Shelf<Ibook>();

bookShelf.addItemToShelf({bookTitle : "Rich dad Poor Dad" , noOfCopies : 1000})

cl(bookShelf);

let magzineShelf = new Shelf<Imagzine>();

magzineShelf.addItemToShelf({magzineTitle : "Science" , vol : new Date() , noOfCopies : 1000})

cl(magzineShelf)