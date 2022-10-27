import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getLicorById } from "../../APIrest/licoresApi";

const Licor = () => {
  const { idLicor } = useParams();

  const [licor, setLicor] = useState({});

  useEffect(() => {
    setLicor(getLicorById(idLicor));
  }, []);

  return <div>{licor.licor}</div>;
};

export default Licor;