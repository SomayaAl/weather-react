import "./App.css";


export default function weatherForm() {
  return (
    <form id="search-form">
      <div className="row">
        <div className="col-8">
          <input
            className="form-control"
            type="text"
            placeholder="Enter a city"
            id="city-text-input"
            autocomplete="off"
          />
        </div>
        <div className="col-4">
          <input
            className="form-control form-control-lg"
            type="submit"
            value="Search"
            id="search-button"
          />
        </div>
      </div>
    </form>
  );
}
