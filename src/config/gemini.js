import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = "AIzaSyCifKlltl7m2LOnt7zEA8wk4hf0wQdNgCs";

// const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export async function runSpecial(industry, country, prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const specialResult = await chatSession.sendMessage(
    `Generate only 35 to 45 keywords (long and short both) which has the most searches in the industry ${industry}, and in the country ${country} on the topic of ${prompt}. separate them with commas and capitalize each word`
  );
  return specialResult.response.text();
}
