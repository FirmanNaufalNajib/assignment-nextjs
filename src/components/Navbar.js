import Link from "next/link"

export default function Navbar() {


  return (
    <div className="navbar">
      <Link href="/" className="navbar-link">Beranda|</Link>
      <Link href="/makanan" className="navbar-link">List Makanan|</Link>
      <Link href="/makanan/create" className="navbar-link"><button className="navbar-button">Buat Makanan</button></Link> 
    </div>
  )
} 