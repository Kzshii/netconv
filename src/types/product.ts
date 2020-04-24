export class Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity?: number;

  constructor(props: any = {}) {
    Object.assign(this, props);
    this.id = props.id ? props.id : 12345678;
    this.name = props.name ? props.name : '';
    this.price = props.price ? props.price : 0;
    this.image = props.image ? props.image : '';
  }
}
