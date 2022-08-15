// const months = require('../../helpers/months');
// const weekDays = require('../../helpers/weekDays');

const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
];

const weekDays = [
  'Domingo',
  'Segunda-Feira',
  'Terça-Feira',
  'Quarta-Feira',
  'Quinta-Feira',
  'Sexta-Feira',
  'Sábado'
];

export default class BrDate {
  #months = [];
  #weekDays = [];
  calendar = [];

  constructor(nameMonths, nameWeekDays, month, year) {
    this.#months = nameMonths;
    this.#weekDays = nameWeekDays;
    this.arrByMonth(month, year);
  }

  // HELPERS ===============================================>
  helperVariables(date) { // Recebe uma data e retorna um objeto com as informações separadas
    const ndt = date;
    return {
      weekDay: ndt.getDay(),
      day: ndt.getDate(),
      month: ndt.getMonth(),
      fullYear: ndt.getFullYear(),
      hours: ndt.getHours(),
      minutes: ndt.getMinutes(),
      seconds: ndt.getSeconds(),
      fullDate: ndt,
    }
  }

  sumDates(date, dateMetod, num) { // date: Date, dateMetod: 'Day' | 'Date' | 'Month' | 'FullYear' | 'Hours' | 'Minutes'
    const ndt = date;
    ndt.setDate(date[`get${dateMetod}`]() + num);
    return ndt;
  }

  // Methods ===============================================>
  dateFormate(date = new Date()) { // Retorn a data (SD, DD/MM/AAAA) no formato brasileiro
    const ndt = this.helperVariables(date);
    return (
      `${this.weekDays[ndt.weekDay]}, ${ndt.day} de ${this.months[ndt.month]} de ${ndt.fullYear}`
    );
  }

  timeFormate(date = new Date()) { // Retorn a hora (HH:MM:SS)
    const ndt = this.helperVariables(date);
    return (
      `${ndt.hours}:${ndt.minutes}:${ndt.seconds}`
    );
  }

  arrDayInterval(initialDate, endDate) { // initialDate e endDate devem ser passado no formato dos EUA (YYYY/MM/DD)
    const end = new Date(endDate);
    let dt = new Date(initialDate);
    dt.setDate(dt.getDate() - 1);
    const arrOfDates = [];
    while (dt.getTime() !== end.getTime()) {
      dt = this.sumDates(dt, 'Date', 1);
      const date = this.helperVariables(dt);
      arrOfDates.push(date.day);
    }
    return arrOfDates;
  }

  arrByMonth(month = new Date().getMonth(), year = new Date().getFullYear()) { // month: number, year: number - Os meses começam de 0 em diante
    let startMonthDay = new Date(year, month, 1);
    const firstWeekDayOfMonth = startMonthDay.getDate();
    const firstWeekDayOfCalendar = firstWeekDayOfMonth === 1 ? - 7 : - firstWeekDayOfMonth;
    startMonthDay = this.sumDates(startMonthDay, 'Date', firstWeekDayOfCalendar);
    let calendar = [];
    while(calendar.length < 42) {
      const dt = this.helperVariables(startMonthDay);
      const objDate = { weekDay: dt.weekDay, day: dt.day, month: dt.month, fullYear: dt.fullYear };
      calendar.push(objDate);
      startMonthDay.setDate(startMonthDay.getDate() + 1);
    }
    this.calendar = calendar;
    return calendar;
  }

  nextMonth() {
    const dayOneObj = this.calendar.find(({ day }) => day === 1);
    if (dayOneObj.month === 11) {
      dayOneObj.month = 0;
      dayOneObj.fullYear += 1;
    } else {
      dayOneObj.month += 1;
    }
    this.calendar = this.arrByMonth(dayOneObj.month, dayOneObj.fullYear);
    return this.calendar;
  }

  previousMonth() {
    const dayOneObj = this.calendar.find(({ day }) => day === 1);
    if (dayOneObj.month === 0) {
      dayOneObj.month = 11;
      dayOneObj.fullYear -= 1;
    } else {
      dayOneObj.month -= 1;
    }
    this.calendar = this.arrByMonth(dayOneObj.month, dayOneObj.fullYear);
    return this.calendar;
  }
}
