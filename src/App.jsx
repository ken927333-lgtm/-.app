import "./App.css";
import useData from "./data.js";

function Header(props) {
  return <h1>{props.title}</h1>;
}

function App() {
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
    btnPush,
    inputResult,
    setInputResult,
    isRain,
    setIsRain,
    dayData,
    setDayData,
    record,
    setRecord,
  } = useData();

  return (
    <div className="Rbody">
      <Header title="Uver収益分析アプリ" />
      <div className="container">
        <div className="input__wrapper">
          <div className="data__Input">
            <input
              type="date"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              placeholder="日付"
            ></input>
            <div className="rain__checkbox">
              <p>雨</p>
              <input
                type="checkbox"
                checked={isRain}
                onChange={(e) => setIsRain(e.target.checked)}
                placeholder="雨"
              ></input>
            </div>
            <input
              value={sales}
              onChange={(e) => setSales(e.target.value)}
              placeholder="売上"
            ></input>
            <input
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="稼働時間(分)"
            ></input>
            <input
              value={eria}
              onChange={(e) => setEria(e.target.value)}
              placeholder="配達エリア"
            ></input>
            <input
              value={expense}
              onChange={(e) => setExpense(e.target.value)}
              placeholder="経費"
            ></input>
          </div>
          <button onClick={btnPush} className="input__btn">
            入力
          </button>
          <p>{inputResult}</p>
        </div>
        <div className="derivary__record">{data}</div>
      </div>
    </div>
  );
}

export default App;
