(function() {

//setting global variables
  const $colorPicker = document.getElementById("colorPicker");
  const $sizePicker = document.getElementById("sizePicker");
  const $table = document.getElementById("pixelCanvas");

//adding default listener to select grid size
  $sizePicker.addEventListener('submit', function() {
    event.preventDefault();

    //getting html input data for draw grid
    let width = document.getElementById("inputWidth").value;
    let height = document.getElementById("inputHeight").value;
    makeGrid(width, height);
  })

  //draw grid
  function makeGrid(height, width) {
    $table.innerHTML = '';
    for (let row = 1; row <= width; row++) {
      let newRow = $table.insertRow();
        for (let cell= 1; cell <= height; cell++ ) {
          let newCell = newRow.insertCell();
          newCell.onclick = changeColor;
        }
    }
  }
  //changing color of clicked cell to current color
  function changeColor() {
    this.style.background = $colorPicker.value;
  }

})();
