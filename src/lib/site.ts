export const WHATSAPP_NUMBER = "390881720301"; // Italian international format
export const PHONE_NUMBER = "0881720301";
export const WHATSAPP_MSG = "Salve, vorrei avere maggiori informazioni sui vostri corsi...";
export const ADDRESS = "Via S. Lazzaro, 19, Foggia";

export const waLink = (msg: string = WHATSAPP_MSG) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const telLink = () => `tel:${PHONE_NUMBER.replace(/\s/g, "")}`;

export const MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=Via+S.+Lazzaro+19,+Foggia";
