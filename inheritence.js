class TeamMember{
    name;
    
    address = 'BD';
    constructor(name,address){
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember{
    groupSupportTime;
    designartion = 'Support Web Dev';
    constructor(name,address,time){
        super(name,address);
        this.groupSupportTime = time;
    }
    startSession(){
        console.log(this.name,'start a support session');
    }
}

class StudentCare extends TeamMember {
    designartion = 'Care Web Dev';
    buildARoutine (Student){
        console.log(this.name,'Build A Routine for',Student)
    }
}



class Neptune extends TeamMember {
    codeEditor;
    designartion = 'Neptune App Dev';
    constructor(name,address,editor){
        super(name,address);
        this.codeEditor = editor;
    }
    releaseApp (version){
        console.log(this.name,'release app version',version)
    }
}

const aamir = new Support('Amir Khan','India',11);
const salman = new Support('Salman Khan','Dubai',4); 

const alia = new StudentCare('Alia Bhatt','Mumbai',9);
const ash = new Neptune('Ash','Mumbai','Android Studio')
ash.releaseApp('2.0.4');
// console.log(ash.name);


const nums = [1,2,3,4,5]; let output = nums.filter(n => n%2 ); console.log(output);

console.log(min( [1,3,2 ])) 