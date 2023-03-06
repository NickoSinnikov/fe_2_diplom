import PageForm from "./PageForm";
import Aside from "./Aside";
import Tickets from "./Tickets";
import "../css/tickets-page.css";
export default function TicketsPage() {
  return (
    <div className="tickets-page ">
      <section className="search-form__section ">
        <div className="container">
          <PageForm className="search-form-row" />
        </div>
      </section>
      <div className="container"><Aside />
      <Tickets /></div>
      
    </div>
  );
}
