import EasterEggCard from "./EasterEggCard";
import TeamCard from "./TeamCard";

function checkEasterEgg(enableEasterEggs, member) {
  return enableEasterEggs && member.easterEgg;
}

export default function TeamSection({
  section,
  enableEasterEggs,
  sectionTitle,
  currentTeam,
}) {
  return (
    <section className="flex w-full flex-col items-start gap-6 whitespace-nowrap">
      <section className="flex w-full flex-col items-start gap-2">
        <h1 className="whitespace-pre-wrap text-3xl font-semibold tracking-tighter lg:text-4xl 2xl:text-5xl">
          {sectionTitle}
        </h1>
        {currentTeam && (
          <p className="whitespace-pre-wrap text-base tracking-tighter text-neutral-400 lg:text-lg 2xl:text-xl">
            the amazing people who make this all possible
          </p>
        )}
      </section>
      <ul className="grid w-full grid-cols-2 items-center justify-center gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {section.map((member, i) =>
          checkEasterEgg(enableEasterEggs, member) ? (
            <EasterEggCard key={i} member={member} currentTeam={currentTeam} />
          ) : (
            <TeamCard key={i} member={member} currentTeam={currentTeam} />
          ),
        )}
      </ul>
    </section>
  );
}
