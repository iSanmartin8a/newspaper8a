import classes from "./Header.module.scss";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/es";
import Break from "../Break/Break";

const Header = () => {
  dayjs.locale("es");
  const [date] = useState(new Date());
  const formattedDate = dayjs(date).format("dddd, D [de] MMMM, YYYY");

  const [location, setLocation] = useState("Zaragoza - España");

  useEffect(() => {
    fetch("https://ipinfo.io/json")
      .then((response) => response.json())
      .then((data) => {
        const city = data.city;
        const country = data.country;
        setLocation(
          `${city ? city : "Zaragoza"} - ${country ? country : "España"}`
        );
      })
      .catch((error) =>
        console.warn("Error al obtener la ubicación del usuario:", error)
      );
  }, []);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.container_price}>
          <p>Precio:</p>
          <p>Un Sol de Oro</p>
        </div>
        <h1 className={classes.container_header}>NEWSPAPER<span>8a</span></h1>
        <div className={classes.container_date}>
          <p>{formattedDate}</p>
          <p>{location}</p>
        </div>
      </div>
      <Break />
    </>
  );
};

export default Header;
