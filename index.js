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


function computeDate() {
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;

    const { days, months, years } = dateDiff(day, month, year);

    document.getElementById("years-output").innerHTML = years;
    document.getElementById("months-output").innerHTML = months;
    document.getElementById("days-output").innerHTML = days;
}