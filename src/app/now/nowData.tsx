enum Status {
  started,
  ongoing,
  completed,
  failed,
  paused,
  cancelled,
  postponed,
  deferred,
  unknown,
}

interface GoalProps {
  goal: string;
  status?: Status;
}

interface Season {
  season: string;
  image?: string;
  summary?: string;
  goals?: GoalProps[];
}

interface NowDataProps {
  year: number;
  summary: string;
  seasons: Season[];
}

const NowData: NowDataProps[] = [
  {
    year: 2026,
    summary: "Planned.",
    seasons: [
      {
        season: "Winter",
        summary: "Backlog now cleared. It's time to cash out on my unrealised goals from previous years",
  },
    ],
  },
  {
    year: 2025,
    summary: "Ongoing.",
    seasons: [
      {
        season: "Spring",
        summary:
          "Clearing my backlog has been going well, but I still have a long time to go before I can take on anything new. I'm crossing my fingers that I'll be free by 2025-Fall.",
      },
    ],
  },
  {
    year: 2024,
    summary: "Unintentional Growth.",
    seasons: [
      {
        season: "Spring",
        image: "/img/album/plants.gif",
        summary:
          "This spring is a busy time. I am trying to re-orient myself to handle the rest of the year. The quarter\n" +
          "            started strong, then was blown off track by the stings of poverty and burnout.    For a few months, I've also had my head in the clouds. I've been better about\n" +
          "            returning to my goals at the end of this season becoming more focused on refining my personal productivity\n" +
          "            systems to prevent stalling again rather than powering through to complete my goals while neglecting my real\n" +
          "            responsibilities. I had the wins of diving into reading again, loving, strengthening community ties and a\n" +
          "            stronger sense of self.",
        goals: [
          {
            goal: "Continuing my guide on the relationships I have with myself, family, friends, romantic interests and others.",
            status: Status.ongoing,
          },
          {
            goal: "Creating a GBStudio game as a love letter to a former muse",
            status: Status.cancelled,
          },
        ],
      },
      {
        season: "Summer",
        image: "/img/summer.webp",
        summary:
          "I'm still working on last season's goals + want to focus on repairing, low-tech and continued sustainability tasks this season.",
        goals: [
          {
            goal: " Getting an Amateur Radio licence.",
            status: Status.ongoing,
          },
          {
            goal: "Calisthenics foundations",
            status: Status.completed,
          },
          {
            goal: "Teaching myself to sew",
            status: Status.ongoing,
          },
          {
            goal: "Learning beginner Jamaican Sign Language.",
            status: Status.completed,
          },
        ],
      },
      {
        season: "Fall",
        image: "/img/fall2024.webp",
        summary:
          " The focus of this season is introspection, a backlog that I've neglected and previous goals which were not completed. Recently, I've been made aware of some negative traits of mine. With cursory thoughts, I see it affects my relationship with myself. Working on this will have a positive effect on my relationship with everyone else.",
      },
    ],
  },
  {
    year: 2023,
    summary: "A paradigm shift.",
    seasons: [
      {
        season: "Winter",
        image: "/img/winter.webp",
        summary:
          "This is when I started this page. At the time, I was exploring individualism vs caring for myself as a member of a community. This might re-appear as a goal-point after I read Frantz Fanon's Wretched of the Earth. This is also when I had some awakenings about everyday life and lost most of my heroes. " +
          "It ended with my giving up religion. I have oscillated between being a Christian revert & apostate for many years. The bombing of Bethlehem on Christmas Day with little out-cry from Western Church leaders was the final straw for me. It does not make sense for me to practice a religion that is so far removed from its roots / holy sites. This was not the first time I noticed that what is generally practiced is an abstract version of Christianity, but it was the occasion that disgusted me the most. The other Abrahamic religions do not appeal to me.",
      },
    ],
  },
];

export default NowData;
