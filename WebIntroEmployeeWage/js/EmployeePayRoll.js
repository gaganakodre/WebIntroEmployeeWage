//Ability to create Employee Payroll Data with id, name and salary
class EmployeePayRollData
{
    //property
    id;
    salary;
    gender;
    startDate;

    //constructor
    //constructor(id,name,salary)
    //{
        //this.id=id;
        //this.name=name;//uc12
        //this.salary=salary;//uc12
    //}
    //parameterized constructor
    //using spread operator
    constructor(...params)
    {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
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
        const options = { year: 'numeric', month: 'long', day: 'numeric'};
        const empDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return `Id: ${this.id} \tName: ${this.name} \tSalary: ${this.salary},\tGender: ${this.gender}, \tStart Date: ${empDate}`;
        return "id:"+this.id +",name: "+this.name +",salary" +this.salary +",gender"+this.gender+ ",startDate"+this.startDate;

    }
}
let employePayrollData=new EmployeePayRollData(1, "janardhana",90876,);
console.log(employePayrollData.toString());
//if want to change the name and id
employePayrollData.id=0;
employePayrollData.name="jonny"
console.log(employePayrollData.toString());
employePayrollData=new EmployeePayRollData(1, "janardhana",90876,"M",new Date());
console.log(employePayrollData.toString());