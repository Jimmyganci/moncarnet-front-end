import React from 'react';
import { glassMorphism } from '../../../variableTailwind';
import IProsInfos from '../../../Interfaces/IProsInfos';
import { button } from '../../../variableTailwind';

type Props = IProsInfos;

const RdvDisplay:React.FC<Props> = (props) => {

  return (
    <div className={`m-4 p-4 h-1/6 flex justify-around items-center rounded-lg ${glassMorphism}`}>
      <div className='w-1/4 flex justify-center'>
        <h2>{props.date}</h2>
      </div>
      <div className='w-1/4 flex justify-center'>
        <p>{props.user}</p>
      </div>
      <div className='w-1/4 flex justify-center'>
        <p>{props.comment}</p>
      </div>
      <div className='w-1/4 flex justify-center'>
        <button className={`${button} p-3`}>Détails</button>
      </div>     
    </div>
  );
}

export default RdvDisplay;
