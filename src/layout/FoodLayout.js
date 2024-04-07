import Navbar from "@/components/Navbar";


export default function FoodLayout({ children }) {
  return (
    <div className="layout"> 
      <header className="header text-3xl font-bold">
        FOOD
      <Navbar/>
      </header>
      
      {children}
    </div>
  );
}
