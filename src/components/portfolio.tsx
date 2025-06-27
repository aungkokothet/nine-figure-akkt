export const Portfolio = () => {
  return (
    <div className="relative p-8 bg-[url('/portfolio.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>
      <div className="relative z-10 text-white">
        <h1 className="text-2xl font-bold mb-5">Portfolio</h1>

        <p className="mb-5 text-sm">
          Our team has a proven track record of successful projects. We have
          helped various companies across different industries achieve their
          business goals. We have a strong understanding of the startup
          ecosystem and its unique challenges. We are passionate about helping
          businesses grow and thrive.
        </p>
        <p className="mb-5 text-sm">
          We have partnered with diverse clients, from event management
          platforms like EventFlow (Thailand) to e-commerce giants like
          Shopeedoo (Singapore) We've also worked with leading app providers in
          Myanmar, BIT (Myanmar) and healthtech companies like Y-Care (Myanmar).
        </p>
      </div>
    </div>
  );
};
