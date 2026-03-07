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

export function PoweredBy() {
  const products = [
    { name: "Power BI", logo: PBILogo },
    { name: "Apache Superset", logo: supersetLogo },
    { name: "Odoo", logo: odooLogo },
    { name: "Microsoft Dynamics 365 Finance & Operation", logo: d365Logo },
    { name: "Microsoft Dynamics AX", logo: dynamicsAXLogo },
    { name: "Microsoft Dynamics NAV", logo: dynamicsNAVLogo },
    { name: "SAP S/4HANA", logo: sapLogo },
    { name: "SQL Server Integration Service", logo: SQLLogo },
    { name: "PostgreSQL", logo: postgreSQLLogo },
    { name: "n8n", logo: n8nLogo },
    { name: "Microsoft Fabric", logo: fabricLogo },
    { name: "Microsoft D365 Business Central", logo: d365bcLogo },
  ];

  // Duplicate the products array for seamless loop
  const duplicatedProducts = [...products, ...products];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Powered By</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We partner with industry-leading platforms to deliver exceptional solutions
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {duplicatedProducts.map((product, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
              style={{ width: "200px", height: "120px" }}
            >
              <img
                src={product.logo}
                alt={product.name}
                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
