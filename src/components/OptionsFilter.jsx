import Options from "./Options"

export default function OptionsFilter(){
    return(
        <div className="options__block">
            <ul className="opions__list">
                <Options name="Купе"/>
                <Options name="Плацкарт" />
                <Options name="Сидячий"/>
                <Options name="Люкс"/>
                <Options name="WiFi"/>
                <Options name="Экспресс"/>
            </ul>
        </div>
    )
}