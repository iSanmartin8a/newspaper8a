import classes from "./Studies.module.scss";
import child from "./../../assets/imgs/child.jpeg";

const Studies = () => {
  return (
    <div className={classes.container}>
      <img src={child} alt="Alejandro Sanmartín de niño" className={classes.container_image} />
      <p>
        Nuestro protagonista, Alejandro Sanmartín, nació un 23 de Mayo de 1998
        (así es, es Géminis y no por ello es mala persona) en Zaragoza, España,
        y es ahí donde se mantuvo hasta el día presente. En el colegio que le
        vió crecer continuó sus estudios con un Grado Superior en{" "}
        <strong>Desarrollo de Aplicaciones Multiplataforma</strong>. Ésto
        sucedió en
        <strong> Salesianos Zaragoza</strong>, donde también cursó el
        Bachillerato Tecnológico. Tras esto, Alejandro pudo realizar una
        prácticas en <strong>Nervia</strong> donde tras un dubitativo paso por
        un proyecto de Java, se sumergió en otro usando el lenguaje de
        programación <i>C#</i> a través de la plataforma <i>.NET</i>. Allí se
        encargó de manera bastante independiente de un portal web que recibía
        datos a través de archivos <i>xlsx</i> y se reflejaban en distintas
        gráficas a través de <strong>Telerik Charts</strong>. Nuestro
        protagonista sentía que no era el momento de asentarse en una posición,
        por lo que se embarcó en la carrera de <strong>Economía</strong> en la
        <strong> Universidad de Zaragoza</strong>. Tras cinco años superó esta
        etapa, pero en pos de aprovechar al máximo el tiempo, en su último año
        compaginó la carrera con el{" "}
        <strong>Grado Superior en Desarrollo Web</strong>. Esta vez lo realizó
        en <strong>Los Enlaces</strong>. Éste hecho supuso un cambio de 180
        grados en la carrera de Alejandro, ya que encontró lo que realmente le
        apasionaba, era el momento de desarrollarse como{" "}
        <strong>Programador Web</strong>. Esta última etapa estudiantil condujo
        a Alejandro a una prácticas remuneradas hechas en NTT Data, donde
        posteriormente se ampliaron gracias a una beca colaborativa con FEUZ. En
        definitiva, Alejandro estaría en el equipo de desarrollo FrontEnd
        durante algo más de un año.
      </p>
    </div>
  );
};

export default Studies;
