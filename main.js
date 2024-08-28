const completeButton = document.getElementById('send');
const userInput = document.getElementById('textInput');
const screen = document.getElementById('screen');

const apiKey = 'sua apiKey'


const query = async (data) => {
  try {
    completeButton.disabled = true;
    const response = await fetch(
      "https://api-inference.huggingface.co/models/bigcode/starcoder2-3b",
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    
    return result;
  } catch (error) {
    alert('erro interno na api :(')
  }finally{
    completeButton.disabled = false;
  }
    
  };

  
  completeButton.addEventListener("click", () => {
    query({ inputs: `${userInput.value}`}).then(
      (response) => {
        console.log(response);
        console.log(response[0]);
        screen.innerHTML = response[0].generated_text
      }
    );
  });
