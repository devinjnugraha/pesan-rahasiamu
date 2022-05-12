const decrypt = () => {
  let inputValue = atob(document.getElementById("input").value);
  document.getElementById("valueInput").innerHTML = inputValue;
};
