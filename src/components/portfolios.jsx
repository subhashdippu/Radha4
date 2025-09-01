import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [fromDate, setFromDate] = useState("2019-01-01");
  const [toDate, setToDate] = useState("2024-04-24");

  useEffect(() => {
    fetch("/a.xlsx") // put file in public/
      .then((res) => res.arrayBuffer())
      .then((buffer) => {
        const workbook = XLSX.read(buffer, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        let jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        // Example structure: [Date, FundA, FundB]
        jsonData = jsonData.slice(5).map((row) => ({
          Date: row[0],
          FundA: parseFloat(row[1]),
          FundB: parseFloat(row[2]),
          Diff: parseFloat(row[1]) - parseFloat(row[2]), // drawdown or spread
        }));

        setData(jsonData);
      });
  }, []);

  return (
    <div className="p-6 space-y-6">
      {/* Trailing Returns Table */}
      <div>
        <h2 className="text-lg font-bold mb-3">Trailing Returns</h2>
        <table className="w-full border text-sm text-center">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">NAME</th>
              <th className="p-2 border">YTD</th>
              <th className="p-2 border">1D</th>
              <th className="p-2 border">1W</th>
              <th className="p-2 border">1M</th>
              <th className="p-2 border">3M</th>
              <th className="p-2 border">6M</th>
              <th className="p-2 border">1Y</th>
              <th className="p-2 border">3Y</th>
              <th className="p-2 border">SI</th>
              <th className="p-2 border">DD</th>
              <th className="p-2 border">MAXDD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Focused</td>
              <td className="border p-2">-1.7%</td>
              <td className="border p-2">0.1%</td>
              <td className="border p-2">2.9%</td>
              <td className="border p-2">7.6%</td>
              <td className="border p-2">2.2%</td>
              <td className="border p-2">10.1%</td>
              <td className="border p-2">43.5%</td>
              <td className="border p-2">23.9%</td>
              <td className="border p-2">22.5%</td>
              <td className="border p-2">-2.8%</td>
              <td className="border p-2">-40.3%</td>
            </tr>
            <tr>
              <td className="border p-2">NIFTY50</td>
              <td className="border p-2">3.1%</td>
              <td className="border p-2">0.1%</td>
              <td className="border p-2">1.1%</td>
              <td className="border p-2">1.4%</td>
              <td className="border p-2">4.4%</td>
              <td className="border p-2">16.2%</td>
              <td className="border p-2">26.2%</td>
              <td className="border p-2">16.0%</td>
              <td className="border p-2">14.5%</td>
              <td className="border p-2">-1.5%</td>
              <td className="border p-2">-38.4%</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Date Filters */}
      <div className="flex items-center gap-4">
        <span className="text-sm">From date</span>
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          className="border rounded p-1"
        />
        <span className="text-sm">To date</span>
        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          className="border rounded p-1"
        />
      </div>

      {/* Charts */}
      <div>
        <h2 className="text-lg font-bold mb-3">Equity curve</h2>
        {/* Line Chart */}
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="FundA" stroke="green" dot={false} />
            <Line type="monotone" dataKey="FundB" stroke="blue" dot={false} />
          </LineChart>
        </ResponsiveContainer>

        {/* Drawdown Area */}
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Date" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Diff"
              stroke="red"
              fill="pink"
              fillOpacity={0.6}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
