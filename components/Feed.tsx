"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";
import CardSkeleton from "./CardSkeleton";
import { IoSearch } from "react-icons/io5";
import { Spinner } from "./ui/spinner";

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
interface PromptCardListProps {
  data: Post[];
  handleTagClick: (tagName: string) => void;
}

const PromptCardList: React.FC<PromptCardListProps> = ({
  data,
  handleTagClick,
}) => {
  return (
    <div className="prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

export default function Feed() {
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [allPosts, setAllPosts] = useState<Post[]>([]);

  const [loading, setLoading] = useState<Boolean>(false);
  const [searchLoading, setSearchLoading] = useState<Boolean>(false);

  // Search states
  const [searchText, setSearchText] = useState<string>("");
  const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | null>(
    null
  );
  const [searchedResults, setSearchedResults] = useState<Post[]>([]);

  const fetchPosts = async () => {
    setLoading(true);
    const response = await fetch("/api/prompt");
    const data: Post[] = await response.json();
    console.log(data);

    setAllPosts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filterPrompts = (searchtext: string): Post[] => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return allPosts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt) ||
        regex.test(item.image)
    );
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(searchTimeout as NodeJS.Timeout);
    setSearchText(e.target.value);
    setSearchLoading(true);
    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
        setSearchLoading(false);
      }, 500)
    );
  };

  const handleTagClick = (tagName: string) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  return (
    <section className="feed">
      <div>
        <form className="relative w-[30rem] flex-center mx-auto ">
          <input
            type="text"
            placeholder="Search for a tag or a username"
            value={searchText}
            onChange={handleSearchChange}
            required
            className="search_input peer"
          />
          {searchLoading ? (
            <Spinner className="absolute right-2   z-40" color="orange" />
          ) : (
            <IoSearch
              className="absolute right-2  z-40"
              color="orange"
              size={25}
            />
          )}
        </form>

        {/* All Prompts */}
        <div className="flex gap-3 flex-wrap w-[100%] mt-6">
          {loading ? (
            numbers.map((number) => (
              <div key={number}>
                <CardSkeleton />
              </div>
            ))
          ) : searchText ? (
            <PromptCardList
              data={searchedResults}
              handleTagClick={handleTagClick}
            />
          ) : (
            <PromptCardList data={allPosts} handleTagClick={handleTagClick} />
          )}
        </div>
      </div>
    </section>
  );
}
