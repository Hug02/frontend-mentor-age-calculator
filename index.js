const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");


function computeDate() {
    clearErrors();
    const day = getDay();
    const month = getMonth();
    const year = getYear();

    if (day == null || month == null || year == null)
        return null;

    const { days, months, years } = dateDiff(day, month, year);
    
    // check if date is valid
    if (isNaN(days)) {
        document.getElementById("date-error").classList.add("active");
        return null;
    }

    document.getElementById("years-output").innerHTML = years;
    document.getElementById("months-output").innerHTML = months;
    document.getElementById("days-output").innerHTML = days;
}

function dateDiff(day, month, year) {
    // Parse the input dates
    const start = new Date(`${year}-${month}-${day}`);
    const end = new Date();
  
    // Calculate the difference in milliseconds
    const timeDiff = end - start;

    // Calculate the number of milliseconds in a day, month, and year
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const millisecondsPerMonth = 30.44 * millisecondsPerDay;
    const millisecondsPerYear = 365.25 * millisecondsPerDay;

    // Calculate the total years, months, and days
    const years = Math.floor(timeDiff / millisecondsPerYear);
    const months = Math.floor((timeDiff % millisecondsPerYear) / millisecondsPerMonth);
    const days = Math.floor((timeDiff % millisecondsPerMonth) / millisecondsPerDay);

    return { years, months, days };
}

function clearErrors() {
    const activeErrors = document.querySelectorAll('.error.active');
    activeErrors.forEach((element) => {
        element.classList.remove("active")
    })
}

function getDay() {
    const day = dayInput.value;
    if (day === '') {
        document.getElementById("day-error-empty").classList.add("active");
        return null;
    }
    else if (! (0 < day && day <=31)) {
        document.getElementById("day-error-valid").classList.add("active");
        return null;
    }
    else
        return day;
}

function getMonth() {
    const month = monthInput.value;
    if (month === '') {
        document.getElementById("month-error-empty").classList.add("active");
        return null;
    }
    else if (! (0 < month && month <=12)) {
        document.getElementById("month-error-valid").classList.add("active");
        return null;
    }
    else
        return month;
}

function getYear() {
    const year = yearInput.value;
    if (year === '') {
        document.getElementById("year-error-empty").classList.add("active");
        return null;
    }
    else if (year < 1000) {
        document.getElementById("year-error-valid").classList.add("active");
        return null;
    }
    else
        return year;
}