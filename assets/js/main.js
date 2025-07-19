function setBatteryDetails() {
  const battery__liquid = document.querySelector(".battery__liquid");
  const battery__percentage = document.querySelector(".battery__percentage");
  const battery__status = document.querySelector(".battery__status");

  navigator.getBattery().then((battery) => {
    const batteryLevel = Math.round(battery.level * 100);
    battery__percentage.innerHTML = `${batteryLevel}%`;
    battery__liquid.style.height = batteryLevel + "%";

    battery__liquid.classList.remove(
      "gradient-color-red",
      "gradient-color-orange",
      "gradient-color-yellow",
      "gradient-color-green"
    );

    if (batteryLevel <= 20) {
      battery__liquid.classList.add("gradient-color-red");
    } else if (batteryLevel > 20 && batteryLevel <= 40) {
      battery__liquid.classList.add("gradient-color-orange");
    } else if (batteryLevel > 40 && batteryLevel <= 80) {
      battery__liquid.classList.add("gradient-color-yellow");
    } else if (batteryLevel > 80 && batteryLevel <= 100) {
      battery__liquid.classList.add("gradient-color-green");
    }
    
    battery__status.innerHTML = "";
    if (battery.charging) {
      battery__status.innerHTML =
        'Charging... <i class="ri-flashlight-line animated-green"></i>';
    }
    if (battery.charging && batteryLevel === 100) {
      battery__status.innerHTML =
        'Full battery <i class="ri-battery-2-fill green-color"></i>';
    }
    if (batteryLevel <= 20) {
      battery__status.innerHTML =
        'Low battery <i class="ri-plug-line animated-red"></i>';
    }

    battery.addEventListener("levelchange", () => {
      setBatteryDetails();
    });

    battery.addEventListener("chargingchange", () => {
      setBatteryDetails();
    });
  });
}

window.addEventListener("load", setBatteryDetails);
