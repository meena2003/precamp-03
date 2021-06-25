const profile{
    name: "철수",
    age: 25,
    school: "서울대학교",
}
VM2731:1 Uncaught SyntaxError: Missing initializer in const declaration
const profile = {
    name: "철수",
    age: 25,
    school: "서울대학교",
}
undefined
if(profile.age >= 20){
    console.log("성인입니다.")
} else if(profile.age > 7){
    console.log("청소년입니다.")
} else {
    console.log("어린이입니다.")
}
VM3126:2 성인입니다.
undefined
age:10
10
if(profile.age >= 20){
    console.log("성인입니다.")
} else if(profile.age > 7){
    console.log("청소년입니다.")
} else {
    console.log("어린이입니다.")
}
VM3166:2 성인입니다.
undefined
let profile = {
    name: "철수",
    age: 25,
    school: "서울대학교",
}
VM3253:1 Uncaught SyntaxError: Identifier 'profile' has already been declared
let profiletest = {
    name: "영희",
    age: 25,
    school: "서울대학교",
}
undefined
if(profiletest.age >= 20){
    console.log("성인입니다.")
} else if(profiletest.age > 7){
    console.log("청소년입니다.")
} else {
    console.log("어린이입니다.")
}
VM3316:2 성인입니다.
undefined
age:10
10
if(profiletest.age >= 20){
    console.log("성인입니다.")
} else if(profiletest.age > 7){
    console.log("청소년입니다.")
} else {
    console.log("어린이입니다.")
}
VM3336:2 성인입니다.
undefined
age = 10
10
if(profiletest.age >= 20){
    console.log("성인입니다.")
} else if(profiletest.age > 7){
    console.log("청소년입니다.")
} else {
    console.log("어린이입니다.")
}
VM3367:2 성인입니다.
undefined
profile.age = 10
10
profiletest.age = 10
10
if(profiletest.age >= 20){
    console.log("성인입니다.")
} else if(profiletest.age > 7){
    console.log("청소년입니다.")
} else {
    console.log("어린이입니다.")
}
VM3461:4 청소년입니다.
undefined
profile.age = 25
25
if(profile.age >= 20){
    console.log("성인입니다.")
} else if(profile.age > 7){
    console.log("청소년입니다.")
} else {
    console.log("어린이입니다.")
}
VM3535:2 성인입니다.
undefined