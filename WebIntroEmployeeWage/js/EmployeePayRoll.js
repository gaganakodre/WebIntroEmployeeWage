//Ability to create Employee Payroll Data with id, name and salary
class EmployeePayRollData
{
    //property
    id;
    salary;
    gender;
    startDate;

    //constructor
    constructor(id,name,salary)
    {
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
    //getter and setter
    //using getter and seeter we can acess name and we can apply logic here also
    get name() {return this._name; }
    set name(name) {
        console.log("To set the name: "+name)
        this._name=name;
    }
    //method
    toString()
    {
        return "id:"+this.id +",name: "+this.name +",salary" +this.salary;

    }
}
let employePayrollData=new EmployeePayRollData(1, "janardhana",90876);
console.log(employePayrollData.toString());
//if want to change the name and id
employePayrollData.id=0;
employePayrollData.name="jonny"
console.log(employePayrollData.toString());
