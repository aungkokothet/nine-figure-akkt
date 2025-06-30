import { BusinessAnalysis } from "./business-analysis";

export const Services = () => {
  const menus = [
    {
      title: "4F: Solid Business Foundation",
    },
    {
      title: "3F: Building Traction",
    },
    {
      title: "2F: Early Customers",
    },
    {
      title: "1F: First Dollar Earned",
    },
      {
      title: "0F: Idea Stage",
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
