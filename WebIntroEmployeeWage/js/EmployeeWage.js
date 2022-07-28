////////UC1-Check employee present or not////////////
emp_Present=1;
empCheck=Math.floor(Math.random()*10)%2;
if(empCheck==emp_Present)
{
    console.log("Employee present");
}
else
{
    console.log("Employee Absent");
}
//////////////////UC2-to check parttime with full and absent//////////////////
Emp_FullPresent=1;
Emp_partTime=2;
Emp_Rate_Per_Hr=20;
switch(empCheck)
{
    case Emp_FullPresent:
        console.log("Employee in Full Time present");
        Emp_Hrs=8;
        break;
    case Emp_FullPresent:
        console.log("Employee partTime");
        Emp_Hrs=4;
        break;
    default:
        console.log("Employee Absent");
        Emp_Hrs=0;
        break;
}
EmpWage=Emp_Rate_Per_Hr*Emp_Hrs;
console.log("Employee wage:"+EmpWage);


