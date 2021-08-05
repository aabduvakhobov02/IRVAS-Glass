import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
  const windowForm = document.querySelectorAll(".balcon_icons_img"),
    windowHeight = document.querySelectorAll("#height"),
    windowWidth = document.querySelectorAll("#width"),
    windowType = document.querySelectorAll("#view_type"),
    windowProfile = document.querySelectorAll(".checkbox");

  checkNumInputs("#width");
  checkNumInputs("#height");

  function bindInfoToState(elem, event, prop) {
    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case "SPAN":
            state[prop] = i;
            break;
          case "INPUT":
            if (item.getAttribute("type") === "checkbox") {
              if (i === 0) {
                state[prop] = "Cold";
              } else {
                state[prop] = "Warm";
              }
              elem.forEach((box, j) => {
                box.checked = false;
                if (i == j) {
                  box.checked = true;
                }
              });
            } else {
              if (item.value === "" || item.value === undefined) {
              } else {
                state[prop] = item.value;
                item.style.border = "";
              }
            }
            break;
          case "SELECT":
            state[prop] = item.value;
            break;
        }
        console.log(state);
      });
    });
  }

  bindInfoToState(windowForm, "click", "form");
  bindInfoToState(windowHeight, "input", "height");
  bindInfoToState(windowWidth, "input", "width");
  bindInfoToState(windowType, "change", "type");
  bindInfoToState(windowProfile, "change", "profile");
};

export default changeModalState;
