import axios from 'axios';
import React, { useEffect, useContext, useState } from 'react';
import ProsContext from '../../../contexts/ProsContext';
import calendar from '../../../assets/minimalist_logos/calendar.svg';
import { button, h2 } from '../../../variableTailwind';
import ProRdv from './ProRdv';

const NextRdvs = () => {

  const { prosLogin }: any = useContext(ProsContext);

  const [nextRdv, setNextRdv] = useState<any>([]);
  let nextRdvDisplay:Array<any> = [];

  useEffect(() => {    
    prosLogin.length !==0 && axios
      .get(`http://localhost:8000/api/appointment/pros/${prosLogin.id_user}`, { withCredentials: true })
      .then((res) => res.data)
      .then((data) => setNextRdv(data))
      .catch((err) => console.log(err));
  }, [prosLogin]);

  nextRdvDisplay = nextRdv.sort((function(a:any, b:any) {
    a = new Date(a.date);
    b = new Date(b.date);
    return a>b ? -1 : a<b ? 1 : 0;
}))
.reverse()
.slice(0, 3);
  

  console.log(nextRdvDisplay);

  return (
    <div className="flex flex-col justify-around h-full">
      <div className="flex items-center justify-center">
        <img className="h-20" src={calendar} alt="calendar" />
        <h2 className={`${h2}`}>Mes prochains RDVs</h2>
      </div>
      {nextRdv.length !== 0 &&
        nextRdvDisplay
          .map((e:any, i:number) => (
            <ProRdv key={i} date={e.date} comment={e.comment} user={e.userId} />
          ))
        }
      <div className="flex justify-around">
        <button className={`${button}`}>Voir tout</button>
        <button className={`${button}`}>Créer un RDV</button>
      </div>
    </div>
  );
};

export default NextRdvs;
