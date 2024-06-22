import { act, render, waitFor} from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Dashboard from "../pages/app/Dashboard";
import { Provider } from "react-redux";
import { authStore } from "../contexts/authStore";
import { vi } from 'vitest';

vi.mock("../services/productService.ts", () => ({
  ProductService:{
    getBestProduct: async ()=>{
      return [
        {
          name: "Acme Wireless Headphones",
          price: 79.99,
          tag: "electronics",
          id: 1
        },
        {
          name: "Cozy Cotton T-Shirt",
          price: 14.50,
          tag: "clothing",
          id: 2
        },
        {
          name: "Travel Coffee Mug",
          price: 22.95,
          tag: "kitchen",
          id: 3
        },
        {
          name: "Leather-bound Notebook",
          price: 39.00,
          tag: "office",
          id: 4
        },
        {
          name: "Smart Fitness Watch",
          price: 199.99,
          tag: "electronics",
          id: 5
        }
      ]
    },
    getAll: async ()=>{
      return [  {
        name: "Camiseta",
        price: "$20.00",
        tag: "ropa",
        id: 1,
        dateSale: new Date(2024,4,5),
        country: { name: "Estados Unidos", location: { lat: 40.7128, lng: -74.006 } }
      },
      {
        name: "Teléfono móvil",
        price: "$500.00",
        tag: "tecnología",
        id: 2,
        dateSale: new Date(2024,4,5),
        country: { name: "China", location: { lat: 39.9042, lng: 116.4074 } }
      },
      {
        name: "Libro",
        price: "$15.99",
        tag: "educación",
        id: 3,
        dateSale: new Date(2024,4,5),
        country: { name: "España", location: { lat: 40.4165, lng: -3.7026 } }
      },
      {
        name: "Botas de senderismo",
        price: "$89.95",
        tag: "deporte",
        id: 4,
        dateSale: new Date(2024,4,5),
        country: { name: "Canadá", location: { lat: 45.4215, lng: -75.6919 } }
      },
      {
        name: "Cámara digital",
        price: "$299.99",
        tag: "fotografía",
        id: 5,
        dateSale: new Date(2024,4,5),
        country: { name: "Japón", location: { lat: 35.6895, lng: 139.6917 } }
      },
      {
        name: "Silla de oficina",
        price: "$129.50",
        tag: "muebles",
        id: 6,
        dateSale: new Date(2024,4,5),
        country: { name: "Alemania", location: { lat: 52.5200, lng: 13.4050 } }
      },
      {
        name: "Pelota de fútbol",
        price: "$24.99",
        tag: "deporte",
        id: 7,
        dateSale: new Date(2024,4,5),
        country: { name: "Brasil", location: { lat: -14.2350, lng: -51.9253 } }
      },
      {
        name: "Gafas de sol",
        price: "$49.95",
        tag: "accesorios",
        id: 8,
        dateSale: new Date(2024,4,5),
        country: { name: "Italia", location: { lat: 41.8719, lng: 12.5674 } }
      },
      {
        name: "Videojuego",
        price: "$59.99",
        tag: "entretenimiento",
        id: 9,
        dateSale: new Date(2024,4,5),
        country: { name: "Corea del Sur", location: { lat: 37.5665, lng: 126.9780 } }
      },
      {
        name: "Mochila",
        price: "$39.95",
        tag: "viaje",
        id: 10,
        dateSale: new Date(2024,4,5),
        country: { name: "Australia", location: { lat: -25.2744, lng: 133.7751 } }
      }]
    },
  }
}));

describe("Dashboard", () => {
  it("render graphic 'ventas del ultimo mes'", async () => {
    await act(async ()=>{
      render(<Provider store={authStore}><Dashboard /></Provider>);
    })

    waitFor(async ()=>{
      const container = document.querySelector(".bestGraphicContainer")
      expect(container).toBeInTheDocument();
      const svgElement = container?.querySelector("svg")
      expect(svgElement).toBeInTheDocument();
    })
  });
  
  it("render graphic 'ventas por campaña'", async () => {
    await act(async ()=>{
      render(<Provider store={authStore}><Dashboard /></Provider>);
    })

    waitFor(async ()=>{
      const container = document.querySelector(".campaignGraphic")
      expect(container).toBeInTheDocument();
      const svgElement = container?.querySelector("svg")
      expect(svgElement).toBeInTheDocument();
    })
  });

  it("render graphic 'mejores productos'", async () => {
    await act(async ()=>{
      render(<Provider store={authStore}><Dashboard /></Provider>);
    })

    waitFor(async ()=>{
      const container = document.querySelector(".bestsellerGraphic")
      expect(container).toBeInTheDocument();
      const svgElement = container?.querySelector("svg")
      expect(svgElement).toBeInTheDocument();
    })
  });

  it("render graphic 'ultimos productos'", async () => {
    await act(async ()=>{
      render(<Provider store={authStore}><Dashboard /></Provider>);
    })

    waitFor(async ()=>{
      const container = document.querySelector(".lastProductsGraphic")
      expect(container).toBeInTheDocument();
      const svgElement = container?.querySelector("svg")
      expect(svgElement).toBeInTheDocument();
    })
  });

  it("render graphic 'mapa de paises segun ventas'", async () => {
    await act(async ()=>{
      render(<Provider store={authStore}><Dashboard /></Provider>);
    })

    waitFor(async ()=>{
      const container = document.querySelector(".mapGraphic")
      expect(container).toBeInTheDocument();
      const svgElement = container?.querySelector("svg")
      expect(svgElement).toBeInTheDocument();
    })
  });
});
