import './Home.css';
import { Products } from '../Products/Products';

export const Home = () => {
  return (
    <div className="hero">
      <div className="text-white border-0" style={{ height: '500px' }}>
        <div
          className="card-img-overlay
        d-flex flex-column justify-content-center"
        >
          <h5 className="card-title display-3">NEW SEASON ARRIVALS</h5>
          <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
        </div>
      </div>
      <Products />
    </div>
  );
};
