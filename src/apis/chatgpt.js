import {Configuration, OpenAIApi} from 'openai'
const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

delete configuration.baseOptions.headers['User-Agent'];
const openai = new OpenAIApi(configuration);

export const generateData = (title) => {
    const response = openai.createCompletion({
        model: "text-davinci-003",
        prompt: title,
<<<<<<< HEAD
        max_tokens: 2048,
=======
        max_tokens: 1000,
>>>>>>> 62011ceaf7047f58e2dfcd8d99b0d702d8e43523
        temperature: 0,
      });
    return response      
}
