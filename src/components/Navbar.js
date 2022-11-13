const Navbar = () => {
  return (
    <nav>
      <div className="container-logo">
        <a className="title" href="#" target="_blank" rel="noopener noreferrer">
          <span>
            <i class="fal fa-home-heart"></i>
          </span>
          HOGAR A UN CLIC
        </a>
      </div>
      <div className="container-menu">
        <ul>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              INICIO
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              ACERCA DE NOSOTROS
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              CONTACTENOS
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
