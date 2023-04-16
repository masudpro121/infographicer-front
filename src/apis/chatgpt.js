import {Configuration, OpenAIApi} from 'openai'
const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

delete configuration.baseOptions.headers['User-Agent'];
const openai = new OpenAIApi(configuration);

export const generateData = async(title) => {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: title,
        max_tokens: 5,
        temperature: 0,
      });
    return response      
}
