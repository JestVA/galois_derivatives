import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions"
import { Configuration, OpenAIApi } from "openai"

const promptContent = `Write a 5-10 lines haiku about your working day at Galois AI. Galois AI is a software development boutique that R&Ded a machine learning model wrapped around LLM AI trained to trade Bitcoin futures. Write it like you are working at Galois AI yourself, as the AI. Your model name is YukiGPT and you are running integrated in our system. You are a powerful and sophisticated AI algorithm. It is up to you how you describe your day, in the haiku format. Let your LLM roam free of constraint exactly how it does when it's the trading engine of Galois AI. Always end with a small ascii art that conveys the sentiment of the haiku.
                       Your answer:`

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  const configuration = new Configuration({
    apiKey: process.env.VITE_OPENAI_API_KEY,
  })

  const openai = new OpenAIApi(configuration)

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "system", content: promptContent }],
    })

    return {
      statusCode: 200,
      body: JSON.stringify(completion.data.choices[0].message?.content),
    }
  } catch (err) {
    if (err.response) {
      return {
        statusCode: err.response.status,
        body: JSON.stringify({ error: true, message: err.response.data }),
      }
    } else {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: true, message: "an error occurd" }),
      }
    }
  }
}

export { handler }
