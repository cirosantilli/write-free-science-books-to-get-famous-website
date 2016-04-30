# Write Free Science Books to Get Famous Website

Dream: live in a world where you can learn mathematics, physics, chemistry, biology and engineering from perfect open source books made for free by people who want to get famous to get better paying jobs.

This is just a wacky project idea right now, there is no prototype, nor business model.

Method: a crash between:

- Stack Overflow gamification
- GitHub-like pull requests. Not anyone can edit anything like Wikipedia madness, but you *can* make your own copy (fork), and a precise a suggestion.
- Wikipedia. Imagine if you could link up-votable application examples to the page of a Mathematics theorem.
- page rank-like algorithm for user reputation, including a per-tag reputation

## Intro

Consider a [Stack-Overflow]()-like Q&A website:

- there are questions and answers
- questions have tags, e.g. programming languages like `C`, `C++`, `Java`
- users have a reputation measure. If you upvote someone's question or answer, his reputation increases. You need 15 reputation to upvote someone.

But Stack Overflow's reputation system sucks because:

- it the living ultimate god of `C++` upvotes you, you get `10` reputation
- if the first-day newb of `Java` upvotes you, you also get `10` reputation

We want to improve Stack Overflow's simplistic linear reputation system to determine who is the user who knows the most about a given tag.

Fundamental requirement: a Google PageRank-like algorithm (Eigenvalue based) such that:

-   everyone has one reputation per tag
-   if someone with high rep on a given tag upvotes you, you get a lot of reputation on that tag. More than you would get from someone with low reputation on that tag.

Optional but very desirable requirements:

-   users can upvote tags on a given question to say: "I agree that this question deserves this tag".

    The vote of users with higher rep on the tag should count more.

-   each time you upvote the same given person, it has less positive impact on his reputation for that tag.

    This would counter voting fraud, e.g. of close groups of friends which upvote each other a lot.

Another problem this would solve: multiple site split silliness: <http://meta.stackoverflow.com/questions/271989/does-it-pay-to-spin-off-sites> Since there is no human moderation, only algorithms, splitting websites makes no sense.

## Extra problem 1: post age

How to determine if something is "original research" or not?

E.g.: a genius discovers something and publishes it really badly explained.

Someone less intelligent comes, explains it better, and gets widely read.

Or someone who just posts a bunch of links to good sources.

## Extra problem 2: post age

Post metrics on Stack Overflow also suck: the post with most upvotes goes up and that is it.

It would be cool to give a boost to recent posts that got lots of upvotes.

They can't beat the older ones in total upvotes, but the upvote rate is a strong indicator of quality.

- http://meta.stackexchange.com/questions/125455/sorting-new-answers-to-old-questions?rq=1
- http://meta.stackexchange.com/questions/6662/how-to-give-some-boost-to-some-really-good-answers-that-arrive-late?rq=1
- http://meta.stackexchange.com/questions/15805/how-can-we-make-good-answers-to-old-questions-float-to-the-top
- http://meta.stackoverflow.com/questions/272570/how-to-deal-with-hugely-upvoted-bad-and-outdated-answers

Does Google consider post date?

- https://www.quora.com/When-Google-indexes-a-page-does-it-consider-that-pages-creation-date-when-it-comes-to-PR-computation

## Extra problem 3: user trusts user

It would be cool for a user to say: I trust this other user on given tags / all tags.

## Extra problem 4: per user score of all other users

Rate how much one user likes other users based on his actions.

E.g.: someone who only upvotes C questions will give score 0 for someone with only Java questions.

## Testing: a difficulty

While it is possible to download all public data from Stack overflow in dumps, this algorithms would need private information like who upvoted what.

So generating meaningful test data would be a problem in itself.

## Research

- http://meta.stackexchange.com/questions/28874/applying-pagerank-like-algorithm-to-stack-overflow-votes
- http://meta.stackexchange.com/questions/98141/ranking-users-similar-to-page-rank
- http://meta.stackexchange.com/questions/64938/doesnt-science-have-a-better-reputation-system-than-stack-overflow
- http://meta.stackexchange.com/questions/103735/modified-h-index-for-questions-and-answers

Software:

-   http://www.bibsonomy.org/
    - https://bitbucket.org/bibsonomy/bibsonomy
    - http://www2007.org/workshops/paper_25.pdf
-   https://github.com/networkx/networkx Python, does a lot of other graph things
-   https://github.com/louridas/pagerank C++
-   https://github.com/dcadenas/rankable_graph Ruby
-   https://github.com/dcadenas/pagerank/ Go, port of rankable_graph

StackApps:

- http://stackapps.com/questions/6520/skillrep-experiment-in-computing-a-skill-focused-reputation
- http://stackapps.com/questions/6298/stackrating-tracks-skill-of-stack-overflow-users

General reputation systems:

- https://en.wikipedia.org/wiki/Reputation_system
- https://en.wikipedia.org/wiki/Bibliometrics

PageRank tutorials:

- http://www.cs.princeton.edu/~chazelle/courses/BIB/pagerank.htm

## Algorithm possibilities

The most obvious possibility is to reduce the problem to pagerank.

If we forget tags to simplify, we could do a bipartite authors / posts graph:

- each post and user is node in one side of the bipartite graph
- if userN upvotes postN, add a link from userN to postN
- link postN to it's author userN

To consider tags without weight, in addition:

- each user is represented by one node per tag userN-tagM
- if userN upvotes postN, add a link from userN-tagM to postN if postN is tagged with tagM
- link from postN to each userN-tagM where userN is the autor and tagM a tag of the post

## Business model

### Consulting

Start with consulting for universities to get some cash flowing.

Help teachers create perfect courses.

At the same time, develop the website, and use the generated content to bootstrap it.

Choose a domain of knowledge, generate perfect courses for it, and find all teachers of the domain in the world who are teaching that and help them out.

Then expand out to other domains.

TODO: which domain of knowledge should we go for? The more precise the better.

- maths is perfect because it "never" changes. But does not make money.
- computer science might be good, e.g. machine learning.

### Knowledge market

If enough people use it, we can let people sell courses through us, to become the YouTube of courses.

Teachers have the incentive of making open source to get more students.

Students pay when they want help to learn something.

### Who to propose this to

<https://catalogue.polytechnique.fr/cours.php?id=2913>

<http://psc.polytechnique.fr/>
