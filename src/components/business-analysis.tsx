export const BusinessAnalysis = () => {
  const services = [
    {
      title: "Market Research",
      description:
        "Comprehensive research to understand market trends, customer needs, and competitive landscapes.",
    },
    {
      title: "SWOT Analysis",
      description:
        "Identifying strengths, weaknesses, opportunities, and threats for strategic planning.",
    },
    {
      title: "Business Model Evaluation",
      description:
        "Assessing the viability and scalability of business models for long-term success.",
    },
    {
      title: "Competitor Analysis",
      description:
        "Analyzing competitors to understand their strategies and market positioning.",
    },
  ];
  return (
    <div className="flex">
      <div className="w-2/3">
        {services.map((service, index) => (
          <div className="flex gap-2 mb-2">
            <div className="">
              <h1 className="p-4 flex justify-center items-center  bg-black text-white rounded-lg">
                {index + 1}
              </h1>
            </div>
            <div className="">
              <h1 className="text-xl font-bold mb-2">{service.title}</h1>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-1.5/3 flex justify-end">
        <img
          src="/services.png"
          className="w-[300px] h-[200px] bg-center"
          alt="services"
        />
      </div>
    </div>
  );
};
