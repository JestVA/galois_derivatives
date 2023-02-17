import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'
import { Configuration, OpenAIApi } from "openai";

const promptContent = `Write a paragraph describing the company called Galois Derivatives.
Example: Galois Derivatives is a proprietary hedge fund utilizing advanced technology and quantitative strategies to trade crypto futures contracts.
                The fund has been successfully trading XBTUSD inverse perpetual contract on BitMEX since 2021 and in 2023 it has deployed the algorithm to trade the BTCUSDT linear contract.
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