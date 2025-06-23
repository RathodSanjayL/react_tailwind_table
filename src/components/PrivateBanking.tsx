import Container from "./common/Container";

const PrivateBanking = () => {
  return (
    <Container className="bg-[#F8F9FA] py-4">
      <div className="flex justify-between">
        <span className="text-2xl text-deep-space-sparkle font-medium">
          Private Banking By BRL
        </span>
        <div className="flex gap-4">
          <button className="border border-[#d1d1d1] text-[#5b6e7d] rounded-sm py-2 px-3 bg-white font-medium cursor-pointer">
            Product Home
          </button>
          <button className="border border-[#d1d1d1] text-[#5b6e7d] rounded-sm py-2 px-3 bg-white font-medium cursor-pointer">
            What's new?
          </button>
          <button className="border border-[#d1d1d1] text-[#5b6e7d] rounded-sm py-2 px-3 bg-white font-medium flex gap-2 items-center cursor-pointer">
            Function
            <img
              src="/assets/button-dropdown-icon.png"
              width={10}
              height={10}
              alt="dropdown"
            />
          </button>
        </div>
      </div>
      <span className="text-xl font-bold text-deep-space-sparkle">
        Austria(EEA)
      </span>
      <div className="h-70" />
      <button className="inline-block bg-[#5b6e7d] text-white p-2 rounded-sm font-medium mr-4">
        Prospect
      </button>
      <button className="inline-block border border-[#d1d1d1] bg-white p-2 rounded-sm text-[#5b6e7d]">
        Customer
      </button>
    </Container>
  );
};

export default PrivateBanking;
