function startWord() {
    const word = document.getElementById("word").innerText  // 코드캠프
    const lastword = word[word.length - 1] //프

    const myword = document.getElementById("myword").value  // 프랑스
    const firstword = myword[0]  //프

    if(lastword === firstword){
        document.getElementById("result").innerText = "정답입니다"
        document.getElementById("word").innerText = myword
    } else {
        document.getElementById("result").innerText = "틀렸습니다"
    }
}

// const result = (ment) => {
//     document.getElementById("result").innerText = ment
// }

// if(ment === "정답입니다"){
//     const newword = (ment2) => {
//         document.getElementById("word").innerText = ment2
// }
// }


const lottoStart = () => {
    console.log(1)
    const event = document.getElementById("wrapper__lotto__btn");

    if(event.classList.contains('clicked')) {
        event.innerText = 'Button';
        event.classList.remove('clicked');

    } else {
        event.classList.add('clicked');
        event.innerText = '행운겟';
    }
    // document.getElementById("wrapper__lotto__btn").innerHTML = "행운겟"
}

const menuHome = () => {
    document.getElementById("main").setAttribute("src", "home.html")
    document.getElementById("menuHome").style = "background-color: white; color: black;"
    document.getElementById("menuGame").style = "background-color: #298EB5; color: white;"
    document.getElementById("menuJukebox").style = "background-color: #298EB5; color: white;"
}

const menuGame = () => {
    document.getElementById("main").setAttribute("src","game.html")
    document.getElementById("menuGame").style = "background-color: white; color: black;"
    document.getElementById("menuHome").style = "background-color: #298EB5; color: white;"
    document.getElementById("menuJukebox").style = "background-color: #298EB5; color: white;"
}

const menuJukebox = () => {
    document.getElementById("main").setAttribute("src","jukebox.html")
    document.getElementById("menuJukebox").style = "background-color: white; color: black;"
    document.getElementById("menuGame").style = "background-color: #298EB5; color: white;"
    document.getElementById("menuHome").style = "background-color: #298EB5; color: white;"
}