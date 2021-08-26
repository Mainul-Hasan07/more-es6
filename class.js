class Support {
    name;
    designartion = 'Support Web Dev';
    address = 'BD';
    constructor(name,address){
        this.name = name;
        this.address = address;
    }
    startSession(){
        console.log(this.name,'start a support session');
    }
}

const aamir = new Support('Amir Khan','India');
const salman = new Support('Salman Khan','Dubai'); 
// console.log(aamir,salman);
aamir.startSession();
salman.startSession();