import Aside from './Aside/Aside';
import TrainBlock from './TrainBlock';
import '../css/tickets-page.css';
import SearchFormDirection from './Forms/SearchFormDirection';
import SearchFormDate from './Forms/SearchFormDate';
import { fetchRoutes } from '../Slice/routeSlice';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router';
import SeatsPage from './SeatsPage';

export default function TrainPage(){
  

  return (
      <main className="tickets-page ">
      <section className="search-form__section ">
        <div className="container">
          <form className="search-form search-form-tickets" onSubmit={onSubmit}>
            <div className="form-item form-item-row">
              <SearchFormDirection>Направление</SearchFormDirection>
              <SearchFormDate>Дата</SearchFormDate>
            </div>
            <Button type="submit" className="btn-search">
              Найти билеты
            </Button>
          </form>
        </div>
      </section>
      <div className="container train-content__block">
        <Aside />
        <TrainBlock />
      </div>
    </main>)
}