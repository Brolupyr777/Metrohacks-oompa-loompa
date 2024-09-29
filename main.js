// let map = L.map("map", {
//   center: [51.505, -0.09],
//   zoom: 13,
// });
// population / amount of cars (population estimate) = scaling factor
// scaling factor * amount of cars (averaged out) = population estimate
const scalingFactor = 200000 / 3.5;
const getData = async () => {
  let url = "https://9f56-34-124-232-171.ngrok-free.app/";
  const response = await fetch(url).then((r) => r.json());

  console.log(response);
  let cars = response;
  let population = Math.round(cars * scalingFactor);
  document.querySelector(".number").textContent = population;
  console.log("Updated");
};
getData();
