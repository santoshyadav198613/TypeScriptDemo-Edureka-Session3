class Employee implements IEmployeeOps {
    private id: number;
    readonly name: string;
    protected age: number;
    address: IEmployee;
    // address1: string;
    // address2: 
    dob: Date;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getId() {
        return this.id;
    }

    add() {

    }
    edit() {

    }

    delete() {

    }



    // get empid() {
    //     return this.id
    // }
}


let emp = new Employee(1, 'test');
console.log(emp.name);
console.log(emp.getId());
console.log(emp.getId());

emp.address.address1 = 'test';
emp.address.pin =23;


interface IEmployee {
    address1: string
    address2: string;
    pin: number
}


interface IEmployeeOps {
    add();
    edit();
    delete();
}