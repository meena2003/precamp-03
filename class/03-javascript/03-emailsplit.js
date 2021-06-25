const classmates = ["철수", "영희", "훈이"]
undefined
classmates[0]
// "철수"
classmates[1]
// "영희"
const email = "codecamp@gamil.com"
email.length
// 18
email[0]
// "c"
email[1]
// "o"
email.includes("@")
// true
email.split("@")
// (2) ["codecamp", "gamil.com"]
email.split("@")[0]
// "codecamp"
email.split("@")[1]
// "gamil.com"
const front = email.split("@")[0]

const bacl = email.split("@")[1]

front
// "codecamp"
bacl
// "gamil.com"
const newFront = []

newFront.push(front[0])
// 1
newFront.push(front[1])
// 2
newFront.push(front[2])
// 3
newFront.push(front[3])
// 4
newFront
// (4) ["c", "o", "d", "e"]
newFront.push("*")
// 5
newFront.push("*")
// 6
newFront.push("*")
// 7
newFront.push("*")
// 8
newFront
// (8) ["c", "o", "d", "e", "*", "*", "*", "*"]
newFront.join("")
// "code****"
newFront.join("") + "@" + bacl 
// "code****@gamil.com"
const result = newFront.join("") + "@" + bacl 

