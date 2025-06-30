export const Portfolio = () => {
  return (
    <div className="relative p-8 bg-[url('/portfolio.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>
      <div className="relative z-10 text-white">
        <h1 className="text-2xl font-bold mb-5">Portfolio</h1>

        <p className="mb-5 text-sm">
          Our team has a proven track record of successful projects. We have
          helped various companies across different industries achieve their
          business goals. We have a strong understanding of the business
          ecosystems and its unique challenges. We are passionate about helping
          businesses grow and thrive.
        </p>
        <p className="mb-5 text-sm">
          We’re already working with 30 businesses inside the Genesis Value Network—4 in full-loop engagement, 12 actively progressing through our studio program, and 14 in early-stage alignment. Each business is part of our incubation system to transform real operations into app-powered economies, driven by structured growth, capital logic, and execution-first rituals. Beyond Genesis, we also partner with like-minded networks to help groups of companies build their own app studios—enabling them to launch apps that directly accelerate their business growth.
        </p>
      </div>
    </div>
  );
};
