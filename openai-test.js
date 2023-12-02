const { Configuration, OpenAIApi } = require("openai");

const OpenAI = require("openai");


async function main() {
  const completion = await OpenAI.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();