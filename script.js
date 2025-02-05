const body = document.querySelector('body') 
const years = document.querySelector('.yearAns')
const months = document.querySelector('.monthAns')
const days = document.querySelector('.dayAns')
const calc = document.querySelector('button')
const date = new Date()
const curYear = date.getFullYear()
calc.addEventListener("click",function(){
const birthday = document.querySelector('.day').value
const birthmonth = document.querySelector('.month').value
const birthyear = document.querySelector('.year').value
let date1 = new Date(birthyear+"-"+birthmonth+"-"+birthday)
if(date1>0){
let age = date-date1-(parseInt((curYear-birthyear)/4)*86400000)
      years.textContent = parseInt(age / 31536000000)
      months.textContent = parseInt((age % 31536000000)/2628002880)
      days.textContent = parseInt(((age % 31536000000)%2628002880)/86400000)
}
else{
    if(birthday && birthmonth && birthyear){
   document.querySelector('.titles-day').classList.add("invalid") 
   document.querySelector('.titles-month').classList.add("invalid") 
   document.querySelector('.titles-year').classList.add("invalid")
    }
    else{
        document.querySelector('.titles-day').classList.add("empty") 
        document.querySelector('.titles-month').classList.add("empty") 
        document.querySelector('.titles-year').classList.add("empty")
    } 
}})