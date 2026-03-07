import { Database, TrendingUp, Zap, BarChart3, Settings, Headphones } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import d365Logo from "/src/assets/6d6f91c42939dd0eea152aabaf4f47f2a64b832a.png";
import dynamicsAXLogo from "/src/assets/cb0976ffcb9214f15d1154f0c11bc357f5bbe1cd.png";
import odooLogo from "/src/assets/246017ef84bb76cf64cc2e3f452171c188e77af1.png";
import sapLogo from "/src/assets/9277a50a7a4f73146c0d1d240d905f838b26437a.png";
import dynamicsNAVLogo from "/src/assets/320af2d1a670315d33e14b86486a6f2360bb809e.png";
import PBILogo from "/src/assets/PBI.png";
import postgreSQLLogo from "/src/assets/PostgreSQL.png";
import SQLLogo from "/src/assets/SQL.png";
import supersetLogo from "/src/assets/Superset.png";
import d365bcLogo from "/src/assets/d365bc.png";
import n8nLogo from "/src/assets/n8n.png";
import fabricLogo from "/src/assets/fabric.png";

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive data solutions designed to unify your data landscape and empower your decision-making.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Service 1 */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Database className="size-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Data Warehouse Development
            </h3>
            <p className="text-gray-700 mb-6">
              Consolidate scattered data across multiple systems into a unified, high-performance data warehouse. 
              We design and implement scalable solutions that bring all your data together in one secure location.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Zap className="size-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Unified data integration from disparate sources</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="size-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Scalable architecture for growing data needs</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="size-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Enhanced data quality and consistency</span>
              </li>
            </ul>
            <div className="border-t border-blue-200 pt-4">
              <p className="text-sm font-semibold text-gray-900 mb-3">Powered by:</p>
              <div className="space-y-2">
                <div className="flex items-center gap-3 bg-white rounded-lg px-3 py-2">
                  <img src={SQLLogo} alt="Microsoft SQL Server" className="h-6 object-contain" />
                  <span className="text-gray-900 font-medium">Microsoft SQL Server</span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg px-3 py-2">
                  <img src={postgreSQLLogo} alt="PostgreSQL" className="h-6 object-contain" />
                  <span className="text-gray-900 font-medium">PostgreSQL</span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg px-3 py-2">
                  <img src={fabricLogo} alt="Microsoft Fabric" className="h-6 object-contain" />
                  <span className="text-gray-900 font-medium">Microsoft Fabric</span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg px-3 py-2">
                  <img src={n8nLogo} alt="n8n" className="h-6 object-contain" />
                  <span className="text-gray-900 font-medium">n8n</span>
                </div>                
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <BarChart3 className="size-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Business Intelligence Solutions
            </h3>
            <p className="text-gray-700 mb-6">
              Transform your data warehouse into actionable insights with custom BI solutions. 
              Empower management and operations with real-time dashboards and analytics for data-driven decision making.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <TrendingUp className="size-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Interactive dashboards and visualizations</span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="size-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Real-time operational and strategic insights</span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="size-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Custom reporting for all organizational levels</span>
              </li>
            </ul>
            <div className="border-t border-purple-200 pt-4">
              <p className="text-sm font-semibold text-gray-900 mb-3">Products We Support:</p>
              <div className="space-y-2">
                <div className="flex items-center gap-3 bg-white rounded-lg px-3 py-2">
                  <img src={PBILogo} alt="Power BI" className="h-6 object-contain" />
                  <span className="text-gray-900 font-medium">Power BI</span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg px-3 py-2">
                  <img src={supersetLogo} alt="Apache Superset" className="h-6 object-contain" />
                  <span className="text-gray-900 font-medium">Apache Superset</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service 3 - ERP Implementation */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Settings className="size-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ERP Implementation
            </h3>
            <p className="text-gray-700 mb-6">
              Using best practice methodology, we guide you from blueprint to GO LIVE. 
              Our structured approach ensures successful ERP deployment tailored to your business needs.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <Zap className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">End-to-end implementation from blueprint to GO LIVE</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Best practice methodology</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Training and change management support</span>
              </li>
            </ul>
            <div className="border-t border-green-200 pt-4">
              <p className="text-sm font-semibold text-gray-900 mb-3">Products We Support:</p>
              <div className="space-y-2">
                <div className="flex items-center gap-3 bg-white rounded-lg px-3 py-2">
                  <img src={odooLogo} alt="Odoo" className="h-6 object-contain" />
                  <span className="text-gray-900 font-medium">Odoo</span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg px-3 py-2">
                  <img src={d365Logo} alt="Microsoft Dynamics 365" className="h-6 object-contain" />
                  <span className="text-gray-900 font-medium">Microsoft D365 Finance & Operation</span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg px-3 py-2">
                  <img src={d365bcLogo} alt="Microsoft Dynamics 365 BC" className="h-6 object-contain" />
                  <span className="text-gray-900 font-medium">Microsoft D365 Business Central</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service 4 - ERP Support */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Headphones className="size-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ERP Support & Enhancement
            </h3>
            <p className="text-gray-700 mb-6">
              Provide ongoing support for implemented ERP systems and deliver custom enhancements 
              to fulfill specific business process requirements.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <TrendingUp className="size-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Ongoing support for existing ERP systems</span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="size-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Custom enhancements for specific business needs</span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="size-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Issue resolution and troubleshooting</span>
              </li>
            </ul>
            <div className="border-t border-orange-200 pt-4">
              <p className="text-sm font-semibold text-gray-900 mb-3">Products We Support:</p>
              <div className="space-y-2">
                <div className="flex items-center gap-3 bg-white rounded-lg px-3 py-2">
                  <img src={odooLogo} alt="Odoo" className="h-6 object-contain" />
                  <span className="text-gray-900 font-medium">Odoo</span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg px-3 py-2">
                  <img src={dynamicsAXLogo} alt="Microsoft Dynamics AX" className="h-6 object-contain" />
                  <span className="text-gray-900 font-medium">Microsoft Dynamics AX (all version)</span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg px-3 py-2">
                  <img src={dynamicsNAVLogo} alt="Microsoft Dynamics NAV" className="h-6 object-contain" />
                  <span className="text-gray-900 font-medium">Microsoft Dynamics NAV</span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg px-3 py-2">
                  <img src={d365Logo} alt="Microsoft Dynamics 365" className="h-6 object-contain" />
                  <span className="text-gray-900 font-medium">Microsoft D365 Finance & Operation</span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg px-3 py-2">
                  <img src={d365bcLogo} alt="Microsoft Dynamics 365" className="h-6 object-contain" />
                  <span className="text-gray-900 font-medium">Microsoft D365 Business Central</span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg px-3 py-2">
                  <img src={sapLogo} alt="SAP S/4HANA" className="h-6 object-contain" />
                  <span className="text-gray-900 font-medium">SAP S/4HANA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1506399441630-774ef431470f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGludGVsbGlnZW5jZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyNzcyMTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Business Intelligence Technology"
            className="rounded-2xl shadow-lg w-full"
          />
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              End-to-End Data Solutions
            </h3>
            <p className="text-gray-700 mb-4">
              From initial data assessment to full-scale implementation, we guide you through every step 
              of your data transformation journey.
            </p>
            <p className="text-gray-700">
              Our proven methodology ensures seamless integration, minimal disruption, and maximum ROI 
              for your data infrastructure investments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}