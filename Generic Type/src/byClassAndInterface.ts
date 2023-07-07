// // let cl = console.log;

// // Generic type >> type as a parameter

// // let skills : Array

// interface Iproduct {
//     pName: string;
//     pBrand: string;
//     price: number
// }

// // interface Array<T>
// let skills: Array<string> = ["TS", "Angular"];
// let runners: Array<number> = [100, 200, 300];
// let products: Array<Iproduct> = [
//     {
//         pName: "SamSung M31",
//         pBrand: "Samsung",
//         price: 20000
//     }
// ]

// // lib 
// interface Ibook {
//     bookTitle: string;
//     auther?: string;
//     noOfCopies: number;
// }
// class BookShelf implements Ibook {
//     books: Array<Ibook> = [];
//     constructor(public bookTitle : string, public noOfCopies : number ){

//     }
//     addToShelf(newBook : Ibook){
//         this.books.push(newBook)
//     }
//     removeFromShelf(oldBook: Ibook){
//         // ...... Book Id
//     }

// }

// let bookShelf = new BookShelf("Rich dad Poor Dad" ,  100);
// cl(bookShelf)
// interface Imagzine {
//     magzineTitle : string;
//     vol : Date;
//     noOfCopies : number
// }
// class MagzineShelf implements Imagzine {
//     magzine : Array<Imagzine> = [];

//     constructor(public magzineTitle : string, public vol: Date, public noOfCopies: number ){
        
//     }
//     addToShelf(newMagzine : Imagzine){
//         this.magzine.push(newMagzine)
//     }
//     removeFromShelf(oldMagzine: Imagzine){
//         // ...... Magzine Id
//     }
// }

// let magzineShelf = new MagzineShelf("Science", new Date(), 100);

// cl(magzineShelf)