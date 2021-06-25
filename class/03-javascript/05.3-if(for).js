for( let i=0 ; i<5 ; i=i+1 ){
    console.log("안녕하세요")    
}
5VM4554:2 안녕하세요
undefined
const classmate = ["철수", "영희", "훈이"]
undefined
classmate[0]
"철수"
classmate[1]
"영희"
classmate[2]
"훈이"
for( let i=0; i<3; i=i+1 ){
    console.log(classmate[0] + "입니다.")
}
3VM4950:2 철수입니다.
undefined
for( let i=0; i<3; i=i+1 ){
    console.log(classmate["copyWithin"]] + "입니다.")
}
VM5016:2 Uncaught SyntaxError: missing ) after argument list
for( let i=0; i<3; i=i+1 ){
    console.log(classmate[i] + "입니다.")
}
VM5041:2 철수입니다.
VM5041:2 영희입니다.
VM5041:2 훈이입니다.
undefined
classmate.length
3
for( let i=0; i<length; i=i+1 ){
    console.log(classmate[i] + "입니다.")
}
undefined
for( let i=0; i<classmate.length; i=i+1 ){
    console.log(classmate[i] + "입니다.")
}
VM5142:2 철수입니다.
VM5142:2 영희입니다.
VM5142:2 훈이입니다.
undefined
const profile2 = [
    { name: "철수", age: 8 },
    { name: "영희", age: 10 }
]
undefined
profile2[0].name
"철수"
profile2[0].age
8
profile2[1].name
"영희"
profile2[1].age
10
profile2[0}
VM5608:1 Uncaught SyntaxError: Unexpected token '}'
profile2[0]
{name: "철수", age: 8}
const fruits = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스켓" },
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" },
]
undefined
for( let i=0; i>fruits.length; i=i+1 ){
    console.log(fruits[i].number + ". " + fruits[i].title)
}

undefined
for( let i=0; i<fruits.length; i=i+1 ){
    console.log(fruits[i].number + ". " + fruits[i].title)
}

VM5921:2 1. 레드향
VM5921:2 2. 샤인머스켓
VM5921:2 3. 산청딸기
VM5921:2 4. 한라봉
VM5921:2 5. 사과
VM5921:2 6. 애플망고
VM5921:2 7. 딸기
VM5921:2 8. 천혜향
VM5921:2 9. 과일선물세트
VM5921:2 10. 귤
undefined