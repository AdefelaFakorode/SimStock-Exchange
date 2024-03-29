import { useState } from "react"

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
}

function LSI_NavBar() {
  return (
    <div className="w-full h-[80px] bg-background flex justify-start align-middle">
      <div>
      <button className="bg-primary hover:bg-blue-700 text-text font-bold py-2 px-4 rounded">
  Home
</button>
      </div>
    </div>
  )
}

export default LSI_NavBar
