const images = () => {
  const workingSection = document.querySelector(".works"),
    bigImg = document.createElement("img"),
    imageModal = document.createElement("div");

  imageModal.classList.add("popup");
  workingSection.append(imageModal);

  imageModal.style.cssText = "justify-content: center; align-items: center;";
  imageModal.append(bigImg);
  bigImg.style.maxWidth = `${document.documentElement.clientWidth * 0.7}px`;
  bigImg.style.maxHeight = `${document.documentElement.clientHeight * 0.8}px`;

  workingSection.addEventListener("click", (e) => {
    e.preventDefault();
    let target = e.target;
    if (target && target.classList.contains("preview")) {
      imageModal.style.display = "flex";
      document.body.style.overflow = "hidden";

      const src = target.parentNode.getAttribute("href");
      bigImg.setAttribute("src", src);
    }

    if (target && target.matches("div.popup")) {
      imageModal.style.display = "none";
      document.body.style.overflow = "";
    }
  });
};

export default images;
