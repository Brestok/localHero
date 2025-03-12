import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">LocalHero</h1>
        <nav>
          <Link to="/" className="mr-4">
            Главная
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
