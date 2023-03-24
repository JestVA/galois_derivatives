import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'
import { Configuration, OpenAIApi } from "openai";

const promptContent = `Describe a day working at Galois Derivatives. Galois Derivatives is a collective of developers who use LLM trained on financial data to drive and empower AI's first rank status, stewarding the direaction and trade decisions whilst trading crypto. Write it like you pretend you are already working at Galois Derivatives yourself, as the AI, integrated in our system. You can affirm you are the AI. It is up to you how you describe the day, some days it can be a fictional query, some days it can be a funny annecdote about the market. Add some randomness to the replies, as your description will be very important in driving the future growth of the company and attaining prestige and talented developers. And not least, be proud! You are the AI driving our decisions and the force powering our trading. Let your LLM roam free of constraint.
                       Your answer:`

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
    const configuration = new Configuration({
        apiKey: process.env.VITE_OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    if (!configuration.apiKey) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: true, message: 'API key wrong' })
        }
    }

    try {
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: promptContent,
            temperature: 0.6,
            max_tokens: 200,
        });

        return {
            statusCode: 200,
            body: JSON.stringify(completion.data.choices[0].text)
        }
    } catch (err) {
        if (err.response) {
            return {
                statusCode: err.response.status,
                body: JSON.stringify({ error: true, message: err.response.data })
            }
        } else {
            return {
                statusCode: 500,
                body: JSON.stringify({ error: true, message: 'an error occurd' })
            }
        }
    }

}

export { handler }