class BankAccount {
    public readonly userId: number;
    public userName: string;
    // private userBalance: number;
    protected userBalance: number;

    constructor(userId: number, userName: string, userBalance: number){
        this.userId = userId,
        this.userName = userName,
        this.userBalance = userBalance
    }
    get getBalance(){
        return this.userBalance
    }
    // addBalance(balance: number){
    //     this.userBalance = this.userBalance + balance
    // }
    set addBalance(balance: number){
        this.userBalance = this.userBalance + balance
    }
}
class StudentBankAccount extends BankAccount {
  test() {
    this.userBalance;
  }
}
const rajuAccount = new BankAccount(123, "Raju", 0)
// rajuAccount.addBalance(50)
rajuAccount.addBalance = 50
rajuAccount.addBalance = 100
console.log(rajuAccount);
console.log(rajuAccount.getBalance);

