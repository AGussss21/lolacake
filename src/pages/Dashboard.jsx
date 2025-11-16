import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

export default function DashboardLolaCake() {
  const data = [
    { name: "Kue Terjual", value: 120 },
    { name: "Pesanan Baru", value: 45 },
    { name: "Batal", value: 8 },
  ];

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Header */}
      <div className="md:col-span-3 flex justify-between items-center">
        <h1 className="text-3xl font-bold">🍰 Dashboard Lola Cake</h1>
        <Button className="rounded-2xl px-6 py-2">Logout</Button>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="md:col-span-1"
      >
        <Card className="shadow-xl rounded-2xl p-4">
          <CardContent>
            <h2 className="text-xl font-semibold mb-3">Pesanan Hari Ini</h2>
            <p className="text-4xl font-bold text-pink-500">45</p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="md:col-span-1"
      >
        <Card className="shadow-xl rounded-2xl p-4">
          <CardContent>
            <h2 className="text-xl font-semibold mb-3">Total Penjualan</h2>
            <p className="text-4xl font-bold text-green-500">120</p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="md:col-span-1"
      >
        <Card className="shadow-xl rounded-2xl p-4">
          <CardContent>
            <h2 className="text-xl font-semibold mb-3">Pelanggan Baru</h2>
            <p className="text-4xl font-bold text-blue-500">23</p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Grafik */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="md:col-span-2"
      >
        <Card className="shadow-xl rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">Statistik Penjualan</h2>
          <div className="w-full h-72">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={data} dataKey="value" outerRadius={110} fill="#ff4f76" />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </motion.div>

      {/* Menu Aksi */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="md:col-span-1 flex flex-col gap-4"
      >
        <Card className="shadow-xl rounded-2xl p-4">
          <CardContent>
            <h2 className="text-xl font-semibold mb-4">Aksi Cepat</h2>
            <div className="flex flex-col gap-3">
              <Button className="rounded-xl py-2">Tambah Produk</Button>
              <Button className="rounded-xl py-2" variant="outline">Kelola Pesanan</Button>
              <Button className="rounded-xl py-2" variant="outline">Lihat Pelanggan</Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
