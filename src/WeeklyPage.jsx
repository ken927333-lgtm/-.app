import Chart from "./Chart.jsx";
import { useData } from "./data.jsx";
import "./App.css";

function Header(props) {
  return <h1>{props.title}</h1>;
}

function WeeklyPage() {
  const {
    day,
    setDay,
    sales,
    setSales,
    time,
    setTime,
    eria,
    setEria,
    expense,
    setExpense,
    isRain,
    setIsRain,
    dayData,
    setDayData,
  } = useData();

  console.log(dayData);

  return (
    <div>
      <Header title="週ごとの分析" />
      <Chart dayData={dayData.slice(-7)} />
    </div>
  );
}

export default WeeklyPage;
