const Form = () => {
  return (
    <form action="">
      <div>
        <label htmlFor="departamento">Departamento</label>
        <select name="departamento" id="">
          <option value=""></option>
          <option value="bogota">Bogotá</option>
          <option value="antioquia">Antioquia</option>
          <option value="atlantico">Atlántico</option>
          <option value="caldas">Caldas</option>
          <option value="cesar">Cesar</option>
          <option value="santander">Santander</option>
          <option value="magdalena">Magdalena</option>
          <option value="meta">Meta</option>
          <option value="tolima">Tolima</option>
        </select>
      </div>

      <div>
        <label htmlFor="ciudad">Ciudad</label>
        <select name="ciudad" id="">
          <option value=""></option>
          <option value="bogota">Bogotá</option>
          <option value="medellin">Medellin</option>
          <option value="barranquilla">Barranquilla</option>
          <option value="manizales">Manizales</option>
          <option value="valledupar">Valledupar</option>
          <option value="bucaramanga">Bucaramanga</option>
          <option value="santa marta">Santa Marta</option>
          <option value="Villavicencio">Villavicencio</option>
        <option value="ibague">Ibagué</option>
        </select>
      </div>

      <div>
        <label htmlFor="estadoproyecto">Estado del Proyecto</label>
        <select name="estadoproyecto" id="">
          <option value="">Seleccione...</option>
          <option value="sobreplanos">Sobre planos</option>
          <option value="lanzamiento">En lanzamiento</option>
          <option value="entrga">Por entregar</option>
          <option value="construccion">En construcción</option>
      </select>

      </div>
    </form>
  );
};
export default Form;
