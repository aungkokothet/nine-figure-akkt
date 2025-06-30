export const About = () => {
  const cardsData = [
    {
      title: "Strategic Architecture",
      description:
        "We specialize in designing growth systems—combining strategic clarity, app development protocols, and capital efficiency models into one studio framework.",
    },
    {
      title: "Founder-Driven by Design",
      description:
        "Our programs are built around your vision. We support founders who are ready to take action—with the rituals, tools, and capital logic to move from idea to embedded business.",
    },
     {
      title: "What We Deliver",
      description:
        "At 9Figures, our studio program gives each business a structured path to grow: clear milestones, focused rituals, execution tools, and capital logic—all designed to turn ambition into app-powered traction. Every 9Figures Studio Program embeds six core capabilities—so businesses don’t just grow, they evolve into app-powered economies..",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 p-10">
      <div className="">
        <div className="mb-5">
          <h1 className="text-xl font-bold">About Us</h1>
          <p>
           At 9Figures, we design incubation systems for app-powered businesses across Southeast Asia. From Singapore to Myanmar, we’ve helped founders transform their ambition into real traction—through studio programs, peer rituals, and growth architectures that scale. We don’t just consult. We build the conditions where businesses grow together and economies emerge from the ground up.
          </p>
        </div>
        {cardsData.map((c) => (
          <div
            className="mb-5 bg-[#3333330F] px-[22px] py-[33px] rounded-lg"
            key={c.title}
          >
            <h1 className="text-xl font-bold">{c.title}</h1>
            <p>{c.description}</p>
          </div>
        ))}
      </div>
      <div className="lg:flex lg:justify-center">
        <img
          src="/about-photo.png"
          alt="about-photo"
          className="rounded-lg md:w-[610px] md:h-[542px]"
        />
      </div>
    </div>
  );
};
