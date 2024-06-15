import { ResponsiveLine } from "@nivo/line";

export default function Dashboard() {
  const data = [
    {
      name: "Camiseta de fútbol",
      category: "Ropa",
      price: 35.99,
      brand: "Nike",
      sale_date: "2024-01-15T10:25:32",
      quantity: 2,
    },
    {
      name: "Smartphone",
      category: "Electrónica",
      price: 499.99,
      brand: "Samsung",
      sale_date: "2024-02-02T17:43:10",
      quantity: 1,
    },
    {
      name: "Cafetera",
      category: "Electrodomésticos",
      price: 89.99,
      brand: "Oster",
      sale_date: "2024-01-28T14:12:05",
      quantity: 3,
    },
    {
      name: "Zapatos deportivos",
      category: "Calzado",
      price: 69.99,
      brand: "Adidas",
      sale_date: "2024-02-11T11:58:23",
      quantity: 1,
    },
    {
      name: "Televisor",
      category: "Electrónica",
      price: 599.99,
      brand: "LG",
      sale_date: "2024-01-04T20:33:17",
      quantity: 2,
    },
  ];
  const dataMonth = [
    {
      id: "japan",
      data: [
        {
          x: "1d",
          y: 100,
        },
        {
          x: "10d",
          y: 200,
        },
        {
          x: "20d",
          y: 300,
        },
        {
          x: "30d",
          y: 500,
        },
      ],
    },
  ];
  const dataCampaign = [
    {
      id: "kinder",
      color: "hsl(299, 70%, 50%)",
      data: [
        {
          x: "Jan",
          y: 600,
        },
        {
          x: "Feb",
          y: 900,
        },
        {
          x: "Mar",
          y: 1000,
        },
        {
          x: "Apr",
          y: 1200,
        },
      ],
    },
  ];
  return (
    <>
      <div className="gridBox grid grid-cols-12">
        <div className="graphic-card pt-2 max-h-96 col-span-12">
          <h4 className="text-center text-black text-xl font-semibold">
            Ventas del último mes
          </h4>
          <ResponsiveLine
            data={dataMonth}
            margin={{ top: 25, right: 12, bottom: 125, left: 32 }}
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
            areaBaselineValue={100}
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
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "count",
              legendOffset: -40,
              legendPosition: "middle",
              truncateTickAt: 0,
            }}
            enableTouchCrosshair={true}
            useMesh={true}
          />
        </div>
        <div className="graphic-card pt-2 max-h-96 col-span-12">
          <h4 className="text-center text-black text-xl font-semibold">
            Ventas por campaña
          </h4>
          <ResponsiveLine
            data={dataCampaign}
            margin={{ top: 25, right: 12, bottom: 125, left: 32 }}
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
            enablePoints={true}
            enableArea={true}
            areaBaselineValue={600}
            areaOpacity={0.15}
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
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "count",
              legendOffset: -40,
              legendPosition: "middle",
              truncateTickAt: 0,
            }}
            enableTouchCrosshair={true}
            useMesh={true}
          />
        </div>
        <div className="bestseller pt-2 col-span-12 mb-10">
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
                {data.map((product, i) => (
                  <tr
                    key={i}
                    className={`text-sm text-black ${
                      i % 2 != 0 ? "bg-slate-200" : ""
                    }`}
                  >
                    <td className=" pl-2">{product.name}</td>
                    <td className=" pl-2">{product.brand}</td>
                    <td className=" pl-2">{product.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="lastSeller pt-2 col-span-12">
          <h4 className="text-center text-black text-xl mb-4 font-semibold ">
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
                {data.map((product, i) => (
                  <tr
                    key={i}
                    className={`text-sm text-black ${
                      i % 2 != 0 ? "bg-slate-200" : ""
                    }`}
                  >
                    <td className=" pl-2">{product.name}</td>
                    <td className=" pl-2">{product.brand}</td>
                    <td className=" pl-2">{product.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="map">

        </div>
      </div>
    </>
  );
}
