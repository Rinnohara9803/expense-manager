const ChartItem = ({ value, maxValue, label }) => {
  let fillHeight = "0%";
  if (maxValue > 0) {
    fillHeight = Math.round((value / maxValue) * 100) + "%";
  }
  return (
    <div className="flex-wrap text-center py-2">
      <div className="relative h-5/6 w-5 sm:w-7 rounded-2xl bg-white flex flex-col justify-end border-black border-solid border-2">
        <div
          className="bg-purple-500 rounded-2xl "
          style={{ height: fillHeight, transition: "all 0.3s ease-out" }}
        ></div>
      </div>
      <h6 className="text-sm"> {label} </h6>
    </div>
  );
};

export default ChartItem;
