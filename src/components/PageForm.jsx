import HeaderFormDirection from "./HeaderFormDirection";
import HeaderFormDate from "./HeaderFormDate";
import Button from "./Button";

export default function PageForm(props) {
  const { onSubmit } = props;
  return (
    <form onSubmit={onSubmit} className={props.className + " search-form"}>
      <div className="form-item">
        <HeaderFormDirection>Направление</HeaderFormDirection>
        <HeaderFormDate>Дата</HeaderFormDate>
      </div>
      <Button type="submit" className="btn-search">
        Найти билеты
      </Button>
    </form>
  );
}
