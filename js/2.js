function calculateTheSalary(hourWorked,HourWage){
  let WholeWeekInOneYear=52
  let workWeeks=48
let salary=(HourWage*hourWorked*WholeWeekInOneYear)/workWeeks
return salary
}
let WageForOneHour=15
let HoursWorked=40
let ExactSalary=calculateTheSalary(HoursWorked,WageForOneHour)
console.log(`person's salary is $${ExactSalary}`)



Array.prototype.fillArray = function (value, start, end) {
  return this.fill(value, start, end);
};
