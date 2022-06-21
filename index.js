// Your code here
function createEmployeeRecord(arr) {
  return {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
}

function createEmployeeRecords(array) {
  const employees = [];
  for (let arr of array) {
    const newEmployee = createEmployeeRecord(arr);
    employees.push(newEmployee);
  }
  return employees;
}

function createTimeInEvent(employee, date) {
  employee.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(date.slice(11, date.length)),
    date: date.slice(0, 10),
  });
  return employee;
}

function createTimeOutEvent(employee, date) {
  employee.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(date.slice(11, date.length)),
    date: date.slice(0, 10),
  });
  return employee;
}

function hoursWorkedOnDate(employee, date) {
  const timeIn = employee.timeInEvents.filter((timeIn) => timeIn.date === date);
  const timeOut = employee.timeOutEvents.filter(
    (timeOut) => timeOut.date === date
  );
  return (timeOut[0].hour - timeIn[0].hour) / 100;
}

function wagesEarnedOnDate(employee, date) {
  return employee.payPerHour * hoursWorkedOnDate(employee, date);
}

function allWagesFor(employee) {
  let totalWage = 0;
  employee.timeInEvents.forEach((timeIn) => {
    totalWage += wagesEarnedOnDate(employee, timeIn.date);
  });
  return totalWage;
}

function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find(employee.firstName === firstName);
}

function calculatePayroll(array) {
  let totalOwed = 0;
  array.forEach((employee) => {
    allWagesFor(employee);
  });
  return totalOwed;
}
