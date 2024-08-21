import { BsSearchHeart } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { BsFillBagHeartFill } from "react-icons/bs";
import "../Style/Navbar.css"
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
    <marquee className="bg-dark text-white pt-2 pb-2">The standard delivery time is 3-4 business days.</marquee>
<div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="#"><BsSearchHeart style={{height:"25px" , width:"30px"}}/></a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active snm" aria-current="page" href="#">SANAM JUNG FRAGRENCE</a>
        </li>
      </ul>
      <form className="" >
      <Link to={"/register"}>  <FaUserTie className=" me-2 text-dark" style={{height:"25px" , width:"30px"}} /></Link>
<Link to={'/cart'}><BsFillBagHeartFill className="text-dark" style={{height:"25px" , width:"30px"}}/></Link>
      </form>
    </div>
  </div>
</nav>

</div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item hom">
          <Link className="nav-link active element" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active element" to="/product">Perfumes</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active element" to="/perfumwax">Perfume Wax</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link active element" href="#">Bundles</a>
        </li>
     
        <li className="nav-item">
          <a className="nav-link active element" href="#">Gift Box</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active element" href="#">Sented Candles</a>
        </li>
     
     
      </ul>
    </div>
  </div>
</nav>


    </div>
  )
}

export default Navbar
