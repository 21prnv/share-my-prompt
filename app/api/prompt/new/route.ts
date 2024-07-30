import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const { userId, prompt, tag, image } = await request.json();

    await connectToDB();
    const newPrompt = new Prompt({ creator: userId, prompt, tag, image });

    await newPrompt.save();
    return new NextResponse(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Failed to create a new prompt", { status: 500 });
  }
};
