import Container from "./common/Container";

const Header = () => {
  return (
    <header>
      <nav className="pt-3 pb-5">
        <Container className="">
          <div className="flex justify-between">
            <div className="flex gap-4 items-center">
              <div className="hamburger flex flex-col justify-center">
                <span className="block w-4 h-0.5 bg-deep-space-sparkle rounded-3xl mb-1"></span>
                <span className="block w-4 h-0.5 bg-deep-space-sparkle rounded-3xl mb-1"></span>
                <span className="block w-4 h-0.5 bg-deep-space-sparkle rounded-3xl"></span>
              </div>
              <span className="text-2xl font-bold text-[#2a313d]">
                aosphere
              </span>
            </div>
            <div className="flex gap-10 items-center">
              <span className="text-deep-space-sparkle text-lg leading-[100%]">
                SUPPORT
              </span>
              <span className="text-deep-space-sparkle text-lg leading-[100%]">
                MORE SERVICES
              </span>
              <img src="/assets/user.png" width={60} height={30} alt="user" />
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
