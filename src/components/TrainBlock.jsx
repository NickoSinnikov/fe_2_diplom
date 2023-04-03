import { useSelector } from 'react-redux';
import Train from './traincard/Train';

export default function TrainMainBlock() {
  const trains = useSelector((state) => state.routes.routes);
  return (
    <div className="trains__block">
      <div className="trains__block-breadcrumbs"></div>
      <ul className="train__block-list">
        {trains.map((train) => (
          <Train train={train} />
        ))}
      </ul>
    </div>
  );
}
