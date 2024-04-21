import SimStockLogo from "../assets/SimStockLogo.png";

function LandingPage() {
  return (
    <section className="min-h-screen bg-background">
      <div className="container mx-auto flex flex-col items-center justify-center lg:flex-row-reverse mt-[100px]">
        <div className="xl:ml-[100px] lg:ml-8">
          {/*Image*/}
          <img src={SimStockLogo} alt="PP" className="w-[400px] xl:w-[600px]" />
        </div>

        <div className=" flex flex-col items-center mt-[30px]">
          {/*Title*/}
          <h1 className="font-sans font-semibold text-white text-5xl xl:text-[72px]">
          SIMSTOCK EXCHANGE
          </h1>
          {/*Text*/}
          <p className="font-sans font-normal text-text mt-[10px] xl:text-[20px] ">
            All-in-one Platform that helps investors <br /> practice their trading
            skills.
          </p>
          {/*Button*/}
          <button className="font-sans font-medium text-black xl:mt-[20px] xl:text-2xl bg-buttonColor xl:py-5 xl:px-40 rounded">
          Open an account →
          </button>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
