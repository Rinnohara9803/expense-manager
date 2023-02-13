const ExpenseFilter = ({ value, handleFilterValueChange }) => {
  const dropDownChangeHandler = (e) => {
    handleFilterValueChange(e.target.value);
  };
  return (
    <div className="flex space-x-2 justify-end py-5 items-center mb-5">
      <label className="text-white font-medium text-sm"> Filter By Year</label>

      <select
        value={value}
        name="years"
        id="years"
        onChange={dropDownChangeHandler}
        className="border-solid border-purple-800 border-2 px-3 py-1 rounded-md"
      >
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
