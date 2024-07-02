document.addEventListener("DOMContentLoaded", () => {
    function updateDayAndTime() {
        // Getting the current Day
        const now = new Date();
        const daysOfWeek = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];
        const dayOfWeek = daysOfWeek[now.getUTCDay()];

        //Getting the current time
        const currentDate = new Date();
        const isoString = currentDate.toISOString();

        const currentTimeElement = document.getElementById("currentTimeUTC");
        const currentDayElement = document.getElementById("currentDay");

        currentTimeElement.textContent = `${isoString}`;
        currentDayElement.textContent = `${dayOfWeek}`
    }

    updateDayAndTime();
    setInterval(updateDayAndTime, 1000);
});