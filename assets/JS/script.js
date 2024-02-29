const toggleBtn = $(`#toggle`)

// console.log(toggleBtn)


//change from dark to light
let isDark=False

toggleBtn.on('click', function () {
    if (isDark) {
      $('body').css({ 'background-color': 'black', color: 'white' });
      isDark = !isDark;
    } else {
      $('body').css({ 'background-color': 'white', color: '#black' });
      isDark = !isDark;
    }
  });