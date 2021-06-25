let count = 10
setInterval(() => {
    if(count >= 0){
        console.log(count)
        count = count - 1
    }    
}, 1000)
189
VM1737:4 10
VM1737:4 9
VM1737:4 8
VM1737:4 7
VM1737:4 6
VM1737:4 5
VM1737:4 4
VM1737:4 3
VM1737:4 2
VM1737:4 1
VM1737:4 0
// 10초 타이머


let count = 180
undefined
180  /60
3
180 % 60
0
//  % 는 '나머지'를 구하는 연산기호
undefined
179 / 60
2.9833333333333334
Math.floor(179 / 60)
2
179 % 60
59
setInterval(() => {
    if(count >= 0){
        const minutes = Math.floor(count / 60)
        const seconds = count % 60
        console.log(minutes + " : " + seconds)
        count = count - 1
    }
}, 1000)
669
// 3분 타이머