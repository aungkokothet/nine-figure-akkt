import { BusinessAnalysis } from "./business-analysis";

export const Services = () => {
  const menus = [
    {
      title: "Business Analysis",
    },
    {
      title: "Strategic Consultancy",
    },
    {
      title: "Software Product Development",
    },
    {
      title: "Go-to-Market",
    },
    {
      title: "FundraisingOperational Efficiency",
    },
  ];
  return (
    <div className="flex p-10">
      <div className="w-1/4">
        {menus.map((menu) => (
          <div key={menu.title} className="mb-2" id={menu.title}>
            {menu.title}
          </div>
        ))}
      </div>
      <div className="w-3/4">
        {/* Business Analysis */}
        <BusinessAnalysis />
        
      </div>
    </div>
  );
};
