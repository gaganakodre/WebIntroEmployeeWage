////////UC1-Check employee present or not////////////
emp_Present=1;
empCheck=(Math.random()*10)%2;
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
empCheck=Math.floor(Math.random()*10)%3;
if(empCheck==Emp_FullPresent)
{
    console.log("Employee present");
    Emp_Hrs=8;
}
else if(empCheck==Emp_partTime)
{
    console.log("employee is in parttime");
    Emp_Hrs=4;
}
else
{
    console.log("Employee Absent");
    Emp_Hrs=0;
}
EmpWage=Emp_Rate_Per_Hr*Emp_Hrs;
console.log("Employee wage:"+EmpWage);