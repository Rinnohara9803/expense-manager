import ChartItem from "./ChartItem";

const Charts = ({ filteredExpenses }) => {
  const dataChartPoints = [
    { month: "Jan", value: 0, id: "0" },
    { month: "Feb", value: 0, id: "1" },
    { month: "Mar", value: 0, id: "2" },
    { month: "Apr", value: 0, id: "3" },
    { month: "May", value: 0, id: "4" },
    { month: "Jun", value: 0, id: "5" },
    { month: "Jul", value: 0, id: "6" },
    { month: "Aug", value: 0, id: "7" },
    { month: "Sep", value: 0, id: "8" },
    { month: "Oct", value: 0, id: "9" },
    { month: "Nov", value: 0, id: "10" },
    { month: "Dec", value: 0, id: "11" },
  ];

  for (const expense of filteredExpenses) {
    const expenseMonth = expense.date.getMonth();
    dataChartPoints[expenseMonth].value += 1;
  }

  //   const values = filteredExpenses.map((e) => e.amount);

  //   const maxValue = Math.max(...values);
  const maxValue = filteredExpenses.length;

  console.log("here");

  return (
    <div className="justify-around h-[200px] w-full bg-slate-600 rounded-md my-5 flex">
      {dataChartPoints.map((e) => (
        <ChartItem
          key={e.id}
          value={e.value}
          maxValue={maxValue}
          label={e.month}
        ></ChartItem>
      ))}
    </div>
  );
};

export default Charts;
