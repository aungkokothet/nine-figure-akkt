export const Service = () => {
  const services = [
    {
      title: "Business Analysis",
      description:
        "Market research, SWOT, Competitor & customer analysis, Business model evaluation",
      icon: "/analysis.png",
    },
    {
      title: "Strategic Consultancy",
      description:
        "Business planning, Market entry & growth strategies, Competitive & digital strategy",
      icon: "/strategic.png",
    },
    {
      title: "Software Product Development",
      description:
        "Product design, UI/UX, Architecture design, MVP development, Support & Maintenance",
      icon: "/development.png",
    },
    {
      title: "Go-to-Market",
      description:
        "Identify target market, Unique value proposition, Brand positioning, Select marketing channels",
      icon: "/gotomarket.png",
    },
    {
      title: "Fundraising",
      description:
        "Financial modeling, Fundraising strategy, Investors relation and Legal",
      icon: "/fundraising.png",
    },
    {
      title: "Operational Efficiency",
      description: "Resource management, Performance metrics and KPIs",
      icon: "/operational.png",
    },
  ];
  return (
    <div className="bg-black  text-white px-10 py-16">
      <h1 className="text-xl font-bold">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {services.map((s) => (
          <div className="" key={s.title}>
            <img src={s.icon} alt={s.title} className="w-[38px] mb-5" />
            <h1 className="text-[24px] font-bold mb-5">{s.title}</h1>
            <p className="te">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
