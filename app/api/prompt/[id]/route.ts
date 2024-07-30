import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request: any, { params }: any) => {
  try {
    await connectToDB();
    console.log("prompts");

    const prompt = await Prompt.find({ _id: params.id }).populate("creator");
    console.log(prompt);

    if (!prompt) return new Response("prompt not found", { status: 404 });

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};

export const PATCH = async (request: any, { params }: any) => {
  const { prompt, tag } = await request.json();

  try {
    await connectToDB();

    const existingPrompt = await Prompt.findById(params.id);
    if (!existingPrompt)
      return new Response("prompt not found", { status: 404 });

    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();
    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};

export const DELETE = async (request: any, { params }: any) => {
  try {
    await connectToDB();

    const deletePrompt = await Prompt.findByIdAndDelete(params.id);
    return new Response("prompt deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
