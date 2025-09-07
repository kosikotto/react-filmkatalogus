import { Link } from "react-router-dom";
import "../../css/Header.css"

function Header() {
  let checkIfMenuOpen = false;

  function ClickedToOpenMenu() {
        let headerNav = document.getElementById("header-nav");
        headerNav.classList.toggle("visible")

        let hamburgerFirstLine = document.getElementById("first");
        hamburgerFirstLine.classList.toggle("clicked-1");
        let hamburgerSecondLine = document.getElementById("middle");
        hamburgerSecondLine.classList.toggle("clicked-2");
        let hamburgerThirdLine = document.getElementById("last");
        hamburgerThirdLine.classList.toggle("clicked-3");

        !checkIfMenuOpen ? checkIfMenuOpen = true : checkIfMenuOpen = false
    }

  function ClickToCloseMenu() {
    let headerNav = document.getElementById("header-nav");
    headerNav.classList.remove("visible")

    let hamburgerFirstLine = document.getElementById("first");
    hamburgerFirstLine.classList.remove("clicked-1");
    let hamburgerSecondLine = document.getElementById("middle");
    hamburgerSecondLine.classList.remove("clicked-2");
    let hamburgerThirdLine = document.getElementById("last");
    hamburgerThirdLine.classList.remove("clicked-3");

    checkIfMenuOpen = false;
  }

    addEventListener("scroll", () => {
      if (checkIfMenuOpen) {
        ClickToCloseMenu();
      }
    })

  return (
    <header id="header" className="sticky bg-gradient-to-r from-cyan-950 to-cyan-900 bg-cyan-950 min-h-16 w-full z-2 transition-all sm:flex-row sm:h-fit sm:flex sm:justify-around">
      <div className="w-full flex justify-between items-center sm:w-fit">
        <div id="main-title" onClick={ClickToCloseMenu}>
          <Link to="/filmkatalogus">Filmkatalógus</Link>
        </div>
        <div className="relative h-9 w-10 cursor-pointer transition-all sm:hidden sm:hover:*:bg-cyan-600 active:*:bg-cyan-800"
          onClick={ClickedToOpenMenu}>
            <div id="first" className="absolute w-full h-1 bg-cyan-400 shadow-black shadow-md top-0 rounded-full transition-all"></div>
            <div id="middle" className="absolute w-full h-1 bg-cyan-400 shadow-black shadow-md top-1/2 rounded-full transition-all"></div>
            <div id="last" className="absolute w-full h-1 bg-cyan-400 shadow-black shadow-md top-full rounded-full transition-all"></div>
        </div>
      </div>

      <nav id="header-nav" className="absolute flex flex-col gap-10 items-center left-[-100%] transition-all sm:flex-row sm:relative sm:left-0 sm:gap-20">
        <h2 className="nav-links" onClick={ClickToCloseMenu}>
          <Link to="/favorites">Kedvencek</Link>
        </h2>
        <h2 className="nav-links" onClick={ClickToCloseMenu}>
          <Link to="/watched">Láttam</Link>
        </h2>
      </nav>
    </header>
  );
}

export default Header;