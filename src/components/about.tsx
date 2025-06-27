export const About = () => {
  const cardsData = [
    {
      title: "Strategic Guidance",
      description:
        "We specialize in providing strategic guidance, cutting-edge technology implementation, and comprehensive business solutions.",
    },
    {
      title: "Client-Centric Approach",
      description:
        "With a client-centric approach, we ensure your vision and goals are at the heart of our efforts, providing the resources and direction needed to succeed in a competitive market",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 p-10">
      <div className="">
        <div className="mb-5">
          <h1 className="text-xl font-bold">About Us</h1>
          <p>
            As startup veterans, we are a pivotal force in the startup
            ecosystems of Singapore, Thailand, and Myanmar. With a proven track
            record of organizing impactful events in Yangon and beyond, we
            connect startups with tech industry leaders, delivering tangible
            results with precision and excellence.
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
