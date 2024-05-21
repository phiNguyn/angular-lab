export interface Inventor {
    id: number,
    first: string,
     last : string,
     year: number,
     passed: number
}
export interface ProductList {
    productId: number,
    productName: string,
    productCode: string,
    releaseDate: string,
    description: string
    price: number,
    starRating : number,
    imageUrl: string
}