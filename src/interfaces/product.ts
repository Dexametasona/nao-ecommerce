export interface Product {
  name: string;
  price: string;
  tag: string;
  id: number;
  dateSale: Date;
  country: Country;
}
export interface ProductResponse
  extends Omit<Product, "country" | "dateSale"> {}

export interface Country {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
}
export interface CountryData extends Country {
  total: number;
}
