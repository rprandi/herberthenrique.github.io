---
template: BlogPost
path: /5-reasons-my-team-decided-use-go
date: 2020-05-17T10:00:00.000Z
title: 5 Reasons why my team decided to use Go
metaDescription: >-
  Five reasons why my team decided to use golang as our main programming language
thumbnail:
---

Hi! My name is Herbert and I'm a software engineer at [@SumUp](https://twitter.com/sumupeng). We're a multi-language company and this means we **a lot** of languages running inside our ecosystem. Just to mentions a few of them, we have: Go, Ruby, Elixir, Erlang, Javascript (node), Swift, Kotlin.

_If you understand portuguese, [we have a podcast](https://hipsters.tech/hardware-multiplas-linguagens-e-microsservicos-na-sumup-hipsters-on-the-road-30/) about how we deal with hardware, multi-languages, and microservices at Sumup_

But, my team was working a lot with ruby for more than one year. When the time of creating a new microservice came, we had to decide if you're keeping using ruby or we can change to a new language. Also, even with all these languages in our ecosystem, we don't choose to change languages because we have a brand new amazing language in the community, but because this can solve our problems and this can help our customers to grow.

We can talk later about why we decide to drop ruby. These are the reasons why we choose Go between all the options we had.

# 1 - Hiring

This is one of our main priorities, Go was between the most loved and wanted languages in the [Stack Overflow Survey 2019](https://insights.stackoverflow.com/survey/2019#most-loved-dreaded-and-wanted).

Since SumUp is a hyper-growth company that is doubling the size of engineers every year we need to choose a language that people want it to use and it’s much simpler to onboard engineers that have never seen the code before, and get them productive early with Go.

# 2 - Easy to learn, be productive and deliver value

Go is one of the easiest languages to learn possible, he had only [25 keywords](https://golang.org/ref/spec#Keywords), and this super easy to start coding. The docs are good and we can find great material like [A tour of Go](https://tour.golang.org/welcome/1) that makes your learning curve less complicated.

Our developers had a lot of experience with Object-Oriented Paradigm and change to functional programming will cause a learning curve even bigger for the team.

Go I would describe as focusing on making exactly what’s going on very clear. There is no magic, no implicitness

# 3 - It’s a compiled, statically typed language.

I'll tell you a secret if don't work today with typed languages: You gonna love it or hate it.
In case you hate, you gonna only be able to see the biggest benefits of working in a new codebase or after some time.
In the end, software biggest cost lives in maintaining and not in the time you created and after a few time, the types will help you a lot to find out how the software is working.
Type will also help you to find out about errors in the early stage of the development process.

Static typing usually results in compiled code that executes quickly. The compiler knows the exact data types that are in use, it can produce optimized machine code.

# 4 - The Tooling around helps you and it's opinionated

If you install Go, you'll have already a lint, formatting, and testing tools.

Using `gofmt` an `goimports` in your code will have out the box all the settings and best practices adopted by the community.
You can go a little further with more restrictive rules, I made this for a few projects and in the end was learning even more how to properly use the language.
Go is super opinionated by default with code style and you don't need to waste time arguing with your team about small details, you just need to follow what is already defined.

Go also comes with a test framework, so you have all the basic to already create a good and maintainable software without having to worry too much or choose frameworks.

# 5 - We want to have a common language in our squads/tribe

We work with the concept [The Spotify Tribe Engineering Model](https://medium.com/scaled-agile-framework/exploring-key-elements-of-spotifys-agile-scaling-model-471d2a23d7ea) and my squad was inside a tribe that has many programming languages. We wanted to have a common language that all our squads could use, this means that any engineer can switch the squad she's working and start to deliver value super fast. I know, this is a little bit against being a multilanguage company, but in our tribe Go can be our main language.

This is really for the company, but also for developers who want to change the current context a little or maybe live in another country.
We had some of these experiences of a software engineer who had [a life between two continents](Life as a SumUp Software Engineer across 2 continents).

### Bonus reason - Amazing mascot, great packages names.

Did you see their mascot? You can even have [your own gopher](https://gopherize.me/)? or incredible libraries names like [Gin Gonic](https://github.com/gin-gonic/gin), [Gorilla](https://www.gorillatoolkit.org/) or [Buffalo](https://gobuffalo.io/en/)?

--

### Are you using to use in your company or intent to use?

How is your experience with Go? Are you enjoying work or learn this language? Send me a tweet and tell me your experience at [@herberth3nrique](https://twitter.com/herberth3nrique).

I hope you liked the reasons I showed to you, I tried to focus on what are the benefits that the language bring to my team, so I try to not mention the most common benefits of the language like Concurrency, Cross-Platform, Performance and Garbage collection.

Don't forget to share on twitter :)
