import { useState, useEffect } from "react";

import TourList from "./TourList";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchTours = async () => {
    try {
      setLoading(true);

      const res = await fetch(url);

      if (!res.ok) {
        setLoading(false);
        setError(true);
        return;
      }

      const data = await res.json();

      setLoading(false);
      setTours(data);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchTours(url);
  }, []);

  const deleteTour = id => {
    const newTours = tours.filter(tour => tour.id !== id);

    setTours(newTours);
  };

  if (loading) {
    return (
      <main>
        <div className="loading"></div>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <div className="alert-danger">Oops! Something went wrong!</div>
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button
            type="button"
            className="btn"
            style={{ marginTop: "2rem" }}
            onClick={fetchTours}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <h1 className="title">Our Tours</h1>
      <div className="title-underline"></div>

      <TourList tours={tours} deleteTour={deleteTour} />
    </main>
  );
};

export default App;
