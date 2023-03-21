import InputDate from "../Forms/InputDate";
export default function DateFilter(){
    return (
        <div className="date-filter aside-item">
            <div className="date-form">
                <label className="date-form__label">
                    Дата поездки
                </label>
                <InputDate />
            </div>
            <div className="date-form">
                <label className="date-form__label">
                    Дата возвращения
                </label>
                <InputDate />
            </div>
        </div>
    );
}