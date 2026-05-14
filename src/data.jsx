import { useState, useEffect, createContext, useContext } from "react";

export const DataContext = createContext(null);

export function DataProvider({ children }) {
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
    if (day === "" || sales === "" || time === "") {
      setInputResult("必要項目を入力してください");
      return;
    }
    setDayData(
      [
        ...dayData,
        {
          inputDay: day,
          inputIsRain: isRain,
          inputSales: Number(sales),
          inputTime: Number(time),
          inputEria: eria,
          inputExpense: Number(expense),
        },
      ].sort((a, b) => new Date(b.inputDay) - new Date(a.inputDay)),
    ); /*new...2026-05-04というままでは数値として比較できないのでオブジェクトに変換するためにnewを使う*/
  };

  const value = {
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

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used within DataProvider");
  return context;
}
