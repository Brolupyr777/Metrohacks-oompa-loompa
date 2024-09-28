// let map = L.map("map", {
//   center: [51.505, -0.09],
//   zoom: 13,
// });
// population / amount of cars (population estimate) = scaling factor
// scaling factor * amount of cars (averaged out) = population estimate
const scalingFactor = 3.5;
const getData = async () => {
  let url = "https://253c-34-125-46-57.ngrok-free.app/";
  const response = await fetch(url);
  console.log(response);
  let cars = response;
  let population = cars * scalingFactor;
  document.querySelector(".number").textContent = population;
}


