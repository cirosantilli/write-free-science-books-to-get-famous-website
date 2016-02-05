# Olivier Serre Ecole Polytechnique Email Proposal

The [README](README.md) of this repository proposes an extended version of this proposal.

This is a simplified version which you might be able to do in your modal web.

## Dream

Live in a world where you can learn mathematics, physics, chemistry, biology and engineering...

from perfect open source books made for free...

by people who want to get famous to get better paying jobs.

## What is Stack Overflow

When you type a programming question on Google, 2 of the top 5 results are on <https://stackoverflow.com>, and the best answer will be there as well, not on some blog.

How stack Overflow works:

- there are questions and answers
- questions have tags, e.g. programming languages like `C`, `C++`, `Java`
- users have reputation measure. If you upvote someone's question or answer, his reputation increases. People get jobs b

## Why the reputation system sucks

- it the living ultimate god of `C++` upvotes you, you get `10` reputation
- if the first-day newb of `Java` upvotes you, you also get `10` reputation

There are many meta tags discussing that:

- http://meta.stackexchange.com/questions/28874/applying-pagerank-like-algorithm-to-stack-overflow-votes
- http://meta.stackexchange.com/questions/98141/ranking-users-similar-to-page-rank
- http://meta.stackexchange.com/questions/64938/doesnt-science-have-a-better-reputation-system-than-stack-overflow
- http://meta.stackexchange.com/questions/103735/modified-h-index-for-questions-and-answers

## How to solve it

Use a PageRank-like algorithm (Eigenvalue based) such that:

-   everyone has one reputation per tag

-   if someone with high reputation on a given tag upvotes you, you get a lot of reputation on that tag.

    More than you would get from someone with low reputation on that tag.

-   anyone can tag and vote any post

-   users can upvote tags on a given question to say: "I agree that this tag describes this question well".

    The vote of people with higher rep on the tag should count more.

## Concrete proposal for this project

1.  Don't focus on the algorithm itself. Leave that for the PSC :-) (external readers: a longer project they have at Polytechnique)
1.  Forget about questions and answers to simplify: think only like a blog where everyone can post taggable and upvotable posts.
1.  Pages which must be created:
    1.  `/users`: list of all users.
        1. Possibility to sort by who has the most reputation for a given tag.
    1.  `/users/USERID`: profile page of the user. Shows his reputation, posts and upvotes.
    1.  `/posts/POSTID`: a post. Contains:
        1. Title
        1. Body
        1. AJAX upvotable list tags and a `+` button to add a new tag. The HARD UI part!
        1. Upvote count, upvote and downvote arrows
        1. Summary information on who made the post (Username, reputation, profile picture), and a link to his profile page
    1.  `/posts/POSTID/new`: new post form
    1.  `/`: a list of all posts with summary data (title, upvotes, most upvoted tags).
        1. The option to search only for post that have one or more tags.
        1. Start by sorting posts simply by date. Yes, the exact order of those posts (show more "interesting" first) is an interesting hard applied mathematics question, but we have no time? (maybe we could also use PageRank)
        1. A link to create new posts
    1.  The header of every page should contain a notification when you get upvoted.

If this is too easy for you, we can add more views, or play more with algorithms. To be discussed.
