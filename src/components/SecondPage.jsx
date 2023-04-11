import React from "react";
import Aside from "./Aside/Aside";
import "../css/tickets-page.css";
import SearchFormDirection from "./Forms/SearchFormDirection";
import SearchFormDate from "./Forms/SearchFormDate";
import Button from "./Button";
import { fetchRoutes } from "../Slice/routeSlice";

import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import TrainPage from "./TrainPage";
import SeatsPage from "./SeatsPage";
import StageBar from "./StageBar";

export default function SecondPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchRoutes());
    navigate("/tickets/train");
  };

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
          <StageBar />
        </div>
      </section>

      <div className="container train-content__block">
        <Aside />
        <Routes>
          <Route path="/train" element={<TrainPage />} />
          <Route path="/seats" element={<SeatsPage />} />
        </Routes>
      </div>
    </main>
  );
}