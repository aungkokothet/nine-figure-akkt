export const BusinessAnalysis = () => {
  const services = [
    {
      title: "Studio Program - Growth Journey Framework",
      description:
        "A step-by-step roadmap (0F to 4F) that helps businesses evolve through clear stages—from early traction to app-powered growth.",
    },
    {
      title: "Studio Program - Toolkits & Templates",
      description:
        "Battle-tested tools for business clarity, stakeholder listening, and execution—used in weekly cycles to turn insights into real progress.",
    },
    {
      title: "Studio Program - F.L.O.W (Founder - Business Fit)",
      description:
        "A structured reflection process that ensures the business grows in sync with what the founder truly cares about—sustainably and intentionally.",
    },
    {
      title: "Studio Program - Capital Pull Mechanisms",
      description:
        "We embed capital logic (CUE, IOUs, Pods) into your growth journey—so you can fund progress through execution, not speculation.",
    },
  ];
  return (
    <div className="flex">
      <div className="w-2/3">
        <h1 className="text-xl font-bold mb-4">9 Figures Studio Program Components </h1>
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
    </div>
  );
};
