var topic = ["尚未開學", "國定假日", "環境準備", "隨機性", "重複性", "條件判斷"];
var startDate = new Date();
// let x = 1;
// let y = 1;
// function setDate() {
//     x = document.getElementById("month").value;
//     y = document.getElementById("day").value;
// }
function setMonthAndDay(startMonth, startDay) {
    startDate.setMonth(startMonth - 1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}
setMonthAndDay(4, 1);
