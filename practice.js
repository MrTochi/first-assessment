//IF STATEMENTS
// Voting Age Eligibility Checker
const votingAge=18
let userAge=18
userAge>=votingAge?console.log(`You are qualified for voting`):console.log(`You are not up to the voting age`)


//Even and Odd number identifier
let myNumber=15
let numberIdentifier=myNumber % 2
if(numberIdentifier===0)
{
  console.log('Your number is Even')
}
else if(numberIdentifier===1)
{
  console.log('Your number is Odd')
}
else(console.log(`Enter an integer`))


 //Vowel or Consonant identifier
 let letter=`a`
 if(typeof letter!== `string` || letter.length!==1)
 //This comparison was done incase a user enters something that isn't a letter
 {
    console.log(`you have not entered a letter`)
 }
 else if(letter===`a` || letter===`e` || letter===`i` || letter===`o` || letter===`u`
 )
 {
  console.log(`The letter you have entered is vowel`)
 }
 else(console.log(`The letter you have entered is consonant`))


 // number identifier
 let numberA=1
 let numberB=`b`
 if(typeof numberA !== `number`)
 {
  console.log(`The first value you entered is not a number`)
 }
 else if(typeof numberB !== `number`)
 {
  console.log(`The second value you entered  is not a number`)
 
 }
 else if(numberA>numberB)
 {
  console.log(`${numberA} is the largest`);
 }
 else if(numberA<numberB)
 {
  
  console.log(`${numberB} is the largest`);
 }
else(
  console.log(`Enter a number`))


 //Simple Calculator
  let operation=`division`
  let num1=10
  let num2=2

  if(typeof num1 !== `number` || num1===0 || typeof num2 !== `number` || num2===0)
  {
    console.log(`You should enter a integer`)
  }
  else if(operation===`addition`)
  {
    console.log(num1+num2)
  }
  else if(operation===`subtraction`)
  {
    console.log(num1-num2)
  }
  else if(operation===`multiplication`)
  {
    console.log(num1*num2)
  }
  else if(operation===`division`)
  {
    console.log(num1/num2)
  }
  else(console.log(`Please Enter operands`))

  
  // Days of the week printer
  let weekDay=0
  switch(true)
  {
    case (weekDay===1):
      console.log(`Today  is Sunday`)
      break;
    case (weekDay===2):
      console.log(`Today  is Monday`)
      break;
    case (weekDay===3):
      console.log(`Today  is Tuesday`)
      break;
    case (weekDay===4):
      console.log(`Today  is Wednesday`)
      break;
    case (weekDay===5):
      console.log(`Today  is Thursday`)
      break;
    case (weekDay===6):
      console.log(`Today  is Friday`)
      break;
    case (weekDay===7):
      console.log(`Today  is Saturday`)
      break;
    default:
      console.log(`Enter a valid value`)
  }

  let studentScore=0
  switch(true)
  {
    case (typeof studentScore !== `number`):
      console.log(`pease enter appropriate values`)
      break;
    case (studentScore<= 100 && studentScore>=70):
      console.log(`Your Grade is A`)
      break;
    case (studentScore<=69 && studentScore>=60):
      console.log(`Your Grade is B`)
      break;
    case (studentScore<=59 && studentScore>=50):
      console.log(`Your Grade is C`)
      break;
    case (studentScore<=49 && studentScore>=40):
      console.log(`Your Grade is D`)
      break;
    case (studentScore<=39 && studentScore>=0):
      console.log(`Your Grade is F`)
      break;
    default:
      console.log(`You didn't sit for the exam`)
  }


  //Rock,scissors and paper game
  let gameArray=[`rock`,`scissors`,`paper`]
  let userPick=`rock`
  let computerPick=gameArray[Math.floor(Math.random()*gameArray.length)]
  console.log(computerPick)
  switch(true)
  {
    case (userPick===`paper` && computerPick===`scissors` || userPick===`scissors` && computerPick===`rock` ||userPick===`rock` && computerPick===`paper` ):
      console.log(`You Win!`)
      break;
    case (userPick===computerPick):
      console.log(`It's a tie!`)
      break;
    default:
      console.log(`Computer Wins!`)
  }
  


  //Days of the month
  let monthValue=11
  switch(true)
  {
    case (monthValue===1):
      console.log(`We are in January`)
      break;
    case (monthValue===2):
      console.log(`We are in February`)
      break;
    case (monthValue===3):
      console.log(`We are in March`)
      break;
    case (monthValue===4):
      console.log(`We are in April`)
      break;
    case (monthValue===5):
      console.log(`We are in May`)
      break;
    case (monthValue===6):
      console.log(`We are in June`)
      break;
    case (monthValue===7):
      console.log(`We are in July`)
      break;
    case (monthValue===8):
      console.log(`We are in August`)
      break;
    case (monthValue===9):
      console.log(`We are in September`)
      break;
    case (monthValue===10):
      console.log(`We are in October`)
      break;
    case (monthValue===11):
      console.log(`We are in November`)
      break;
    case (monthValue===12):
      console.log(`We are in December`)
      break;
    default:
      console.log(`There is no month atrributed to this value`)
  }


