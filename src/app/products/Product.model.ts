export class Product {

  public productNumber: number;
  public productName: string;
  public imageURL: string;
  public brand: string;
  public size: number;
  public price: number;
  public category: string;

  constructor(productNumber: number, productName: string, imageURL: string, brand: string, colour: string, size: number, price: number, category: string) {
    this.productNumber = productNumber;
    this.productName = productName;
    this.imageURL = imageURL;
    this.brand = brand;
    this.size = size;
    this.price = price;
    this.category = category
  }
}
