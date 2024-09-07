// const messageDate = document.getElementById("messageDate");
const resultInput = document.getElementById("result");

let birthDate;

document.getElementById("button").onclick = function birthDateFun() {
  birthDate = document.getElementById("messageDate").value;
  console.log(`это глобальная ${birthDate}`);

  let now = Date.now();
  console.log(`это дата сегодня: ${now}`);

  let birthDateInMillSec = Date.parse(birthDate);
  console.log(`это дата рождения в миллисек: ${birthDateInMillSec}`);

  let diffInMillSec = now - birthDateInMillSec;
  console.log(`это разница в миллисек ${diffInMillSec}`);

  let daysBefore = Math.floor(diffInMillSec / (1000 * 60 * 60 * 24 * -1) + 1);
  console.log(`days beoore ${daysBefore}`);

  // начало подбора правильного слова
  let daysBefore1 = daysBefore;
  let count = daysBefore1 % 100;
  console.log("count = ", count);

  let result1 = "";

  if (count >= 10 && count <= 20) {
    result1 = "дней";
  } else {
    count = daysBefore1 % 10;
    console.log("count = ", count);

    if (count === 1) {
      result1 = "день";
    } else if (count >= 2 && count <= 4) {
      result1 = "дня";
    } else {
      result1 = "дней";
    }
  }
  console.log(`это конечный ${daysBefore} ${result1}`);
  // конец подбора

  resultInput.textContent = `До праздника осталось ${daysBefore} ${result1}`;

  if (birthDate === "") {
    resultInput.textContent = "Пожалуйста, выберите дату рождения.";
  } else {
    resultInput.textContent = `До праздника осталось ${daysBefore} ${result1}`;
  }
};
