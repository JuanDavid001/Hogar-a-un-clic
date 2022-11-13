import img1 from "./assets/250.png";
const Card = () => {
  return (
    <div className="card">
      <div className="name-container">
        <p className="name">Ciudadela 20 de Julio</p>
        <p className="location">Medellin - Antioquia</p>
      </div>
      <div className="img-container">
        <img src={img1} alt="" />
      </div>
      <div className="price-container">
        <p>Desde</p>
        <span className="price">$ 80.000.000</span>
      </div>
      <div className="info-container">
        <p>Alcobas: 2</p>
        <p>Baños: 1</p>
        <p>35.50 m2</p>
      </div>
    </div>
  );
};

export default Card;
