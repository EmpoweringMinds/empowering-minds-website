import { getWorkshops } from "../cms/workshops";
import { useEffect } from "react";

export default function Workshops() {

useEffect(() => {
  getWorkshops()
    .then((data) => {
      console.log("FULL WORKSHOP:", data[0]);

      console.log("SPEAKERS:", data[0]?.speakers);

      console.log("SESSIONS:", data[0]?.schedule?.sessions);

      console.log("PRICING:", data[0]?.pricing);

      console.log("CONTENT:", data[0]?.content);
    })
    .catch((error) => {
      console.error("WORKSHOP FETCH ERROR:", error);
    });
    
}, []);

return (
  <>
  </>
)

}

