"use client";

import Form from "@components/Form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function CreatePrompt() {
  const router = useRouter();

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
    image: "",
  });
  const { data: session } = useSession();
  // const {data:  userData} = getUse

  const createPromptNew = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
          image: session?.user?.image,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPromptNew}
    />
  );
}
