let myName: string | null = null;
myName = "test";

//Arrays
// let items: string[] | number[] = [];
let items: (string | number)[];
items = ["", "", 22];
console.log(items);

///Objects

const account: {
    name?: string;
    balance?: number;
    status?: string;
} = {
    name: "test",
    balance: 65,
};
console.log(account);

//Array of Objects

let accounts: object[];
// accounts = [{}, {}, {}, 'string']
accounts = [{}, {}, {}];
console.log(accounts);

/// Interfaces

interface IAccount {
    name: string;
    balance?: number;
    status?: string;
    deposit?: (argument) => void;
}

let newAccount: IAccount = {
    name: "interfaces",
    balance: 69,
}

let new2Account: IAccount[];
new2Account = [{ name: "55" }, { name: '' }]
console.log(new2Account)


///Classes

class InvestmentAccount implements IAccount {
    constructor( public name:string , public balance:number) {
    }

    private withdraw(){

    }
}