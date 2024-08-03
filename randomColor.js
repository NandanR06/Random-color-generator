randomGenerate = () => {
    const ranNum = Math.floor(Math.random() * 16772155);
    const hexNum = "#" + ranNum.toString(16);
    console.log(hexNum);
    document.body.style.backgroundColor = hexNum;
    document.querySelector("#btn").style.backgroundColor = hexNum;
    document.querySelector("#text").innerHTML=hexNum;
}

document.querySelector("#btn").addEventListener("click", randomGenerate)

randomGenerate();