//Simple Menu
 let option1=`You have won 1million naira`
 let option2=`You have won a ticket to dubai`
 let option3=`You have gotten a scholarship to the uk`
 let option4=`sorry, you won nothing`
 let userPick1=option1

 console.log(`Pick from options 1-4`)
 switch(true)
 {
  case userPick1===option1:
    console.log(`Congratulations ${option1}`)
    break;
  case userPick1===option2:
    console.log(`Congratulations ${option2}`)
    break;
  case userPick1===option3:
    console.log(`Congratulations ${option3}`)
    break;
  case userPick1===option4:
    console.log(`sorry ${option4}`)
    break;
  default:
    console.log(`make a pick from option 1-4`) 
 }
 
  
//FOR LOOPS
//Number Summation
let myNumber2=10
let numberSum=0
for(let i=1;i<myNumber2;i++ )
{
  numberSum+=i
}
console.log(`The total of numbers between 1-10 is ${numberSum}`)
// we are logging it here so that it will calculate only when all the numbers have


//Countdown Timer
let givenNumber=1
for(let i=10; i>=givenNumber; i--)
{
  console.log(`Timer`,i)
}


//2 times Multiplicatin table
let myNumber3=12
for(let i=1;i<=myNumber3;i++ )
{
  let numbermultiply=i*2
  console.log(numbermultiply)
}



//Array Element printer
let myArray=[`food`,`book`,`sex`,`work`,`design`]
for(let i=0; i<myArray.length; i++)
{
  console.log(myArray[i])
}


//String Repeater
for(let i=1; i<=5; i++)
{
  console.log(`Hello,World!`)
}



// FUNCTION
// Greeter Function
function greeterFunction(username)
{
  console.log(`Hello ${username}, welcome to javascript`)
}
greeterFunction(`okonkwo tochukwu`)



// Area of a triangle
function areaOftriangle(base,height)
{
   let area=(base*height)/2
   typeof base!== `number`|| typeof height!== `number`?console.log(`please enter a number`):console.log(`${area} is the area of the triangle`)
   return area
}
areaOftriangle(5,`10`)





// FUNCTIONS PARAMETER 
// Number Adder
function numberSum(num1,num2)
{
  let addition=num1+num2
 
  if(typeof num1 !== `number` || typeof num2!==`number`)
  {
    console.log(`Enter an integer`)
  }
  else(console.log(`Your sum of num1 and num2 is:${addition}`))

}
numberSum(10,4)


// Word lenght Checker
let myText=`javascript`
function lenghtChecker()
{
  let textLenght=myText.length
  return textLenght
}
console.log(lenghtChecker())


// Age diffference calculator
function ageDifferencecalculator(dob1,dob2)
{
  let ageDifference=dob1-dob2
  return ageDifference
}
console.log(ageDifferencecalculator(1995,1990))


 //Temperature Converter
function CelciusAndfanhereit()
{
  
function celciusTofahrenheit(celcius)
{
  let result=(celcius *(9/5)+32)
  return result.toFixed(2)
}
console.log(`The value of 25 degree celcius is ${celciusTofahrenheit(25)} fanhereit`)


function fahrenheitTocelcius(fanhereit)
{
  let result=(fanhereit-32)*5/9
  return result.toFixed(2)
}
console.log(`The value of 77 degree fanhereit is ${fahrenheitTocelcius(77)} celcius`)
}
CelciusAndfanhereit()

