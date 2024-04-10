import SimStockLogo from "../assets/SimStockLogo.png";
function LandingPage() {
  return (
    <section className="min-h-screen bg-white">
      <div className="container mx-auto flex flex-col items-center justify-center lg:flex-row-reverse mt-[100px]">
        <div className="xl:ml-[100px] lg:ml-8">
          {/*Image*/}
          <img src={SimStockLogo} alt="PP" className="w-[400px] xl:w-[600px]" />
        </div>

        <div className="mt-[30px]">
          {/*Title*/}
          <h1 className="text-5xl font-semibold xl:text-[80px] ">
            SimStock Exchange
          </h1>
          {/*Text*/}
          <p className="mt-[10px] xl:text-[20px] ">
            All-in-one Platform that helps investors practice their trading
            skills.
          </p>
          {/*Button*/}
          <button className=" xl:mt-[20px] xl:text-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold xl:py-5 xl:px-40 rounded">
          Open an account →
          </button>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
