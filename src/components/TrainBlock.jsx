import Train from "./traincard/Train";

export default function TrainMainBlock() {
  return (
    <div className="trains__block">
      <div className="trains__block-breadcrumbs"></div>
      <ul className="train__block-list">
        <Train />
      </ul>
    </div>
  );
}
