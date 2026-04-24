// Get elements
const input = document.getElementById("promptInput");
const button = document.getElementById("generateBtn");
const resultDiv = document.getElementById("result");

// Button click event
button.addEventListener("click", async () => {
  const prompt = input.value.trim();

  if (!prompt) {
    alert("Please enter a prompt!");
    return;
  }

  try {
    // Show loading
    resultDiv.innerHTML = "Generating image... ⏳";

    // API call
    const response = await fetch("http://localhost:8080/generateImage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();

    // Clear previous result
    resultDiv.innerHTML = "";

    // Create image
    const img = document.createElement("img");
    img.src = `data:image/png;base64,${data.image}`;
    img.style.width = "300px";
    img.style.borderRadius = "10px";

    // Append image
    resultDiv.appendChild(img);

  } catch (error) {
    console.error("Error:", error);
    resultDiv.innerHTML = "❌ Failed to generate image";
  }
});