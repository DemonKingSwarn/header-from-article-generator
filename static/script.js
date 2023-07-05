// Get the necessary elements from the HTML
const articleInput = document.getElementById('articleInput');
const generateButton = document.getElementById('generateButton');
const headerOutput = document.getElementById('headerOutput');

// Define the AI generation function
function generateHeader() {
  const article = articleInput.value;

  // Send the article to the server for NLP processing
  fetch('/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ article }),
  })
    .then(response => response.json())
    .then(data => {
      const generatedHeader = data.header;
      headerOutput.textContent = generatedHeader;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Add an event listener to the generate button
generateButton.addEventListener('click', generateHeader);

