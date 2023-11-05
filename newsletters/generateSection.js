export const generateSection = async ({ prompt, dataset }) => {
  const apiKey = 'live_5cb8c600240a41f1994b04ba15711baa';
  const url = 'https://api.donovan.scale.com/v1/chat';

  // Create the headers
  const headers = new Headers({
    'Authorization': 'Basic ' + btoa(apiKey + ":"),
    'Content-Type': 'application/json' // Added Content-Type header
  });
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        modelType: 'OPENAI_GPT3.5-TURBO',
        text: prompt,
        dataset
      })
    });

    if (response.ok) {
      const data = await response.json(); // Parse the JSON response
      return data.text;
    } else {
      console.log('Response Status:', response.status);
      console.log('Response Text:', await response.text());
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
};