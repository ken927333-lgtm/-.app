import { useState } from "react";

function useData() {
  const [day, setDay] = useState("");
  const [isRain, setIsRain] = useState(false);
  const [sales, setSales] = useState("");
  const [time, setTime] = useState("");
  const [eria, setEria] = useState("");
  const [expense, setExpense] = useState("");
  const [inputResult, setInputResult] = useState("");
  const [dayData, setDayData] = useState([]);
  const [record, setRecord] = useState("");

  const btnPush = () => {
    if (
      day === "" ||
      sales === "" ||
      time === "" ||
      eria === "" ||
      expense === ""
    ) {
      setInputResult("すべて入力してください");
      return;
    }
    setDayData(
      [
        ...dayData,
        {
          inputDay: day,
          inputIsRain: isRain,
          inputSales: sales,
          inputTime: time,
          inputEria: eria,
          inputExpense: expense,
        },
      ].sort((a, b) => new Date(b.inputDay) - new Date(a.inputDay)),
    ); /*new...2026-05-04というままでは数値として比較できないのでオブジェクトに変換するためにnewを使う*/
  };

  return {
    day,
    setDay,
    isRain,
    setIsRain,
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
    dayData,
    setDayData,
    record,
    setRecord,
  };
}

export default useData;
