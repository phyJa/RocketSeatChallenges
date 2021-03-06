const user = {
    name: 'Mary',
    transactions: [],
    balance: 0
};

const newTransactions = [
    {
        type: 'credit',
        value: 50
    },
    {
        type: 'credit',
        value: 150
    },
    {
        type: 'credit',
        value: 120
    },
    {
        type: 'credit',
        value: 90
    },
    {
        type: 'debit',
        value: 80
    },
    {
        type: 'debit',
        value: 30
    },
    {
        type: 'debit',
        value: 120
    }
]

function addTransactionToUser (aTransaction, aUser) {
    aUser.transactions.push(aTransaction);
    if(aTransaction.type === 'credit')
        aUser.balance += aTransaction.value;
    else
        aUser.balance -= aTransaction.value;
}

function addAllNewTransactions (transactions, aUser) {
    for(let transaction of transactions) {
        addTransactionToUser(transaction, aUser)
    }
}

//Add the transactions
addAllNewTransactions(newTransactions, user)

//See the new User Data
//console.log(user);

// Now let's identify the transactions whose values are the highest
function getHigherTransactionByType (aUser, type) {
    let numberOfTransactions = aUser.transactions.length;
    let higherCreditValue = -Infinity, higherDebitValue = -Infinity ;
    for(let i = 0; i < numberOfTransactions; i++) {
        if(aUser.transactions[i].type === "credit" && aUser.transactions[i].value >= higherCreditValue)
            higherCreditValue = aUser.transactions[i].value;
        else if(aUser.transactions[i].type === "debit" && aUser.transactions[i].value >= higherDebitValue)
            higherDebitValue = aUser.transactions[i].value;
    }
    if(type === "credit")
        return { type: "credit", value: higherCreditValue };
    else
        return { type: "debit", value: higherDebitValue };
}

//Testing
//console.log(getHigherTransactionByType(user, "credit"))

//Getting the average transaction value of a user
function getAverageTransactionValue (aUser) {
    let userTransactions = aUser.transactions,
        numberOfTransactions = userTransactions.length,
        total = 0;
    for(let i = 0; i < numberOfTransactions; i++){
        total += aUser.transactions[i].value;
    }
    return (total/numberOfTransactions);
}

//console.log(getAverageTransactionValue(user));

//Getting an object which counts the number of "credit" and "debit" transactions
function getTransactionsCount (aUser) {
    const countingTransactions = {credit: 0, debit: 0};
    for(let aUserTransaction of aUser.transactions){
        if(aUserTransaction.type === "credit")
            countingTransactions.credit++;
        else
            countingTransactions.debit++;
    }
    return countingTransactions;
}

console.log(getTransactionsCount(user));