import React from 'react';
import '../../css/aside.css';
import DataFilter from './DataFilter';
import OptionsFilter from './OptionsFilter';
import PriceFilter from './PriceFilter';
import TimeFilter from './TimeFilter';

export default function Aside() {
   return (
      <aside className="aside">
         <DataFilter />
         <OptionsFilter />
         <PriceFilter />
         <TimeFilter />
      </aside>
   );
}
