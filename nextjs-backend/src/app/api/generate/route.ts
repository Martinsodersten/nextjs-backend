

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


export async function POST (request: Request, response: Response){

    const body = await request.json();
    const { prompt } = body;
    
    const result = await model.generateContent(prompt);
    console.log(result.response.text());

    return Response.json({ result: result.response.text()})
  }