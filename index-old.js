// Your API key
const apiKey = 'live_5cb8c600240a41f1994b04ba15711baa';

// API endpoint (fixed the leading space)
const url = 'https://api.donovan.scale.com/v1/chat';

// Create the headers
const headers = new Headers({
  'Authorization': 'Basic ' + btoa(apiKey + ":"),
  'Content-Type': 'application/json' // Added Content-Type header
});

// Define an asynchronous function to make the API call
const getOrganizationModels = async () => {
  try {
    // Make the POST request using fetch with async/await
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ // Stringify the JSON body
        modelType: 'SCALE_LLAMA_2_13B_CHAT',
        text: 'summarize these incidents, and return a list of the top 5 incidents in terms of priority',
        dataset: 'bgzmkn9p214ynstbvwg5blu5'
      })
    });

    // Check if the call was successful
    if (response.ok) {
      const models = await response.json(); // Parse the JSON response
      console.log('Models:', models);
    } else {
      console.log('Response Status:', response.status);
      console.log('Response Text:', await response.text());
      // It's usually better to log or handle the full response or response text for debugging.
    }
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error('Error:', error.message);
  }
};

// Call the async function
getOrganizationModels();


// import { OpenAI } from "langchain/llms/openai";
// import { ConversationalRetrievalQAChain } from "langchain/chains";
// import { OpenAIEmbeddings } from "langchain/embeddings/openai";
// import { Chroma } from "langchain/vectorstores/chroma";
// import { JSONLoader } from "langchain/document_loaders/fs/json";

// const model = new OpenAI({
//   openAIApiKey: "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",
//   temperature: 0.9,
// });

// const loader = new JSONLoader('./test.json');
// const docs = await loader.load();
// // console.log(docs)
// const vectorStore = await Chroma.fromDocuments(docs, new OpenAIEmbeddings({
//   openAIApiKey: "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"
// }), {
//   collectionName: "311_incidents",
// });
// console.log(vectorStore)
// const chain = ConversationalRetrievalQAChain.fromLLM(
//   model,
//   vectorStore.asRetriever()
// );
// const question = "where did these incidents take place?"
// const res = await chain.call({ question, chat_history: [] });
// console.log(res)

// // const vectorStore = await Chroma.fromDocuments([text], new OpenAIEmbeddings({
// //   openAIApiKey: "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",
// // }), {
// //   collectionName: "a-test-collection",
// //   url: "http://localhost:8000", // Optional, will default to this value
// //   collectionMetadata: {
// //     "hnsw:space": "cosine",
// //   }, // Optional, can be used to specify the distance method of the embedding space https://docs.trychroma.com/usage-guide#changing-the-distance-function
// // });

// // console.log(vectorStore)


// // await collection.add({
// //   ids: ["id1"],
// //   documents: [text],
// // });




// // const client = new ChromaClient();

// // console.log(client)



// // const chatModel = new ChatOpenAI({
// //   openAIApiKey: "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",
// // });



// // const llmResult = await llm.predict(text);
// // /*
// //   "Feetful of Fun"
// // */

// // console.log(llmResult)

// // const chatModelResult = await chatModel.predict(text);

// // console.log(chatModelResult)