////////UC1-Check employee present or not////////////
emp_Present=1;
empCheck1=Math.floor(Math.random()*10)%2;
if(empCheck1==emp_Present)
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
Emp_Full_Time_hrs=8;
Emp_Part_Time_Hr=4;
Num_of_Working_Days=20;
Emp_Rate_Per_Hr=20;
Emp_Hrs=0;
empCheck=Math.floor(Math.random()*10)%3;
///////////UC-3refactor the code to write a fuctiion to get work hours/////////////
function getEmployeeWorkingHrs(empCheck)
{
    switch(empCheck)
    {
        case Emp_FullPresent:
            console.log("Employee in Full Time present");
            return Emp_Full_Time_hrs;
        case Emp_partTime:
            console.log("Employee partTime");
            return Emp_Part_Time_Hr;
        default:
            console.log("Employee Absent");
            return 0;
    }
}

Emp_Hrs=getEmployeeWorkingHrs(empCheck);
EmpWage=Emp_Rate_Per_Hr*Emp_Hrs;
console.log("UC-3-refactor the code to implement the fuction")
console.log("Employee wage:"+EmpWage);
////////////UC4-Calculate wage for a month assuming 20 working days////////
for(let day=0;day<Num_of_Working_Days;day++)
{
    
    Emp_Hrs+=getEmployeeWorkingHrs(empCheck);
}
EmpWage+=Emp_Hrs*Emp_Rate_Per_Hr;
console.log("UC4-Calculate wage for a month assuming 20 working days so that The EmpWage For month="+EmpWage+ "And Emp hrous="+Emp_Hrs);






