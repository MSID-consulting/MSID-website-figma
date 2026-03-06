import { Mail, Phone } from "lucide-react";
import MSIDLogo from "/src/assets/MSIDlogo.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* GRID */}
        <div className="grid md:grid-cols-12 gap-x-12 gap-y-10 mb-12">

          {/* COMPANY */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={MSIDLogo}
                alt="MSID Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="text-xl font-semibold text-white">
                PT. Mitra Solusi Integrasi Data
              </span>
            </div>

            <p className="text-sm text-gray-400 max-w-sm">
              Transforming businesses through unified data solutions and
              intelligent analytics.
            </p>

            <div className="space-y-2 text-sm pt-2">
              <div className="flex items-center gap-2">
                <Mail className="size-4 text-gray-400" />
                <a
                  href="mailto:info@mitrasolusiintegrasi.com"
                  className="hover:text-white transition-colors"
                >
                  info@mitrasolusiintegrasi.com
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="size-4 text-gray-400" />
                <a
                  href="https://wa.me/6281533305750"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +62 815 3330 5750
                </a>
              </div>
            </div>
          </div>

          {/* SERVICES */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-4">Services</h3>

            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Data Warehouse
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Business Intelligence
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  ERP Implementation
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  ERP Support
                </a>
              </li>
            </ul>
          </div>

          {/* PRODUCTS */}
          <div className="md:col-span-4">
            <h3 className="text-white font-semibold mb-4">Products</h3>

            <ul className="space-y-2 text-sm columns-2">
              <li>Microsoft SQL Server</li>
              <li>PostgreSQL</li>
              <li>n8n</li>
              <li>Microsoft Fabric</li>
              <li>PowerBI</li>
              <li>Apache Superset</li>
              <li>Odoo</li>
              <li>Microsoft Dynamics AX</li>
              <li>Microsoft Dynamics NAV</li>
              <li>Microsoft D365 F&O</li>
              <li>Microsoft D365 BC</li>
              <li>SAP S/4HANA</li>
            </ul>
          </div>

          {/* CONNECT */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-4">Connect</h3>

            <div className="flex gap-4">
              <a
                href="mailto:info@mitrasolusiintegrasi.com"
                className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Mail className="size-5" />
              </a>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-800 pt-8 text-sm text-center text-gray-400">
          <p>© 2026 PT. Mitra Solusi Integrasi Data. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}