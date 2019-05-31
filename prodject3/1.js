let money = prompt ("Ваш бюджет на месяц?", "");
let time = prompt ("Введите дату в формате YYYY-MM-DD", "");
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income[],
    savings: false
};
let question = prompt("Введите обязательную статью расходов в этом месяце", "");
    question1 = prompt ("Во сколько обойдется", "");
appData.expenses.question = question1;
alert (appData.budget/30);