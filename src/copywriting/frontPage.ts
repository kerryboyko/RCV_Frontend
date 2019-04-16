import { Language } from '../types';

export const frontPage: any = {
  [Language.EN]: {
    title: `A Better, Fairer Way to Vote`,
    subtitle: `...and it's easy as 1, 2, 3!`,
    callToAction: 'Try Ranked Choice Voting',
    ourMission: {
      header: 'Our Mission:',
      copy:
        'To have New Hampshire adopt Ranked Choice Voting for the 2020 Presidential Primaries.',
    },
    ourVision: {
      header: 'Our Vision:',
      copy: `A fair election system where every vote matters, where people don't have to compromise on their ideals, where clear winners are produced, and where politicians have a better idea of what their electorate wants from them.`,
    },
    section1: {
      title: 'You get more choice, and your vote will count no matter what!',
      copy: [
        `Too often, when we go to the ballot box, we vote for candidates not because we necessarily believe they are the best, but that they are the best with a reasonable chance of winning. Many think that to vote how they really feel - for a third party or an independent or a candidate who is not leading in the horse race- would be to "waste your vote."`,
        `Other people have a different problem: they want to express what candidates they are for, and do not only want to vote against their most hated candidate.`,
        `Ranked choice voting solves both of these problems by allowing you to list the candidate you really want as your first or second choice. If they can't win, you still get to list the candidates you also like.`,
        `This gives voters more choice and creates incentives for candidates to earn your votes, rather than to scare you into voting against a hated opponent.`,
      ],
    },
    section2: {
      title: 'Keep your politicians honest!',
      copy: [
        `A Ranked Choice Voting system doesn't just allow you to avoid wasting your vote, but also keeps politicians honest. When candidates know that there is another candidate with similar policies on the ballot, they'll try harder to avoid scandal and to make sure they work hard for the constituency, lest they lose the election to a third-party.`,

        `Having many viable candidates in an election also means that candidates can't win an election simply by smearing one other. In our current system, attack ads and smear campaigns work by turning off voters who are likely to vote for your opponent from going to the polls. But it doesn't help the attacker when voters can be turned off from an opponent, yet still have a choice they feel good about and still vote for the smeared candidate as a second choice.`,
      ],
    },
    section3: {
      title: 'As easy as 1, 2, 3!',
      copy: [
        `In a Ranked Choice election with a single winner, if no candidate gets 50% + 1 of the first-choice vote, the candidate with the fewest votes is eliminated, and those votes transfer to the voters' second choices. The process continues until one candidate passes the 50% + 1 threshold. In other words, candidates need to be supported by a true majority to be declared the winner.`,
        `In presidential primary elections, votes are redistributed to voters' second and third choices until all candidates hit the threshold for getting delegates. Thus, in contrast to the current system, every vote truly matters in the end.`,
        `There are also other ways to use Ranked Choice Voting for multi-candidate elections. But the voter in the voting booth doesn't need to know about any of this, as all they have to do is write down their preferences: 1st choice, second choice, third choice, etc. They can then trust that their vote will be counted.`,
        `It's that simple.`,
      ],
    },
    section4: {
      title: 'In use around the world!',
      copy: [
        `Ranked Choice Voting isn't a new idea. The modern form of it was created by English barrister Thomas Hare in 1857—sadly, too late for the U.S. Founders to adopt in early U.S. elections. It's currently used in Australia and Ireland to elect national governments, and elsewhere in regional governments, such as local elections in Scotland.  It's even in use in the U.S., in city councils such as Minneapolis, MI, and Cambridge, MA, and in the state of Maine for federal  elections.`,
        `In the places where it's used in the U.S., reviews are excellent. Voters love having more choice on election day, and they often find campaigns are friendlier and less divisive`,
      ],
    },
    pullout: {
      copy: [
        `"On its world, the people are people. The leaders are lizards. The people hate the lizards and the lizards rule the people."`,
        `"Odd," said Arthur, "I thought you said it was a democracy."`,
        `"I did," said Ford. "It is."`,
        `"So," said Arthur, hoping he wasn't sounding ridiculously obtuse, "why don't people get rid of the lizards?"`,
        `"It honestly doesn't occur to them," said Ford. "They've all got the vote, so they all pretty much assume that the government they've voted in more or less approximates to the government they want."`,
        `"You mean they actually vote for the lizards?"`,
        `"Oh yes," said Ford with a shrug, "of course."`,
        `"But," said Arthur, going for the big one again, "why?"`,
        `"Because if they didn't vote for a lizard," said Ford, "the wrong lizard might get in. Got any gin?"`,
      ],
      author: 'Douglas Adams',
      book: 'So Long, and Thanks for All the Fish',
    },
  },
};

export default frontPage;
