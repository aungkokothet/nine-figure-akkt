export const Header = () => {
  return (
    <div className="relative bg-[url(/background.png)] bg-cover text-white">
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>
      <div className="relative z-10 p-10">
        <div className="flex items-center gap-3">
          <div>
            <svg
              width="38"
              height="48"
              viewBox="0 0 38 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.9983 36.6674V47.5005L3.8147e-05 36.527V25.6953L18.9983 36.6674Z"
                fill="white"
              />
              <path
                d="M10.4938 15.745L1.11981 10.3284L18.9983 0V10.8328L10.4938 15.745Z"
                fill="white"
              />
              <path
                d="M26.3818 18.9795V29.8158L18.9985 34.0796V23.2481L26.3818 18.9795Z"
                fill="white"
              />
              <path
                d="M3.8147e-05 12.27L18.9983 23.248V34.0795L3.8147e-05 23.106V12.27Z"
                fill="white"
              />
              <path
                d="M36.8687 10.3221L27.5508 15.7703L18.9986 10.8328V0L36.8687 10.3221Z"
                fill="white"
              />
              <path
                d="M28.6228 31.1103V17.68L38 12.2651V36.5265L18.9986 47.5V36.6669L28.6228 31.1103Z"
                fill="white"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold italic">9 figures</h1>
        </div>
        <div className=" my-32">
          <h1 className="text-[60px] font-bold uppercase">9 Figures</h1>
          <h1 className="text-[60px] font-bold uppercase">Incubation Systems</h1>
          <p className="text-xl">Transforming Ambitious Businesses into App-Powered Economies</p>
          <p className="text-xl"> <br />9F: Unicorn / Legacy Status</p>
          <p className="text-xl">8F: Market Leadership</p>
          <p className="text-xl">7F: Ecosystem-Backed Scaling</p>  
          <p className="text-xl">6F: Serious Growth </p>
          <p className="text-xl">5F: Scale Begins</p> 
          <p className="text-xl">4F: Solid Business Foundation </p>
          <p className="text-xl">3F: Building Traction </p>
          <p className="text-xl">2F: Early Customers </p>
          <p className="text-xl">1F: First Dollar Earned</p>
          <p className="text-xl">0F: Idea Stage </p>
        </div>
      </div>
    </div>
  );
};
