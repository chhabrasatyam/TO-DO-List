const inputE = document.querySelector("input");
const ul = document.getElementById("to-do-list");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  const crossBtn = document.createElement("button");
  crossBtn.innerText = "X";
  const upBtn = document.createElement("button");
  upBtn.innerText = "↑";
  const downBtn = document.createElement("button");
  downBtn.innerText = "↓";

  const text = document.createElement("span");

  const li = document.createElement("li");
  ul.appendChild(li);
  li.append(crossBtn);
  li.append(upBtn);
  li.append(downBtn);
  li.append(text);
  text.innerText = inputE.value;
  inputE.value = null;

  crossBtn.addEventListener("click", function () {
    li.remove();
  });

  $.fn.moveUp = function () {
    before = $(this).prev();
    $(this).insertBefore(before);
  };

  $.fn.moveDown = function () {
    after = $(this).next();
    $(this).insertAfter(after);
  };

  $(upBtn).click(function () {
    $(this).parent().moveUp();
  });

  $(downBtn).click(function () {
    $(this).parent().moveDown();
  });

  text.style.margin = "10px";

  upBtn.style.padding = "5px 10px";
  upBtn.style.margin = "3px";
  upBtn.style.backgroundColor = "rgb(123 234 345)";
  upBtn.style.border = "none";
  upBtn.style.borderRadius = "4px";
  upBtn.style.cursor = "pointer";

  downBtn.style.padding = "5px 10px";
  downBtn.style.margin = "3px";
  downBtn.style.backgroundColor = "rgb(400 100 100)";
  downBtn.style.border = "none";
  downBtn.style.borderRadius = "4px";
  downBtn.style.cursor = "pointer";

  crossBtn.style.padding = "5px 10px";
  crossBtn.style.margin = "3px";
  crossBtn.style.backgroundColor = "rgb(200 200 200)";
  crossBtn.style.border = "none";
  crossBtn.style.borderRadius = "4px";
  crossBtn.style.cursor = "pointer";
});