//Currency Converter
function currencyConverter(amountDollar,exchangeRatenaira)
{
  let converter=amountDollar*exchangeRatenaira
  typeof amountDollar !== `number`?console.log(`Please enter a number`):console.log(`Your dollar to naira rate is ${converter}Naira`)
  return converter
}
currencyConverter(5,1200)


// OBJECT LITERALS
let myDetails={
  userName:`osteo bob`,
  userAge:32,
  occupation:`Ashawo`
}


// ARRAYS
// Sort a given array of numbers in ascending and descending order
// ASCENDING
let numberArray=[10,8,4,5,7,1,9,14,6,11]
numberArray.sort(function(a,b)
{
  return a-b
})
console.log(numberArray)
// DESCENDING
let number1Array=[10,8,4,5,7,1,9,14,6,11]
numberArray.sort(function(a,b)
{
  return b-a
})
console.log(number1Array)


// Word Finder
let myWords=[`Eze`,`Goes`,`To`,`School`]
let output=myWords.includes(`book`)
console.log(output)


// Largest Number Finder
let number2Array=[10,8,4,5,7,1,9,14,6,11]
let result=Math.max(...numberArray)
console.log(result)


/// Duplicate Remover
let number3Array=[10,8,4,5,7,1,9,14,6,1,8,11]
let mySet=new Set(numberArray)
numberArray=[...mySet]
console.log(numberArray)


// Array Reverser
let number4Array=[10,8,4,5,7,1,9,14,6,11]
let reversedNumber=numberArray.reverse()
console.log(reversedNumber)


/// WHILE LOOPS

// NUMBER COUNTER
let i=1
while(i<=10)
{
  console.log(i)
  i++
}

// NUMBER FACTOR FINDER
let divisor=1
let number=13
while(divisor<=number)
{
  if(number%divisor===0)
  {
    console.log(divisor)

  }
  divisor++
}


// SIMPLE NUMBER GUESSING GAME
let computerNum=Math.ceil(Math.random()*1+1)
let attempt=1
while(attempt<4){
    let myGuess=prompt(`Choose a number from 1-2; you have ${4-attempt} trials`)
    myGuess=Number(myGuess)
   if(myGuess===computerNum)
    {
        
        console.log(`congratulations!:you guessed right after ${attempt} attempts`)
        break;
    }
    
    else{
        console.log(`Try again:you have ${attempt} attempts left`)
        attempt++
        
        if(attempt===4){
        console.log(`Out of trials:the correct number was ${computerNum}`)
        break;
        }
    }
}



// MATH OBJECT

// Random number generator
let myRandomNumber=Math.round((Math.random()*1000)+1000)
console.log(myRandomNumber)


//Quadratic Equation Solver
function quadraticEquation(a,b,c)
{
  let squareRootelements=(Math.pow(b,2)-(4*a*c))
  if(squareRootelements>=0)
  {
    root1=(-b+Math.sqrt(squareRootelements))/2*a
    root2=(-b-Math.sqrt(squareRootelements))/2*a
    console.log(`X is either ${root1} or ${root2}`)
  }
  else(console.log(`negative values,hence no real roots`))
}
quadraticEquation(1,3,2)


// Distance Between Points
function pointDistance(x1,x2,y1,y2)
{
  let x=Math.pow((x2-x1),2)
  let y=Math.pow((y2-y1),2)
  let distance=Math.sqrt(x+y)
  return distance
}
console.log(pointDistance(1,4,2,6))




// Trigonometric Calculator
function calculation(degrees){
  let myRadians=degrees*(Math.PI/180)
  let cosine=Math.cos(myRadians)
  let sine=Math.sin(myRadians)
  let tangent=Math.tan(myRadians)
  console.log((sine,cosine,tangent).toFixed(4))
}
calculation(45)


// Finance Calculator
// Simple Intrest

function simpleIntrest(principal,rate,time){
  let x=(principal*rate*time)/100
  return x
}
console.log(simpleIntrest(1000,5,2))

// Compound intrest
function compoundIntrest(principal,rate,time,compundingFrequency){
  rate=rate/100
let loan=principal*Math.pow((1+(rate/compundingFrequency)),(compundingFrequency*time))
let cI=loan-principal
return cI.toFixed(2)
}
console.log(compoundIntrest(1000,5,2,4))

// Loan Payment


