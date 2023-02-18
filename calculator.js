let serial = 1;
// Triangle Button event listener
document
  .getElementById("triangleButton")
  .addEventListener("click", function () {
    inputValidation("triangleBaseInput", "triangleHeightInput");
    const baseInput = inputValue("triangleBaseInput");
    const baseHeight = inputValue("triangleHeightInput");

    // set inner text for item box. we are using common function to reduce code
    setInnerText("triangleBase", baseInput);
    setInnerText("triangleHeight", baseHeight);

    const triangleCalculator = 0.5 * baseInput * baseHeight;
    if (isNaN(triangleCalculator) || baseInput === "" || baseHeight == "") {
      return; // return the string value of the input field
    }
    createNewElement(
      "calculationResult",
      "Triangle",
      triangleCalculator.toFixed(2),
      serial
    );
    serial++;
  });

// Rectangle Event Listener
document
  .getElementById("rectangleButton")
  .addEventListener("click", function () {
    inputValidation("rectangleWeightInput", "rectangleHeightInput");
    const rectangleWeight = inputValue("rectangleWeightInput");
    const rectangleLength = inputValue("rectangleHeightInput");

    // Set inner Text for rectangle box w and l
    setInnerText("rectangleWeight", rectangleWeight);
    setInnerText("rectangleLength", rectangleLength);

    // Calculate the answer according to input value
    const rectangleCalculator = rectangleWeight * rectangleLength;
    if (
      isNaN(rectangleCalculator) ||
      rectangleWeight === "" ||
      rectangleLength == ""
    ) {
      return; // return the string value of the input field
    }
    createNewElement(
      "calculationResult",
      "Rectangle",
      rectangleCalculator.toFixed(2),
      serial
    );
    serial++;
  });

// Parallelogram Event Listener
document
  .getElementById("parallelogramBtn")
  .addEventListener("click", function () {
    inputValidation("parallelogramBaseInput", "parallelogramHeightInput");
    const parallelogramWeight = inputValue("parallelogramBaseInput");
    const parallelogramLength = inputValue("parallelogramHeightInput");

    // Set inner Text for parallelogram box w and l
    setInnerText("parallelogramBase", parallelogramWeight);
    setInnerText("parallelogramHeight", parallelogramLength);

    // Calculate the answer according to input value
    const parallelogramCalculator = parallelogramWeight * parallelogramLength;
    if (
      isNaN(parallelogramCalculator) ||
      parallelogramWeight === "" ||
      parallelogramLength == ""
    ) {
      return; // return the string value of the input field
    }
    createNewElement(
      "calculationResult",
      "Parallelogram",
      parallelogramCalculator.toFixed(2),
      serial
    );
    serial++;
  });

// Rhombus Event Listener
document.getElementById("rhombusButton").addEventListener("click", function () {
  inputValidation("rhombusInputD1", "rhombusInputD2");
  const rhombusWeight = inputValue("rhombusInputD1");
  const rhombusLength = inputValue("rhombusInputD2");

  // Set inner Text for rhombus box w and l
  setInnerText("rhombusBase", rhombusWeight);
  setInnerText("rhombusHeight", rhombusLength);

  // Calculate the answer according to input value
  const rhombusCalculator = 0.5 * rhombusWeight * rhombusLength;
  if (isNaN(rhombusCalculator) || rhombusWeight === "" || rhombusLength == "") {
    return; // return the string value of the input field
  }
  createNewElement(
    "calculationResult",
    "Rhombus",
    rhombusCalculator.toFixed(2),
    serial
  );
  serial++;
});

// Pentagon Event Listener
document
  .getElementById("pentagonButton")
  .addEventListener("click", function () {
    inputValidation("pentagonInputP", "pentagonInputB");
    const pentagonWeight = inputValue("pentagonInputP");
    const pentagonLength = inputValue("pentagonInputB");

    // Set inner Text for pentagon box w and l
    setInnerText("pentagonP", pentagonWeight);
    setInnerText("pentagonB", pentagonLength);

    // Calculate the answer according to input value
    const pentagonCalculator = 0.5 * pentagonWeight * pentagonLength;
    if (
      isNaN(pentagonCalculator) ||
      pentagonWeight === "" ||
      pentagonLength == ""
    ) {
      return; // return the string value of the input field
    }
    createNewElement(
      "calculationResult",
      "Pentagon",
      pentagonCalculator.toFixed(2),
      serial
    );
    serial++;
  });

// Ellipse Event Listener
document.getElementById("ellipseButton").addEventListener("click", function () {
  inputValidation("ellipseInputA", "ellipseInputB");
  const ellipseWeight = inputValue("ellipseInputA");
  const ellipseLength = inputValue("ellipseInputB");

  // Set inner Text for ellipse box w and l
  setInnerText("ellipseA", ellipseWeight);
  setInnerText("ellipseB", ellipseLength);

  // Calculate the answer according to input value
  const ellipseCalculator = 3.14 * ellipseWeight * ellipseLength;
  if (isNaN(ellipseCalculator) || ellipseWeight === "" || ellipseLength == "") {
    return; // return the string value of the input field
  }
  createNewElement(
    "calculationResult",
    "Ellipse",
    ellipseCalculator.toFixed(2),
    serial
  );
  serial++;
});

function inputValidation(id1, id2) {
  const inputField = parseFloat(document.getElementById(id1).value);
  const inputField2 = parseFloat(document.getElementById(id2).value);

  if (inputField <= 0 || inputField2 <= 0) {
    alert("Please enter a Positive number");
    return; // Add this line to stop the function execution
  } else if (isNaN(inputField) || isNaN(inputField2)) {
    alert("Please enter a valid number");
    return;
  } else if (inputField == "" || inputField2 == "") {
    alert("Please insert a number");
    return;
  }
}

// get Input value function. this function convert input value into integer
function inputValue(id) {
  const inputValue = document.getElementById(id);
  const inputInt = parseFloat(inputValue.value);

  if (isNaN(inputInt)) {
    return inputValue.value; // return the string value of the input field
  }

  inputValue.value = "";

  return inputInt;
}

// Set Inner Text this function set inner text of html element we only need to put the id and the value we want to change
function setInnerText(id, value) {
  const element = document.getElementById(id);
  element.innerText = value;
}

// A function which will create a new element when we provide a parent id as first parameter and inside html we are pasting the name and calculation result as a second and third parameter. this way it will save us a lot of times
function createNewElement(id, name, answer, serial) {
  const parentId = document.getElementById(id);
  const result = document.createElement("div");
  result.classList.add(
    "flex",
    "p-5",
    "items-center",
    "justify-between",
    "space-x-3"
  );
  result.innerHTML = `
  <div class="flex space-x-2">
  <p>${serial}.</p>
  <p>${name}</p>
</div>
<p>${answer} cm<sup>2</sup></p>
<button
  type="button"
  href="blog.html"
  class="bg-sky-600 px-5 py-2 rounded-md text-white font-medium"
  target="_blank"
>
  Convert to m<sup>2</sup>
</button>
  `;
  parentId.appendChild(result);
}

const randomBgColors = document.querySelectorAll('.random-bg-color');
randomBgColors.forEach((randomBgColor) => {
    randomBgColor.addEventListener('mouseenter', () => {
        const randomHue = Math.floor(Math.random() * 360);
        const randomColor = `hsla(${randomHue}, 100%, 50%, 0.3)`;
        randomBgColor.style.backgroundColor = randomColor;
    });
    randomBgColor.addEventListener('mouseleave', () => {
        randomBgColor.style.backgroundColor = '';
    });
});
