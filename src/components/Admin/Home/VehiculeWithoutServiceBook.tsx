import 'react-circular-progressbar/dist/styles.css';

import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { Link } from 'react-router-dom';

import { button, glassMorphism } from '../../../variableTailwind';

function VehiculeWithoutServiceBook({ percentage }: { percentage: number }) {
  return (
    <div
      className={`flex flex-col items-center justify-between flex-1 p-4 rounded-lg ${glassMorphism}`}>
      <div className="w-1/5">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={{
            path: {
              stroke: `rgb(0,155,155)`,
            },
          }}
        />
      </div>

      <p>{`% de véhicules qui ont un carnet d'entretien vierge!`}</p>
      <button className={`${button}`}>
        <Link to="/admin/vehicules/withoutServiceBook"> Voir</Link>
      </button>
    </div>
  );
}

export default VehiculeWithoutServiceBook;
