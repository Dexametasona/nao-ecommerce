import { ResponsiveLine } from "@nivo/line";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { ProductService } from "../../services/productService";
import {
  CountryData,
  Product,
  ProductResponse,
} from "../../interfaces/product";
import { graphicLine } from "../../interfaces/graph";
import { countryData } from "../../services/countryData";
import { useAppSelector } from "../../hooks/authHooks";
import { createCustomIcon } from "../../utils/icons";

export default function Dashboard() {
  const [bestProduct, setBestProduct] = useState<ProductResponse[]>([]);
  const [lastProduct, setLastProduct] = useState<Product[]>([]);
  const [monthData, setMonthData] = useState<graphicLine[]>();
  const [monthCampaign, setMonthCampaign] = useState<graphicLine[]>();
  const [product, setProduct] = useState<Product[]>([]);
  const [dataByCountry, setDataByCOuntry] = useState<CountryData[]>([]);
  const currentUser = useAppSelector(state=>state.auth.user)

  const getTotalByCountry = (country: string, products:Product[]) => {
    return products.reduce(
      (total, item) =>
        item.country.name === country ? parseInt(item.price) + total : total,
      0
    );
  };

  const reducerDate = (start: Date, end: Date, dataProduct: Product[]) => {
    const data = dataProduct
      .filter(
        ({ dateSale }) =>
          dateSale.getTime() >= start.getTime() &&
          dateSale.getTime() <= end.getTime()
      )
      .reduce((counter, item) => counter + parseInt(item.price), 0);
    return data;
  };
  const reducerCountryAmount = (products: Product[]) => {
    return countryData.map(({country, lat, lng}) => ({
      name:country,
      location:{lat,lng},
      total:getTotalByCountry(country, products)
    })).sort((a,b)=>a.total-b.total);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataBestProduct = await ProductService.getBestProduct();
        const dataProduct = await ProductService.getAll();
        const dataLastProduct = dataProduct
          .sort((a, b) => b.dateSale.getTime() - a.dateSale.getTime())
          .slice(0, 6);
        const monthProduct: graphicLine = {
          id: "abril",
          data: [
            {
              x: "1d",
              y: reducerDate(
                new Date(2024, 3, 1),
                new Date(2024, 3, 1),
                dataProduct
              ),
            },
            {
              x: "10d",
              y: reducerDate(
                new Date(2024, 3, 1),
                new Date(2024, 3, 10),
                dataProduct
              ),
            },
            {
              x: "20d",
              y: reducerDate(
                new Date(2024, 3, 1),
                new Date(2024, 3, 20),
                dataProduct
              ),
            },
            {
              x: "30d",
              y: reducerDate(
                new Date(2024, 3, 1),
                new Date(2024, 3, 30),
                dataProduct
              ),
            },
          ],
        };
        const campaignProduct: graphicLine = {
          id: "campaign",
          data: [
            {
              x: "Jan",
              y: reducerDate(
                new Date(2024, 0, 1),
                new Date(2024, 0, 31),
                dataProduct
              ),
            },
            {
              x: "Feb",
              y: reducerDate(
                new Date(2024, 1, 1),
                new Date(2024, 1, 29),
                dataProduct
              ),
            },
            {
              x: "Mar",
              y: reducerDate(
                new Date(2024, 2, 1),
                new Date(2024, 2, 31),
                dataProduct
              ),
            },
            {
              x: "Aphr",
              y: reducerDate(
                new Date(2024, 3, 1),
                new Date(2024, 3, 30),
                dataProduct
              ),
            },
          ],
        };

        setBestProduct(dataBestProduct);
        setLastProduct(dataLastProduct);
        setProduct(dataProduct);
        setProduct(dataProduct);
        setMonthData([monthProduct]);
        setMonthCampaign([campaignProduct]);
        setDataByCOuntry(reducerCountryAmount(dataProduct));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
    <div className="mb-10">
      <h2 className="text-center text-2xl text-black font-bold">Bienvenido {currentUser? currentUser.username:"Forastero"} </h2>
    </div>
      <div className="gridBox grid grid-cols-12 gap-x-6 max-w-screen-lg mx-auto">
        {/* -------------------------------ultimos vendidos------------------------------- */}
        <div className="graphic-card pt-2 max-h-96 col-span-12 md:col-span-6 bestGraphicContainer">
          <h4 className="text-center text-black text-xl font-semibold">
            Ventas del último mes
          </h4>
          {monthData ? (
            <ResponsiveLine
              data={monthData}
              margin={{ top: 25, right: 12, bottom: 125, left: 48 }}
              xScale={{ type: "point" }}
              yScale={{
                type: "linear",
                min: "auto",
                max: "auto",
                stacked: true,
                reverse: false,
              }}
              yFormat=" >-.2f"
              colors={"#0074B7"}
              enableArea={true}
              areaBaselineValue={reducerDate(
                new Date(2024, 3, 1),
                new Date(2024, 3, 1),
                product
              )}
              curve="linear"
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 2,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Abril",
                legendOffset: 36,
                legendPosition: "middle",
                truncateTickAt: 0,
              }}
              enableTouchCrosshair={true}
              useMesh={true}
            />
          ) : null}
        </div>
        {/* ---------------------------------ventas por campaña------------------------ */}
        <div className="graphic-card pt-2 max-h-96 col-span-12 md:col-span-6 campaignGraphic">
          <h4 className="text-center text-black text-xl font-semibold">
            Ventas por campaña
          </h4>
          {monthCampaign ? (
            <ResponsiveLine
              data={monthCampaign!}
              margin={{ top: 25, right: 12, bottom: 125, left: 48 }}
              xScale={{ type: "point" }}
              yScale={{
                type: "linear",
                min: "auto",
                max: "auto",
                stacked: true,
                reverse: false,
              }}
              yFormat=" >-.2f"
              colors={"#32E3B1"}
              enablePoints={true}
              enableArea={true}
              areaBaselineValue={monthCampaign[0].data.reduce(
                (a, { y }) => (y < a ? y : a),
                999999
              )}
              areaOpacity={0.15}
              curve="linear"
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 2,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Campaña",
                legendOffset: 36,
                legendPosition: "middle",
                truncateTickAt: 0,
              }}
              enableTouchCrosshair={true}
              useMesh={true}
            />
          ) : null}
        </div>
        {/* --------------------------------mas vendidos */}
        <div className="bestseller pt-2 col-span-12 md:col-span-6 mb-10 bestsellerGraphic">
          <h4 className="text-center text-black text-xl mb-4 font-semibold">
            Productos mas vendidos
          </h4>
          <div className="overflow-x-auto border-2 rounded-md">
            <table className="table">
              <thead>
                <tr className="bg-slate-200">
                  <th className="px-2 textarea-md text-black">Nombre</th>
                  <th className="px-2 textarea-md text-black">Marca</th>
                  <th className="px-2 textarea-md text-black">Precio</th>
                </tr>
              </thead>
              <tbody>
                {bestProduct.map((product, i) => (
                  <tr
                    key={i}
                    className={`text-sm text-black ${
                      i % 2 != 0 ? "bg-slate-200" : ""
                    }`}
                  >
                    <td className=" pl-2">{product.name}</td>
                    <td className=" pl-2">{product.tag}</td>
                    <td className=" pl-2">{product.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* --------------------------ultimos productos */}
        <div className="lastSeller pt-2 col-span-12 md:col-span-6 lastProductsGraphic">
          <h4 className="text-center text-black text-xl mb-4 font-semibold ">
            Ultimos vendidos
          </h4>
          <div className="overflow-x-auto border-2 rounded-md">
            <table className="table">
              <thead>
                <tr className="bg-slate-200">
                  <th className="px-2 textarea-md text-black">Nombre</th>
                  <th className="px-2 textarea-md text-black">Fecha</th>
                  <th className="px-2 textarea-md text-black">Precio</th>
                </tr>
              </thead>
              <tbody>
                {lastProduct.map((product, i) => (
                  <tr
                    key={i}
                    className={`text-sm text-black ${
                      i % 2 != 0 ? "bg-slate-200" : ""
                    }`}
                  >
                    <td className=" pl-2">{product.name}</td>
                    <td className=" pl-2">{product.dateSale.toDateString()}</td>
                    <td className=" pl-2">{product.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="map col-span-12 my-12 mapGraphic">
          <h2 className="text-center text-black text-xl font-medium mb-4">
            Principales países de venta
          </h2>
          <MapContainer
            center={[-18.055168, -70.2513152]}
            zoom={3}
            scrollWheelZoom={false}
            style={{ height: 400 }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {dataByCountry.map((item, i) => (
              <Marker 
              key={i} 
              icon={createCustomIcon(i)}
              position={[item.location.lat, item.location.lng]}
              
              >
                <Popup>Origen:{item.name}, Total:{item.total}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </>
  );
}
