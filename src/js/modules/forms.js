import checkNumInputs from "./checkNumInputs";

const forms = (state) => {
  const forms = document.querySelectorAll("form");

  checkNumInputs('input[name="user_phone"]');

  const message = {
    loading: "Loading...",
    success: "Successed",
    failure: "Failed(",
  };

  const postData = async (url, data) => {
    let result = await fetch(url, {
      method: "POST",
      body: data,
    });
    return await result.text();
  };

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      statusMessage.textContent = message.loading;
      form.append(statusMessage);

      const formData = new FormData(form);
      if (form.getAttribute("data-calc") === "end") {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }

      postData("assets/server.php", formData)
        .then((res) => {
          console.log(res);
          statusMessage.textContent = message.success;
        })
        .catch(() => (statusMessage.textContent = message.failure))
        .finally(() => {
          form.reset();
          setTimeout(() => {
            statusMessage.remove();
          }, 3000);
        });
    });
  });
};

export default forms;
