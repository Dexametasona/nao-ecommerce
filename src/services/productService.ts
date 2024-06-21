import axios from "axios";
import { Country, ProductResponse } from "../interfaces/product";
import { countryData } from "./countryData";

const APIURL = "https://6670ba240900b5f8724b74f4.mockapi.io/api/v1/product";

export const ProductService = {
  getBestProduct: async () => {
    const response = await axios.get<ProductResponse[]>(APIURL);
    return getFiveRandom(response.data);
  },
  getAll: async () => {
    const response = await axios.get<ProductResponse[]>(APIURL);
    const products = response.data.map((product) => {
      return {
        ...product,
        dateSale: getRandomDate(),
        country: getRandomCountry(),
      };
    });

    return products;
  },
};

function getFiveRandom(products: ProductResponse[]) {
  const bestProducts: ProductResponse[] = [];
  while (bestProducts.length <= 5) {
    const randomIndex = Math.floor(Math.random() * products.length);
    bestProducts.push(products[randomIndex]);
  }
  return bestProducts;
}

function getRandomDate() {
  const start = new Date(2024, 0, 1);
  const end = new Date(2024, 3, 30);
  const randomTime =
    start.getTime() + Math.random() * (end.getTime() - start.getTime());
  return new Date(randomTime);
}

function getRandomCountry(): Country {
  const index = Math.floor(Math.random() * countryData.length);
  const { country, lat, lng } = countryData[index];
  return {
    name: country,
    location: {
      lat,
      lng,
    },
  };
}
