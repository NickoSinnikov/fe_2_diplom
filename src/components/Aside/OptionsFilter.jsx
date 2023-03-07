import Options from "./Options"
import Coupe from "../../img/Coupe.svg";
import Seat from "../../img/Seat.svg";
import Plackart from "../../img/Plackart.svg";
import WiFi from "../../img/WiFi.svg";
import Rocket from "../../img/Rocket.svg";
import Star from "../../img/Star.svg";

export default function OptionsFilter(){
    return(
        <div className="options__block aside-item">
            <ul className="opions__list">
                <Options name="Купе" src={Coupe}/>
                <Options name="Плацкарт" src={Plackart}/>
                <Options name="Сидячий" src={Seat}/>
                <Options name="Люкс" src={Star}/>
                <Options name="WiFi" src={WiFi}/>
                <Options name="Экспресс" src={Rocket}/>
            </ul>
        </div>
    )
}