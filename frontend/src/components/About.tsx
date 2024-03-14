export function About() {
  return (
    <main className="w-screen bg-background flex justify-center mt-8">
      <div className="p-6 max-w-[700px]">
        <h1 className="text-sub text-2xl mb-6">about</h1>
        <section className="mb-16">
          <p>
            Codekey is a typing test that will help you gain confidence and
            speed writing JS. It's inspired by monkeytype, but each test
            consists of small JS code blocks instead of regular text.
          </p>
          <p>
            Because it presents the prompts and the typed characters on the same
            place, it provides instant feedback on typos, speed and accuracy!
          </p>
        </section>
        <section className="mb-16">
          <h2 className="text-main text-xl mb-4">stats</h2>
          <p>
            <span className="text-sub font-semibold tracking-widest">wpm</span>{" "}
            - total number of correctly typed characters, divided by 5 and
            normalized to 60 seconds.
          </p>
          <p>
            <span className="text-sub font-semibold tracking-widest">acc</span>{" "}
            - percentage of correctly typed characters.
          </p>
        </section>
        <section className="mb-16">
          <h2 className="text-main text-xl mb-4">results</h2>
          <p>
            After completing the test you can review your wpm and acc, and save
            your score on the leaderboard.
          </p>
        </section>
        <section className="pb-20">
          <h2 className="text-main text-xl mb-4">contact</h2>
          <p>
            If you encounter a bug, have some feedback, or just want to say hi,
            you can email me at nutaptap@gmail.com
          </p>
        </section>
      </div>
    </main>
  )
}
