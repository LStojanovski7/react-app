import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const { onChangeFilter } = props;

  const filterChangeHandler = (event) => {
    const filter = {
      date: event.target.value,
      price: "",
    };
    onChangeFilter(filter);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label className="label">Filter by year</label>
        <select className="select" onChange={filterChangeHandler}>
          <option value="all">All</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
