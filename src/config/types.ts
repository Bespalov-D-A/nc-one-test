export interface Iimage {
  id: number;
  name: string;
  price: number;
  src: string;
}

export interface Iproduct extends Iimage {
  active: boolean;
}
