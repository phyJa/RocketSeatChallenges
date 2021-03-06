const users = [
    {
        name: 'Salvio',
        revenues: [115.3, 48.7, 98.3, 14.5],
        spendings: [85.3, 13.5, 19.9, 20]
    },
    {
        name: "Marcio",
        revenues: [24.6, 214.3, 45.3],
        spendings: [185.3, 12.1, 120.0]
    },
    {
        name: "Lucia",
        revenues: [9.8, 120.3, 340.2, 45.3],
        spendings: [450.2, 29.9]
    }
];

//Sum the elements of an array
function summing (anArray) {
    let sum = 0;
    for(let anItem of anArray) {
        sum += anItem;
    }
    return sum;
}

//Calculate the total
function calculateTotal (aPersonRevenues, aPersonSpendings) {
    return summing(aPersonRevenues) - summing(aPersonSpendings);
}

//Print the message
function printMessage(aProgrammer) {
    let aProgrammerBudget = calculateTotal(aProgrammer.revenues, aProgrammer.spendings);
    if(aProgrammerBudget > 0)
        console.log(`${aProgrammer.name} has a POSITIVE budget of ${aProgrammerBudget}.`);
    else if(aProgrammerBudget === 0)
        console.log(`${aProgrammer.name} has a budget of ${aProgrammerBudget}.`);
    else
        console.log(`${aProgrammer.name} has a NEGATIVE budget of ${aProgrammerBudget}.`);
}

//List everybody
for(let user of users) { printMessage(user); }