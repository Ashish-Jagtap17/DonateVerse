import { useEffect } from "react";

const Tawk = () => {
  useEffect(() => {
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();
    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = "https://embed.tawk.to/YOUR_PROPERTY_ID/DEFAULT";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    document.body.appendChild(s1);
  }, []);

  return null; // This component doesn't render anything visible
};

export default Tawk;
