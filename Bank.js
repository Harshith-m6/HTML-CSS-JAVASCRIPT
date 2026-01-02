// create an object and a property called as bank balance 
//create 3 methods deposit , withdraw and check balance- where in deposit and withdraw takes amount as an input 
//initialize the bank balance variable to  zero
//implement the functionality such that - when ever the user attempts to deposit the money 
// the bank balance should increase based on the amount he deposits 
// when ever the user attempts to withdraw the money - bank balance should decrease 
//provided the amount to be withdrawn is less than or equal to avaialable bank balance 
// and if he tries to withdraw the amount more than the bank balance - display the message insufficient balance

let BankAccount = {
    bankBalance:0,
    deposit(amount)
    {
       this.bankBalance +=amount;
       return this;
    },

    withdraw(amount){

        if(amount<=this.bankBalance)
        {
            this.bankBalance-=amount;
        }else{
            console.log("Insuficient Balance");
        }
        return this;
    },

    display()
    {
        console.log("Bank balance is"+this.bankBalance);
        return this;
    }
}

BankAccount.deposit(100).display().withdraw(50).display();

