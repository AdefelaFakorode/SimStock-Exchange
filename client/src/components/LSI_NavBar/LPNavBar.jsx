function LPNavBar() {
  return (
    <div className="w-full h-[80px] bg-background flex items-center justify-end">
      <div className=" px-5 flex items-center space-x-6">
        <button className="bg-primary hover:bg-[#7f60a3] text-text font-bold py-1 px-3 rounded">
          Sign Up
        </button>

        <button className="bg-primary hover:bg-[#7f60a3] text-text font-bold py-1 px-3 rounded">
          Login
        </button>
      </div>
    </div>
  );
}

export default LPNavBar;
