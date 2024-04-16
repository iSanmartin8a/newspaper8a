import classes from "./Title.module.scss";

const Title = () => {
  return (
    <div className={classes.container}>
      <p>La nueva imagen del Desarrollo Web</p>
      <p>
        {/* Alejandro Sanmartín lidera la vanguardia tecnológica en el mundo digital */}
        {/* El desarrollador zaragozano Alejandro Sanmartín ve con optimismo el futuro cercano */}
        La ambición del programador zaragozano no tiene límites
      </p>
    </div>
  );
};

export default Title;
