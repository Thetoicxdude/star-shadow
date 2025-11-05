"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "建築設計",
    description: "專業的建築設計服務，打造獨特的視覺體驗",
    icon: "🏗️",
  },
  {
    title: "3D建模",
    description: "高質量的3D模型製作，適用於各種場景",
    icon: "🎮",
  },
  {
    title: "Discord伺服器設計",
    description: "客製化Discord伺服器，打造完美社群空間",
    icon: "💬",
  },
  {
    title: "Minecraft伺服器設計",
    description: "專業的Minecraft伺服器建置與優化",
    icon: "⛏️",
  },
  {
    title: "Minecraft技術支援",
    description: "伺服器技術問題解決與效能優化",
    icon: "🔧",
  },
  {
    title: "腳本製作",
    description: "客製化腳本開發，增強遊戲體驗",
    icon: "📜",
  },
  {
    title: "網站開發",
    description: "專業的網站設計與開發服務",
    icon: "🌐",
  },
  {
    title: "Discord Bot開發",
    description: "客製化Discord機器人開發",
    icon: "🤖",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          我們的服務
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 hover:bg-gray-800/50 transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-400">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
