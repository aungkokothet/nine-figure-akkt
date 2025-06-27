export const Contact = () => {
  const contact = [
    {
      content: "+959 782058583",
      image: "/phone.png",
    },
    {
      content: "zaw.min.tun@9figures.net",
      image: "/mail.png",
    },
    {
      content: "www.9figures.net",
      image: "/website.png",
    },
  ];
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p className="mb-2">
        Ready to elevate your tech startup or transform your corporate
        operations?
      </p>
      <p className="mb-8">
        Reach out to us today to discuss your needs. Let’s build a bright future
        together.
      </p>
      <div className="grid grid-cols-4">
        {contact.map((item) => (
          <div className="flex gap-2 items-center" key={item.content}>
            <img src={item.image} alt={item.content} />
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
