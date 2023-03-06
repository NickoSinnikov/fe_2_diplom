
import {useNavigate} from "react-router";
import PageForm from "./PageForm";

export default function HomePageForm() {
  const navigate = useNavigate();

  const handleSubmit =(event)=>{
    event.preventDefault();
    console.log("submit");
    navigate('/tickets/');
  }
  return (
    <section className="home-page-title">
      <div className="home-page-title-block container">
        <h1 className="home-page__title">
          Вся жизнь -
          <span className="header__title-bold">
            <br />
            путешествие!
          </span>
        </h1>
        <PageForm className="home-page-form" onSubmit={handleSubmit}/>
      </div>
    </section>
  );
}
