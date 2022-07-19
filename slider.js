const ranges = document.querySelectorAll('input[type="range"]');
const usage = document.getElementById("usage");
const remaining = document.getElementById("storageRemaining");

if (ranges) {
  [].slice.call(ranges).forEach(function (range) {
    setFill(range, range.value);
    range.oninput = function (e) {
      usage.innerHTML = `${this.value} GB`;
      let result = 1000 - ranges[0].value;
      remaining.innerHTML = result;
      setFill(range, range.value);
    };
  });
}
function setFill(range, value) {
  let min = parseFloat(range.min) || 0,
    max = parseFloat(range.max) || 1,
    r = 100 / (max - min);
  range.style.setProperty("--rangeValue", (value - min) * r);
}
