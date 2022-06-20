import "./App.css";


export default function weatherForm() {
  return (
    <form className="float-left" id="search-form">
      <input
        className="form-control"
        type="text"
        placeholder="Enter a city"
        id="city-text-input"
        autocomplete="off"
      />
      <input
        className="form-control form-control-lg"
        type="submit"
        value="Search"
        id="search-button"
      />
    </form>
  );
}
