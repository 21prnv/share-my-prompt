import React from "react";
import PromptCard from "./PromptCard";
import Link from "next/link";

// Define the structure of a post
interface Creator {
  _id: string;
  username: string;
  email: string;
  image: string;
}
interface Post {
  _id: string;
  creator: Creator;
  prompt: string;
  tag: string;
  image: string;
}

// Define the props for the Profile component
interface ProfileProps {
  name: string;
  desc: string;
  data: Post[];
  handleEdit?: (post: Post) => void;
  handleDelete?: (post: Post) => void;
}

const Profile: React.FC<ProfileProps> = ({
  name,
  desc,
  data,
  handleEdit,
  handleDelete,
}) => {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>

      {data.length == 0 ? (
        <div className="justify-center items-center flex gap-2 mt-4">
          <p>Oops! you don't have any prompts </p>
          <Link href="/create-prompt" className="text-orange-500 ">
            Create Prompt
          </Link>
        </div>
      ) : (
        <span></span>
      )}
      <div className="mt-10 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
