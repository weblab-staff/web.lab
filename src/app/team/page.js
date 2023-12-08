import Rays from "@/components/global/Rays";
import TeamSection from "@/components/team/TeamSection";
import { team } from "@/data/team";

export default function Team() {
  return (
    <section className="flex h-full min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <section className="flex h-full w-full max-w-7xl flex-col items-center justify-center gap-y-16 px-6 py-24 2xl:gap-x-16 2xl:px-0">
        <Rays>
          <TeamSection
            section={team.current}
            sectionTitle={"this year's staff"}
            currentTeam={true}
          />
          <TeamSection
            section={team.alums}
            sectionTitle={"our amazing alumni"}
            easterEggs={true}
          />
        </Rays>
      </section>
    </section>
  );
}
