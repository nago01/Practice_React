const button = document.querySelector("button");
const input1 = document.getElementById("num11");
const input2 = document.getElementById("num2");

function add(num13, num22) {
  return num13 + num22;
}

button.addEventListener("click", function() {
  console.log(add(input1.value, input2.value));
});
