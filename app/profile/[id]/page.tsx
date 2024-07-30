"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Profile from "@components/Profile";
const UserProfile = ({ params }: { params: { id: string } }) => {
  const [userPost, setUserPost] = useState<Array<Post>>([]);
  const userParamas = useSearchParams();
  // const userId = userParamas.get("id");
  const userName = userParamas.get("name");
  useEffect(() => {
    console.log(params);

    const fetchPosts = async () => {
      const res = await fetch(`/api/users/${params.id}/posts`);

      const data = await res.json();
      setUserPost(data);
    };

    fetchPosts();
  }, [params.id]);

  return (
    <div>
      {/* <p>{params.username}</p> */}
      <Profile
        name={userName!}
        desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
        data={userPost}
      />
    </div>
  );
};

export default UserProfile;
