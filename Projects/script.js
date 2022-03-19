for (let i = 1; i <= 20; i++){
  let colorCurrent = getRandomColor();
  // let sizeCurrent = 0;
  // do {
  //   sizeCurrent = getRandomInt(150);
  //   document.getElementById("project" + i).style.padding = sizeCurrent + "px";
  // } while (sizeCurrent < 100);
  document.getElementById("project" + i).style.borderColor = colorCurrent;
  document.getElementById("project" + i).style.color = colorCurrent;
  document.getElementById("project" + i).style.boxShadow = "0 0 1em " + colorCurrent;
}












function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }