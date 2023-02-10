import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.VITE_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const promptContent = `give me a tagline for a company called Galois AI Derivatives based on its description.
Description: Galois Derivatives is a proprietary hedge fund utilizing advanced technology and quantitative strategies to trade crypto futures contracts.
                The fund has been successfully trading XBTUSD inverse perpetual contract on BitMEX since 2021 and in 2023 it has deployed the algorithm to trade the BTCUSDT linear contract.
Tagline:`

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: promptContent,
        temperature: 0.6,
    });

    return {
        statusCode: 200,
        body: JSON.stringify(completion.data)
    }
}

export { handler }