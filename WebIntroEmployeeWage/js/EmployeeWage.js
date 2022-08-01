////////UC1-Check employee present or not////////////
const IS_ABSENT = 0
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT) 
{
    console.log("UC1 Employee is Absent");
    return;
 } 
 else
  {
     console.log("UC1 Employee is PRESENT")
  }
//////////////////UC2-to check parttime with full and absent//////////////////
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HRS=4;
const FULL_TIME_HRS=8;
const WAGE_PER_HOURS=20;
let empHrs=0;
//const MAX_HRS_IN_MONTH=160;//UC8
//let NUM_OF_WORKING_DAYS=20;//UC8
let empDailyWageArr1=new Array();
let empDailyWageMap1=new Map();
let empWageHoursAndDayArray = new Array(); 

empCheck= Math.floor(Math.random() * 10) % 3;
switch(empCheck)
{
    case IS_PART_TIME:
        empHrs=PART_TIME_HRS;
        break;
        case IS_FULL_TIME:
            empHrs=FULL_TIME_HRS;
            break;
            default:
                empHrs=0;

}
let empWage=empHrs*WAGE_PER_HOURS;
console.log("UC2 empwage:"+empWage);
///////////UC-3 refactor the code to write a fuctiion to get work hours/////////////
function getWorkingHours(empCheck)
{
    switch(empCheck)
    {
        case IS_PART_TIME:
            return PART_TIME_HRS;
        case IS_FULL_TIME:
            return FULL_TIME_HRS;
        default:
            return 0;
    }
}
empHrs=0;
empCheck=Math.floor(Math.random() * 10) % 3;
empHrs=getWorkingHours(empCheck);
empWage=empHrs * WAGE_PER_HOURS;
console.log("EMPWAGE: "+empWage);

////////////UC4-Calculate wage for a month assuming 20 working days////////
NUM_OF_WORKING_DAYS=20;
empHrs=0;
empWageo=0;
empArray=new Array();
let day=0;
for(day=0;day<NUM_OF_WORKING_DAYS;day++)
{
    empCheck=Math.floor(Math.random() * 10) % 3;
    empHrs+=getWorkingHours(empCheck);
    empHours=getWorkingHours(empCheck); 
    empWageo=empHours*WAGE_PER_HOURS;
    console.log("day:"+day+"\tempwage:"+(empWageo));
    empArray.push(empWageo)
    empWageHoursAndDayArray.push(
        //UC10-JS
        {
            dayNumOb : day,
            empHoursOb : empHours,
            wageOb : empWageo,
            toString()
            {
                return "\nEmployee Wage Details Of Day:"+ this.dayNumOb + "\tHours:"+this.empHoursOb + "\tWage:"+ this.wageOb; 
            }
            
        }
    );
}
console.log(" UC-6array");
//console.log(empArray.forEach(displaywage));
empArray.forEach(function(empWageo) {
    
});
console.log(empArray.toString());
empWage=empHrs*WAGE_PER_HOURS;
console.log(" UC4 Total hrs:"+ +empHrs+ "Emp wage: " + empWage);
function displaywage(empWageo)
{
    console.log("\tdailywage:"+empWageo)

}
///Uc5-Calculating till mmamximum working hours and days reaches using while loop//////////
MAX_HRS_IN_MONTH=100;
NUM_OF_WORKING_DAYS=10;
let totalEmpHrs=0;
let totalWorkingDays=0;
while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS)
{

    totalWorkingDays++;
    empCheck=Math.floor(Math.random()*10) % 3;
    totalEmpHrs+=getWorkingHours(empCheck);
    empWage3=totalEmpHrs*20;
}
empWage=totalEmpHrs*WAGE_PER_HOURS;
console.log("UC5 - total-days:" + totalWorkingDays + "\ttotal_hrs" + totalEmpHrs + "\temp wage: " + empWage);
///////////UC-6 Store daily wage along with totalwage////////////

