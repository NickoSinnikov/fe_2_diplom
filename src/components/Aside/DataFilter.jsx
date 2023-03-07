import Input from "../Input";
export default function DateFilter(){
    return (
        <div className="date-filter aside-item">
            <div className="date-form">
                <label className="date-form__label">
                    Дата поездки
                </label>
                <Input/>
            </div>
            <div className="date-form">
                <label className="date-form__label">
                    Дата возвращения
                </label>
                <Input />
            </div>
        </div>
    );
}