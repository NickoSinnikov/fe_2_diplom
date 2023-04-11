import { useNavigate } from 'react-router';
import React from 'react';
import SearchFormDirection from '../Forms/SearchFormDirection';
import SearchFormDate from '../Forms/SearchFormDate';
import Button from '../Button';
import { fetchRoutes } from '../../Slice/routeSlice';
import { useDispatch } from 'react-redux';

export default function HomePageForm() {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const handleSubmit = (event) => {
      event.preventDefault();
      console.log('submit');
      dispatch(fetchRoutes());
      navigate('/tickets/train');
   };

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
            <form
               onSubmit={handleSubmit}
               className="search-form search-form-main"
            >
               <div className="form-item form-item-column">
                  <SearchFormDirection>Направление</SearchFormDirection>
                  <SearchFormDate>Дата</SearchFormDate>
               </div>
               <Button type="submit" className="btn-search">
                  Найти билеты
               </Button>
            </form>
         </div>
      </section>
   );
}