function calcDailyWage(empHrs)
{
    return empHrs*WAGE_PER_HOURS;
}
MAX_HRS_IN_MONTH=160;
NUM_OF_WORKING_DAYS=20;
totalEmpHrs=0;
totalWorkingDays=0;
let empDailyWageArray=new Array();
while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    empCheck=Math.floor(Math.random() * 10) % 3;
    totalEmpHrs+=getWorkingHours(empCheck);
    totalEmpHrs+=empHrs;
    res=calcDailyWage(empHours)
    empDailyWageArray.push(calcDailyWage(empHours));
    empDailyWageArray.forEach(display)
}
function display(item)
{
    console.log(item)
}
empWage=totalEmpHrs*WAGE_PER_HOURS;
console.log("UC6 - total-days:" + totalWorkingDays + "\ttotal_hrs" + totalEmpHrs + "\temp wage: " + empWage);
///Array Helper fuctions////////////
//UC-7A-calculate the total wage using array foreach a travesal or reduce method/////////
let totEmpWage=0;
function sum(dailyWage)
{
    totEmpWage+=dailyWage;

}
empArray.forEach(sum);
console.log("UC7A- TotalDay: " +totalWorkingDays + " Total hrs: " + totalEmpHrs +" EmployeeWage:" +totEmpWage);
function totalWages(totalWage, empWage)
{
    return totalWage +=empWage;
}///reduce it will reduce array into single value
console.log("UC7A -Emp Wage with reduce: " +empArray.reduce(totalWages,0));
//UC7_B shiw the day along wiht daily wage using array map helper fuction////
let dailyCntr=0;
function mapDayWithWage(dailyWage)
{
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}
//map fuction will create new array from calling a fuction every array elements//
let mapDayWithWageArr = empArray.map(mapDayWithWage);
console.log("uc7B daily wage map");
console.log(mapDayWithWageArr);
///UC7C_Show days when full time wage of 160 were earned///////
function fulltimeWage(dailyWage)
{//it returns true if the specified string is present in he array
    return dailyWage.includes("160");
}//filter it will creates new array filled with the elements from fulltimewage fuction
let fulltimeWageArr=mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C - daily wage filter when fulltime wage earned");
console.log(fulltimeWageArr);
///uc7Dfind the first occurence when full time wage was earned using fine fuctionfunction//// 
function findFullTimeWage(dailyWage)
{
    return dailyWage.includes("160")
}
console.log("uc7D find the first occurence when full time wage was earned using fine fuctionfunction "+mapDayWithWageArr.find(findFullTimeWage));
///UC7E-check if the every element of fulltime wage is truly holding full time wage///
//it will return true or false////
function isFullTimeWage(dailyWage)
{
    return dailyWage.includes("160")
}
console.log("UC7E-check if the every element of fulltime wage is truly holding full time wage: "+fulltimeWageArr.every(isFullTimeWage));
//UC7-f check if there any parttime wage//
function isanyPartTimeWage(dailyWage)
{
    return dailyWage.includes("80")
}
console.log("UC7-f check if there any parttime wage: "+mapDayWithWageArr.some(isanyPartTimeWage));
//UC7-G find the number of days the employee worked//
function totalDaysWorked(NumOfDays,dailyWage)
{
    if(dailyWage>0)return NumOfDays + 1;
    return NumOfDays;
}
console.log("UC7-G find the number of days the employee worked: "+empArray.reduce(totalDaysWorked,0));
//UC8-refactor the uc7 and uc8//
//day=1;
empDailyWageMap1.set(day,empWage); 
console.log("Uc8 empwage map totalhrs: "+(day-1)+"\tTotalWage: "+Array.from(empDailyWageMap1.values()).reduce(totalWages,0));
console.log("UC9A-Total Wage Using wage map object: \n"+(day-1)+" TotalWage:"+ (Array.from(empDailyWageMap1.values())).filter(wage=>wage>0).reduce(totalWages,0))
let empDayAndHoursMap = new Map();
empDayAndHoursMap.set(day,empHrs); 
console.log("UC9A-Total Hours Using Hours map object: \n "+ (Array.from(empDayAndHoursMap .values())).reduce(totalWages,0));
///Show the full workings days, part working days and no working days///
let nonWorkingDaysArray = new Array(); 
let partWorkingDaysArray = new Array(); 
let fullWorkingDaysArray = new Array(); 
console.log("HrsMap:\n"+(Array.from(empArray.values())).join(" "))
empArray.forEach(    
    (value,key,map) => 
    {
        if( value == 160 ) 
        fullWorkingDaysArray.push(key);
        else if( value == 80 ) 
        partWorkingDaysArray.push(key);
        else 
        nonWorkingDaysArray.push(key);
})
console.log("UC9B-FullTime work days: "+fullWorkingDaysArray);
console.log("UC9B-PartTime work days: "+partWorkingDaysArray);
console.log("UC9B-NonTime work days: "+nonWorkingDaysArray);
///////////////////////////////UC-10 Ability to store the Day, Hours Worked and Wage Earned in a single object.///////////////////////////////

console.log("UC10-Js Object Used to store the Day, Hours Worked and Wage Earned\n"+empWageHoursAndDayArray);
///11A Calc total Wage and total hours worked///
let TotalWage=(total,dailywage)=>
{
    return total += dailywage.wageOb; 
}
let totalHoursUsingArrow = empWageHoursAndDayArray.filter(daily=>daily.empHoursOb>0).reduce(TotalWage,0);
console.log("UC11A- Total Hours Using Object And Seperate Arrow Function:",totalHoursUsingArrow)
///////////////////////////////UC-11A Calc total Hours and total hours worked///////////////////////////////
let getTotalHourUsingArrow=(total,dailywage)=>
{
    return total += dailywage.empHoursOb; 
}
let totalHoursArrow = empWageHoursAndDayArray.filter(daily=>daily.empHoursOb>0).reduce(getTotalHourUsingArrow,0);
console.log("UC11A- Total Hours Using Object And Seperate Arrow Function:",totalHoursArrow)
///////////////////////////////UC-11B. Show the full workings days using foreach///////////////////////////////
console.log("UC11B- Show the full workings days using foreach using object and arrow function");
empWageHoursAndDayArray.filter(dailyHoursAndWage=>dailyHoursAndWage.empHoursOb==8).forEach(
    dailyHoursAndWage=>console.log("UC11B- Full workings days are:"+dailyHoursAndWage.dayNumOb)
)
///////////////////////////////UC-11C Show Part working days using Map by reducing to String Array///////////////////////////////
console.log("UC11C- Show the PartTime workings days using Map using object and arrow function");
let partTimeDaysUsingObject=empWageHoursAndDayArray.filter(dailyHoursAndWage=>dailyHoursAndWage.empHoursOb==4).map(
    dailyHoursAndWage=>dailyHoursAndWage.toString()); 
    console.log("UC11C- Total PartTime Using Object And Arrow Function:"+partTimeDaysUsingObject)
    ///////////////////////////////UC-11C Non working days using Map FUnction///////////////////////////////
console.log("UC11D- Show the Non workings days using Map function");
let nonWorkingDaysUsingObject=empWageHoursAndDayArray.filter(dailyHoursAndWage=>dailyHoursAndWage.empHoursOb==0).map(
    dailyHoursAndWage=>dailyHoursAndWage); 
    console.log("UC11D- Non workings days using Map function:"+nonWorkingDaysUsingObject)
