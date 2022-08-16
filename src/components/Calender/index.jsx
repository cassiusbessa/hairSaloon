import { useState, useEffect } from "react";
import months from "../../helpers/months"
import weekDays from "../../helpers/weekDays"
import BrDate from "./GenerateBrDate"
import './styles.scss';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

const brCalendar = new BrDate(months, weekDays);
const weekDayLetters = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

export default function Calender () {
  const [calendarDays, setCalendarDays] = useState([]);
  const [monthName, setMonthName] = useState('Teste');

  useEffect(() => {
    setCalendarDays(brCalendar.calendar);
  }, []);

  useEffect(() => {
    getMonthName();
  }, [calendarDays])
  
  function handleNextMonth() {
    const nextArr = brCalendar.nextMonth();
    setCalendarDays(nextArr);
  }

  function handlePreviousMonth() {
    const previousArr = brCalendar.previousMonth();
    setCalendarDays(previousArr);
  }

  function handleGetCurrentDate() {
    const newCalendar = brCalendar.arrByMonth();
    setCalendarDays(newCalendar);
  }

  function shadeOfGray(date, currentMonth) {
    const { weekDay, month } = date;
    if (weekDay === 0) return 'text-ligth-gray';
    if (weekDay === 0 || month !== currentMonth)
      return 'text-gray';
    else return 'text-black';
  }

  function getMonthName() {
    const dayObj = (calendarDays.length !== 0) && calendarDays.find(({ day }) => day === 1);
    setMonthName(`${months[dayObj.month]} ${dayObj.fullYear}`);
  }

  function calendar() {
    return calendarDays.map(({ weekDay, day, month }, i, arr) => {
      const currDate = new Date();
      const dayObj = arr.find(({ day }) => day === 1);
      const shadeGray = shadeOfGray({ weekDay, month }, dayObj.month);
      const currentDay = day === currDate.getDate() && month === currDate.getMonth() && 'currente-date';

      return (
        <div
          key={i}
          className={`cell-calendar cell-calendar-hover ${shadeGray} ${currentDay}`}
        >
          {day}
        </div>
      )
    });
  }

  return (
    <div className="calendar-container">
      <div className="top-header-calendar" onClick={handleGetCurrentDate}>
        {brCalendar.dateFormate()}
      </div>
      <div className="header-calendar">
        <AiOutlineLeft
          onClick={ handlePreviousMonth }
          className="arrow-calendar"
        />
        <div className="text-black">{monthName}</div>
        <AiOutlineRight
          onClick={ handleNextMonth }
          className="arrow-calendar"
        />
      </div>
      <hr style={{ margin: '2px 5px' }}/>
      <div className="field-calendar">
        {weekDayLetters.map((w, i) => <div key={i} className="cell-calendar text-gray">{w}</div>)}
        {calendarDays && calendar()}
      </div>
    </div>
  )
}