import { Box } from "@mui/material";

export const Map = () => {
  return (
      <Box
        component="iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91586.11286316614!2d5.725361798745274!3d44.1644986321491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cbac1ba0271af3%3A0x40819a5fd97b090!2s04200%20Noyers-sur-Jabron!5e0!3m2!1sfr!2sfr!4v1756113568906!5m2!1sfr!2sfr"
        width="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
  );
};
