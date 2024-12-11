cl = console.log;

const options = document.getElementById("options");

const allvehicles = [...document.querySelectorAll(".all")];

onColorChange = (eve) => {
  let SelectedClassName = eve.target.value;

  allvehicles.forEach((vehicle) => {
    vehicle.classList.add("d-none");
  });

  let selectedvehicles = [...document.querySelectorAll("." + SelectedClassName)];

  selectedvehicles.forEach((vehicle) => {
    vehicle.classList.remove("d-none");
  });
};

options.addEventListener("change", onColorChange);
