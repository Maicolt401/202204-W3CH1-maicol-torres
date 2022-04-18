import Rey from "./Rey.js";
import Asesor from "./Asesor.js";
import Luchador from "./Luchador.js";
import Escudero from "./Escudero.js";

const joffrey = new Rey("Joffrey", "Baratheon", 16, 2);
const jaime = new Luchador("Jaime", "Lannister", 45, "Espada", 7);
const daenerys = new Luchador("Daenerys", "Targaryen", 30, "Dragones", 10);
const tyrion = new Asesor("Tyrion", "Lannister", 40, daenerys);
const bronn = new Escudero("Bronn", "AguasNegras", 54, 0, jaime);

const personajesGot = [joffrey, tyrion, bronn, daenerys, jaime];
export default personajesGot;
