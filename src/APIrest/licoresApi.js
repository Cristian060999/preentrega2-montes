import tequila from "../components/Img/tequila.jfif";
import ron from "../components/Img/ron.jfif";
import aguardiente from "../components/Img/aguardiente.jfif";
import jagermeister from "../components/Img/jagermeister.jfif";
import vino from "../components/Img/vino.jfif";
import baileys from "../components/Img/baileys.jfif";
import amaretto from "../components/Img/amaretto.jfif";
import buchanans from "../components/Img/buchanans.jfif";
import pilsen from "../components/Img/pilsen.jfif";
import corona from "../components/Img/corona.jfif";

const licoresApi = [
    {
      category: "tequila",
      licor: "TEQUILA",
      image: tequila,
      precio: 500,
    },
    {
      category: "ron",
      licor: "RON",
      image: ron,
      precio: 500,
    },
    {
      category: "aguardiente",
      licor: "AGUARDIENTE",
      image: aguardiente,
      precio: 500,
    },
    {
      category: "whisky",
      licor: "JAGERMEISTER",
      image: jagermeister,
      precio: 500,
    },
    {
      category: "vino",
      licor: "VINO",
      image: vino,
      precio: 500,
    },
    {
      category: "crema",
      licor: "BAILEYS",
      image: baileys,
      precio: 500,
    },
    {
      category: "ron",
      licor: "AMARETTO",
      image: amaretto,
      precio: 500,
    },
    {
      category: "whisky",
      licor: "BUCHANANS",
      image: buchanans,
      precio: 500,
    },
    {
      category: "cerveza",
      licor: "PILSEN",
      image: pilsen,
      precio: 500,
    },
    {
      category: "cerveza",
      licor: "CORONA",
      image: corona,
      precio: 500,
    },
  ]; 
  
  export const getLicorById = (id) =>{
    return licoresApi[id];
  }
   
export default licoresApi;