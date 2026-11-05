const ServiceContent = ({ services, activeItem }) => {
  const service = services[activeItem];

  return (
    <div className=" flex flex-row gap-10 h-80 mt-auto shadow-inner shadow-gray-600 justify-center items-center rounded-l-2xl rounded-r-md">
      <div>
        <img
          src={service.img}
          alt={service.title}
          className="w-full max-w-[350px] h-80 rounded-l-2xl "
        />
      </div>
      <div className="mb-32">
        <h1 className="text-white font-semibold font-poppins text-[30px] leading-[50px] mb-6">
          {service.title}
        </h1>

        <p className="text-dimWhite text-[18px] font-mono leading-[30px] max-w-[500px]">
          {service.content}
        </p>
      </div>
    </div>
  );
};

export default ServiceContent;
