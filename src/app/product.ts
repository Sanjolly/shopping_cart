export class Product {
    constructor( 
        public id          : number,
        public isPublished : boolean,
        public productName : string,
        public productImage: string,
        public price       : number
    ){}
}