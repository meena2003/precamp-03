if("철수" === "철수"){
    console.log("철수입니다")
} else {
    console.log("철수가 아닙니다")
}
VM1017:2 철수입니다
undefined
let age = 8
undefined
if(age > 20){
    console.log("성인입니다")
} else {
    console.log("성인이 아닙니다")
}
VM1212:4 성인이 아닙니다
undefined
if(age > 20){
    console.log("성인입니다.")
} else if(age > 7){
    console.log("학생입니다.")
} else {
    console.log("어린이입니다.")
}
VM1656:4 학생입니다.
undefined
age = 3
3
if(age > 20){
    console.log("성인입니다.")
} else if(age > 7){
    console.log("학생입니다.")
} else {
    console.log("어린이입니다.")
}
VM1724:6 어린이입니다.
undefined
const profile = {
    name = "철수",
    age = 25
    school = "다람쥐 초등학교"
}
VM1938:4 Uncaught SyntaxError: Unexpected identifier
const profile = {
    name = "철수",
    age = 25,
    school = "다람쥐 초등학교"
}
VM1946:2 Uncaught SyntaxError: Invalid shorthand property initializer
const profile = {
    name: "철수",
    age: 25,
    school: "다람쥐 초등학교"
}
undefined
profile.age
25
profile.school
"다람쥐 초등학교"
profile.name
"철수"
if(profile.age >= 20){
    console.log("성인입니다.")
} else if(19 >= profile.age >= 8){
    console.log("학생입니다.")
} else {
    console.log("어린이입니다.")
}
VM2406:2 성인입니다.
undefined
if(profile.age >= 20){
    console.log("성인입니다.")
} else if(profile.age > 7){
    console.log("학생입니다.")
} else {
    console.log("어린이입니다.")
}
VM2540:2 성인입니다.
undefined