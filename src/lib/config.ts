export const SITE = {
  name: "Desing Amoblamientos",
  tagline: "Muebles a medida",
  location: "Maipú, Mendoza",
  whatsapp: "5492615168703",
  phones: ["261 516 8703", "261 206 6603"],
  instagram: "https://www.instagram.com/desingamoblamientos26",
  whatsappMessage:
    "Hola! Vi su página y quiero pedir un presupuesto de un mueble a medida.",
};

export const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  SITE.whatsappMessage
)}`;