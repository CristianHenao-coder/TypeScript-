// Dashboard/index.tsx

import { Card } from "@/components/card/card";
import { CgAirplane } from "react-icons/cg";


export default function Dashboard() {
  return (
    <div>
    <div className="caja-dashboard">
      <h1 className="ttitulo-dashboardd">Bienvenido al Dashboard <CgAirplane /></h1>
  </div>

      <div>
          <Card 
              titulo="Search engine optimization" 
              boton="Learn more" 
              imagen="/images/seo.png" 
              bgcolor="green" 
            />

            

      </div>
  </div>

  );

  
}





