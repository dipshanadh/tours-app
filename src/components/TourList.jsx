import TourItem from "./TourItem";

const TourList = props => {
  const { tours, deleteTour } = props;

  return (
    <section>
      <ul className="tours">
        {tours.map(tour => (
          <TourItem key={tour.id} {...tour} deleteTour={deleteTour} />
        ))}
      </ul>
    </section>
  );
};

export default TourList;
