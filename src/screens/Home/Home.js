import { useState, useEffect } from "react";
import licoresApi from "../../APIrest/licoresApi";
import Card from "../../components/Home/Card/Card";
import { useParams } from "react-router-dom";

import "./Home.css";

function Home() {
  const [filter, setFilter] = useState("");
  const [licores, setLicores] = useState([]);
  const { e } = useParams();

  const getImages = () => {
    setTimeout(() => {
      const licores = licoresApi;
      setLicores(licores);
    }, 3000);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="principal_container">
      <h1>Filtra tus licores</h1>
      <input className="Input"
        id="filter"
        name="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />

      <div className="cards-container">
        {e
          ? licores
            .filter((licors) => licors.licor.includes(filter))
            .filter((licors) => licors.category === e)
            .map((licor, i) => (
              <Card
                id={i}
                key={i}
                name={licor.licor}
                image={licor.image}
                category={licor.category}
              />
            ))
          : licores
            .filter((licors) => licors.licor.includes(filter))
            .map((licor, i) => (
              <Card
                id={i}
                key={i}
                name={licor.licor}
                image={licor.image}
                category={licor.category}
              />
            ))}
      </div>
    </div>
  );
}

export default Home;