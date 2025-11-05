export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">星影工作室</h3>
            <p className="mb-4">
              專業的遊戲、網站與Discord服務提供商，為您打造最優質的數位體驗
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">聯絡方式</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:contact@example.com"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  📧 Email
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/your-server"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  💬 Discord
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">快速連結</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/products"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  🛍️ 產品服務
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  📋 委託流程
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>© 2025 星影工作室. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
