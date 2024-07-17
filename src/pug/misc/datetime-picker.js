let doc = document;

const input = doc.querySelector("#datetime");
input.addEventListener("click", () => {
  try {
    input.showPicker();
  } catch (error) {
    console.log(error);
  }
});
