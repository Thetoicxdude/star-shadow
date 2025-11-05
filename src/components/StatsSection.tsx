"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Stats {
  pageViews: number;
  totalProjects: number;
}

export default function StatsSection() {
  const [stats, setStats] = useState<Stats>({ pageViews: 0, totalProjects: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/stats");
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  const statItems = [
    {
      title: "網站瀏覽",
      value: stats.pageViews.toLocaleString(),
      icon: "👁️",
    },
    {
      title: "完成專案",
      value: stats.totalProjects.toLocaleString(),
      icon: "✅",
    },
    {
      title: "客戶滿意度",
      value: "98%",
      icon: "⭐",
    },
  ];

  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800/50 rounded-lg p-6 text-center backdrop-blur-sm"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-blue-400 mb-2">
                {item.value}
              </h3>
              <p className="text-gray-400">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
