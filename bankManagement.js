class Account {
    constructor(AccountNumber,Holder, balance){
        this.Holder = Holder;
        this.AccountNumber = AccountNumber;
        this.balance = balance;
    }
    deposit(amount){
        if(amount>0){
            this.balance +=amount;
            console.log(`${amount} has been deposited.Your new balance is ${this.balance}`)
        }
    }
    withdraw(amount){
        if(amount>0){
            this.balance -= amount
            console.log(`${amount} has been withdrawn. Your new balance is ${this.balance}`)
        }
    }
    balanceInquiry() {
        console.log(`Account Balance: ${this.balance}`);
    }
}

class SavingsAccount extends Account{
    constructor(AccountNumber,Holder,balance,interestRate){
        super(AccountNumber,Holder,balance);
        this.interestRate = interestRate
    }

    addInterest() {
        const interest = this.balance* (this.interestRate / 100);
        this.deposit(interest);
        console.log(`interest added: ${interest}. New balance is 
            ${this.balance}`)
    }
}
class CurrentAccount extends Account {
    constructor(accountNumber, holderName, balance, overdraftLimit) {
        super(accountNumber, holderName, balance);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount) {
        if (amount > 0 && amount <= (this.balance + this.overdraftLimit)) {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance is ${this.balance}.`);
        } else {
            console.log("Insufficient funds or invalid amount.");
        }
    }
}
// Create a SavingsAccount instance
const savingsAccount = new SavingsAccount("SA123", "John Doe", 1000, 5);
savingsAccount.deposit(500); // Deposited 500. New balance is 1500.
savingsAccount.addInterest(); // Interest added: 75. New balance is 1575.
savingsAccount.withdraw(200); // Withdrew 200. New balance is 1375.
savingsAccount.balanceInquiry(); // Account Balance: 1375

// Create a CurrentAccount instance
const currentAccount = new CurrentAccount("CA456", "Jane Doe", 2000, 500);
currentAccount.deposit(1000); // Deposited 1000. New balance is 3000.
currentAccount.withdraw(3500); // Withdrew 3500. New balance is -500.
currentAccount.balanceInquiry(); // Account Balance: -500