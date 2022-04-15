function updateDonut(percent, element){
    //var percent = 45;
    if (percent < 50){
      offset = (360 / 100) * percent;
      element.parentNode.querySelector("#section3").style.webkitTransform = "rotate(" + offset + "deg)";
      element.parentNode.querySelector("#section3 .item").style.webkitTransform = "rotate(" + (180 - offset) + "deg)";
      element.parentNode.querySelector("#section3").style.msTransform = "rotate(" + offset + "deg)";
      element.parentNode.querySelector("#section3 .item").style.msTransform = "rotate(" + (180 - offset) + "deg)";
      element.parentNode.querySelector("#section3").style.MozTransform = "rotate(" + offset + "deg)";
      element.parentNode.querySelector("#section3 .item").style.MozTransform = "rotate(" + (180 - offset) + "deg)";
      element.parentNode.querySelector("#section3 .item").style.backgroundColor = "green";
    } else { 
      offset = ((360 / 100) * percent) - 180;
      element.parentNode.querySelector("#section3").style.webkitTransform = "rotate(180deg)";
      element.parentNode.querySelector("#section3 .item").style.webkitTransform = "rotate(" +  offset + "deg)";
      element.parentNode.querySelector("#section3").style.msTransform = "rotate(180deg)";
      element.parentNode.querySelector("#section3 .item").style.msTransform = "rotate(" +  offset + "deg)";
      element.parentNode.querySelector("#section3").style.MozTransform = "rotate(180deg)";
      element.parentNode.querySelector("#section3 .item").style.MozTransform = "rotate(" +  offset + "deg)";   
      element.parentNode.querySelector("#section3 .item").style.backgroundColor = "gray";
    }
    element.parentNode.querySelector("span").innerHTML = percent + "%";
  }
  
  function updateSlider(element) {
    if (element) {
      var parent = element.parentElement;
      var thumb = parent.querySelector('.range-slider__thumb'),
          bar = parent.querySelector('.range-slider__bar')

// function updatePercent(element) {
//     if (element) {
//       var parent = element.parentElement;
//       var plus = parent.getElementById('plus'),
//           minus = parent.getElementById('minus'),



    // var thumb = parent.querySelector('.btnPlus'),
    // bar = parent.querySelector('.btnMinus'),
          pct = element.value * ((parent.clientHeight - thumb.clientHeight) / parent.clientHeight);
      thumb.style.bottom = pct + '%';
      bar.style.height = 'calc(' + pct + '% + ' + thumb.clientHeight / 2 + 'px)';
      thumb.textContent = element.value + '%';
    }

    // pct = element.value * ((parent.clientHeight - plus.clientHeight) / parent.clientHeight);
    // plus.style.bottom = pct + '%';
    // minus.style.height = 'calc(' + pct + '% + ' + plus.clientHeight / 2 + 'px)';
    // plus.textContent = element.value + '%';
//   }

    updateDonut(element.value, element.parentNode);
  }
  (function initAndSetupTheSliders() {
      [].forEach.call(document.getElementsByClassName("container"), function(el) {
        var inputs = [].slice.call(el.querySelectorAll('.range-slider input'));
        inputs.forEach(function (input) {
            input.setAttribute('value', '50');
            updateSlider(input);
            input.addEventListener('input', function (element) {
                updateSlider(input);
            });
            input.addEventListener('change', function (element) {
                updateSlider(input);
            });
        });
      });
  }());

  const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const inputField = document.getElementById('input');

minusButton.addEventListener('click', event => {
  event.preventDefault();
  const currentValue = Number(inputField.value) || 0;
  inputField.value = currentValue - 10;
});

plusButton.addEventListener('click', event => {
  event.preventDefault();
  const currentValue = Number(inputField.value) || 0;
  inputField.value = currentValue + 10;
});