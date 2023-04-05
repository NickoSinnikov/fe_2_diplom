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

export default function TrainPage() {
  return (
    <div className="container train-content__block">
      <Aside />
      <TrainBlock />
    </div>
  );
}
