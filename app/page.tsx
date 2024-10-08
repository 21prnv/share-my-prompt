import Feed from "@components/Feed";

export default function Home() {
  return (
    <main className="app text-black">
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          Discover & Share
          <br className="max-md:hidden" />
          <span className="orange_gradient text-center">
            {" "}
            AI-Powered Prompts
          </span>
        </h1>
        <p className="desc text-center">
          ShareMyPrompt is an open-source AI prompting tool for modern world to
          discover, create and share creative prompts
        </p>
        <Feed />
      </section>
    </main>
  );
}
