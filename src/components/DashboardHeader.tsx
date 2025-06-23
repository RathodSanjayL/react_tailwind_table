import Container from "./common/Container";

const DashboardHeader = () => {
  return (
    <Container className="mt-8">
      <div className="flex justify-between items-center mb-11">
        <div className="flex items-center gap-12 w-full">          
          <div className="flex items-center gap-1">
            <span className="text-base text-onyx font-medium">
              Solicitation
            </span>
            <div className="border-2 border-[#ced4da] rounded px-5 py-2 text-base text-black flex items-center gap-4">
              <span>Active + Passive</span>
              <img
                src="/assets/dropdown.png"
                width={14}
                height={14}
                alt="dropdown"
              />
            </div>
          </div>
          <div className="flex items-center gap-1 max-w-48 w-full">
            <span className="text-base text-onyx font-medium">Client is</span>
            <div className="border-2 border-[#ced4da] rounded px-5 py-2 text-base text-black flex items-center gap-4">
              <span>Qualified </span>
              <img
                src="/assets/dropdown.png"
                width={14}
                height={14}
                alt="dropdown"
              />
            </div>
          </div>
          <button className="flex items-center justify-center text-sm border-2 px-4 py-2.5 rounded border-[#C4C4C4] gap-4">
            <img
              src="/assets/collapse-icon.svg"
              width={20}
              height={22}
              alt=""
            />
            <span className="text-xl text-onyx leading-[100%]">
              Collapse comments
            </span>
          </button>
        </div>
        <img src="/assets/multi-icon.svg" width={300} height={52} alt="" />
      </div>
      <div className="grid grid-cols-4 gap-1.5 text-base leading-[100%] text-onyx">
        <div />
        <div className="px-3.5 py-4 font-bold bg-silver-sand">Abroad</div>
        <div className="px-3.5 py-4 font-bold bg-silver-sand">Cross-border</div>
        <div className="px-3.5 py-4 font-bold bg-silver-sand">Bank</div>
        <div className="bg-[#E6E8EB] basis-1/4 py-2 px-3">
          <div className="flex items-center gap-1">
            <div className="border border-[#ced4da] rounded px-5 py-1.5 text-base text-black flex items-center justify-between bg-white w-full">
              <span className="text-base leading-[100%]">
                Select Activity...
              </span>
              <img
                src="/assets/dropdown.png"
                width={14}
                height={14}
                alt="dropdown"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-1.5">
          <div className="px-3.5 py-4 font-bold bg-[#E6E8EB] w-full">
            Active
          </div>
          <div className="px-3.5 py-4 font-bold bg-[#E6E8EB] w-full">
            Passive
          </div>
        </div>
        <div className="flex gap-1.5">
          <div className="px-3.5 py-4 font-bold bg-[#E6E8EB] w-full">
            Active
          </div>
          <div className="px-3.5 py-4 font-bold bg-[#E6E8EB] w-full">
            Passive
          </div>
        </div>
        <div className="flex gap-1.5">
          <div className="px-3.5 py-4 font-bold bg-[#E6E8EB] w-full">
            Active
          </div>
          <div className="px-3.5 py-4 font-bold bg-[#E6E8EB] w-full">
            Passive
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DashboardHeader;
