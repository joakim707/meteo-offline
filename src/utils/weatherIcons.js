import sun from '../assets/soleil.png';
import cloud from '../assets/nuage.png';
import rain from '../assets/pluvieux.png';
import tempest from '../assets/tempete.png'
import ice from '../assets/flocon-de-neige.png'
import wind from '../assets/vent_1.png'
import mist from '../assets/brouillard.png'

export function getWeatherIcon(condition) {
  const c = condition.toLowerCase();

  if (c.includes("soleil") || c.includes("éclair") || c.includes("dégagé"))
    return sun;

  if (c.includes("nuage") || c.includes("couvert") || c.includes("gris"))
    return cloud;

  if (c.includes("pluie") || c.includes("bruine"))
    return rain;

  if (c.includes("orage") || c.includes("tempête"))
    return tempest;

  if (c.includes("neige") || c.includes("glace"))
    return ice;

  if (c.includes("vent"))
    return wind;

  if (c.includes("brouillard"))
    return mist;

  return "🌡️";
}
