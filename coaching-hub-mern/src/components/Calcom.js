import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const Calcom = () => {
  useEffect(()=>{
    (async function () {
      const cal = await getCalApi();
      cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false});
    })();
  }, [])
  return <button className="booking-btn" data-cal-link="esali00/15min">Termin buchen</button>;
};

export default Calcom
