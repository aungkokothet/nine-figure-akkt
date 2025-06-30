export const Service = () => {
  const services = [
    {
      title: "Business Analysis",
      description:
        "Discovery tools to clarify your current traction and future opportunity. Market research, SWOT, Competitor & customer analysis, Business model evaluation.",
      icon: "/analysis.png",
    },
    {
      title: "Strategic Consultancy",
      description:
        "System design, not just advice. Business architecture, value network strategy, and adaptive growth pathways rooted in your context.",
      icon: "/strategic.png",
    },
    {
      title: "Software Product Development",
      description:
        "Apps that drive your business forward.From MVP scoping to UI/UX, technical architecture, and app maintenance—delivered using reDev, our method for building apps as scalable systems embedded in your business, not just tools beside it.",
      icon: "/development.png",
    },
    {
      title: "Go-to-Market",
      description:
        "We don't just help you launch—we help you pull. Target market clarity, value proposition design, brand anchoring, and distribution planning built for traction.",
      icon: "/gotomarket.png",
    },
    {
      title: "Fundraising",
      description:
        "Execution-first capital systems. We guide you through financial modeling and CUE (Capital Utilization Efficiency)—helping you raise only what you need, when you need it. We also support IOU-based financing, investor preparation, and systems for pulling capital sustainably through results—not hype.",
      icon: "/fundraising.png",
    },
    {
      title: "Operational Efficiency",
      description: "Make your business work smarter, not harder. We help you set up clear roles, team rhythms, and performance metrics—so your operations stay focused, efficient, and aligned with what truly matters.",
      icon: "/operational.png",
    },
  ];
  return (
    <div className="bg-black  text-white px-10 py-16">
      <h1 className="text-xl font-bold">Our Capabilities</h1>
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
