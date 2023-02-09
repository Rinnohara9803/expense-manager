const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="flex-col text-center border-white rounded-md border-2 px-5 py-2">
      <div className="text-white font-normal text-sm">{month}</div>
      <div className="text-white font-normal text-sm">{year}</div>
      <div className="text-white font-bold text-lg">{day}</div>
    </div>
  );
};

export default ExpenseDate;
