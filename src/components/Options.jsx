export default function Options(props){
    return(
        <li className="options-filter__item">
            <div className="options-filter__icon">
                <img className="options-filter__image"/>
            </div>
            <p className="options-filter__title"></p>
            <form className="options-filter__form">
                <input className="options-filter__checkbox" type="checkbox"/>
            </form>
        </li>
    )
}