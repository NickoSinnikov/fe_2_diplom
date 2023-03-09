import "../../css/aside.css";
import DataFilter from "./DataFilter";
import OptionsFilter from "./OptionsFilter";
import PriceFilter from "./PriceFilter";
//import TimeFilter from "./TimerFilter";

export default function Aside(){
    return(
        <aside className="aside">
            <DataFilter/>
            <OptionsFilter/>
            <PriceFilter/>
            {/*<TimeFilter/> */}
        </aside>
    )
}