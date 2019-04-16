import { Language } from '../types';

export const frontPage: any = {
  [Language.EN]: {
    title: 'A Better, Fairer Way to Vote',
    subtitle: "...and it's easy as 1, 2, 3!",
    callToAction: 'TRY RANKED CHOICE VOTING',
    ourMission:
      'Our Mission: To have New Hampshire adopt Ranked Choice Voting for the 2020 Presidential Primary.',
    ourVision:
      'A fair election system where every vote matters, where people don’t have to compromise on their ideals, where clear winners are produced, and where politicians have a better idea of what their electorate wants from them.',
    section1: {
      title: "You can't waste your vote!",
      copy: [
        `Too often, when we go to the ballot box, we vote for candidates not because we necessarily believe they are the best, but that they are the best with a reasonable chance of winning. That to vote how you really feel - for a third party or an independent - would be to "waste your vote."`,
        `As Douglas Adams put it: "The lizards rule the people, and the people hate the lizards, but if people didn’t vote for a lizard, then the wrong lizard might get in."`,
        `Ranked choice voting solves the "wrong lizard problem" by allowing you to list the candidate you really want as your first choice. If the candidate you love can’t win, you still get to list the candidate you’ll settle for as your second choice.`,
      ],
    },
    section2: {
      title:
        'It rewards good behavior, and punishes bad behavior, in politicians.',
      copy: [
        `A Ranked Choice Voting system doesn’t just allow you to avoid wasting your vote, but also keeps politicians honest. When candidates know that there is another candidate with similar policies on the ballot, they’ll try harder to avoid scandal and to make sure they work hard for the constituency, lest they lose the election to a third-party.`,
        `Viable third parties also mean that candidates can’t win an election simply by smearing the other candidate. In our current system, attack ads and smear campaigns work by turning off voters who are likely to vote for your opponent from going to the polls. But it doesn’t help the attacker when voters can be turned off from an opponent, yet still have a choice they feel good about and still vote for the smeared candidate as a second choice.`,
        `And when the Ranked Choice Voting system is used with a system that rewards multiple seats at once, the political parties themselves have to ensure that their own members keep their noses clean, because the bad behavior of one member could cause the entire party to suffer in an election.`,
      ],
    },
    section3: {
      title: 'As easy as 1, 2, 3!',
      copy: [
        `In a Ranked Choice election with a single winner, if no candidate gets 50% + 1 vote, the candidate with the least votes is eliminated, and those votes transfer to the voters second choices. The process continues until one candidate passes the 50% + 1 vote threshold.`,
        `In multi-seat elections, designed to fill multiple elected positions, or assign multiple delegates, candidates who have more than enough votes to win a seat automatically have the extra votes they didn’t need to win transferred to their second choices as well. (Those "extra" votes are assigned proportionally.)`,
        `But as a voter, you don't need to worry about the math. All you need to do is choose your preferences for first choice, second choice, third choice, etc.  It’s that’s simple."`,
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
