# Consume an API

## Learning Competencies
- consume an API in a clean, modular, and extenable way.
- implement a professional front-end design process.
- use test driven development to produce a full-stack application.

## Summary

You'll be building an application to consume the Hacker News API you build yesterday. You're going to be making a full-stack, fully-tested, well-designed website with a well-structured front-end and back-end.

## Releases

### Release 0: Interface Discovery

When working with an web API, its important to first figure out exactly what it gives you. Often, APIs will provide less functionality than assumed, or require more configuration than initially expected. Before your start today’s challenge, figure out exactly how you can interact with this API. Go through the following steps:

  1. read the README to figure out what it says it does.
  2. use cURL or HTTParty to test all relevant endpoints and find out what it actually does.
  3. Pay special attention to data shapes and authentication schemes, as they will likely cause you trouble down the road.
  4. Decide how to adapt the API to fit your current needs.

What do you want to build? What information do you want? What information can you get out of the API?  How can you supplement it? How does the API constrain you?

### Release 1: Wireframing

Now that you have a general idea of what to build, you need to design your user’s experience as they go through the app. What views do you need? How do they interact? What elements do you want on each page, and how are they displayed? What is your site’s [color scheme?](http://colorschemedesigner.com/)

Take the design process seriously. User experience drives not only your front-end design, but also you back-end system architecture. Once you’ve settled on a front-end design, implementation of that design will be much easier — and you’ll know exactly what you’ll need from your back-end.

### Release 2: TDDing your way through the app.

It’s time to start building. Like yesterday, start out with a README.md file. Your first commit should describe the intention of your project. As you add more functionality, make sure you update your README.

We’ve already built a skeleton structure for your API interaction in `app/models/hacker_news.rb`, where you can encapsulate all interaction with your API. The class uses the HTTParty gem, which you can read more about here. [http://blog.teamtreehouse.com/its-time-to-httparty]

As you build, you should be incrementally adding to your CSS as well, which should be easy to do since you already decided on your overarching design in the previous release. Make sure it looks professional — at the very least, your application should be [responsive](http://learn.shayhowe.com/advanced-html-css/responsive-web-design/), and you should consider adding [a grid-system.](http://css-tricks.com/dont-overthink-it-grids/)

As you are writing tests, you’ll want to avoid unnecessarily hitting the API for information. Doing so will slow your testing suite to a crawl, and likely lead to you getting rate-limited. To avoid doing so, use [RSpec method stubs](https://www.relishapp.com/rspec/rspec-mocks/v/2-3/docs/method-stubs).

### Release 3: Optimization and Refactoring

Now that you have a fully functional, fully tested app, you have the perfect canvas on which to experiment. Implement one of the following features:

  - **Caching.** Can you avoid making unnecessary requests to the external API? Saving data in your own database will prevent you from being rate limited, and will also speed up your site’s user experience.
  - **Client-Side Persistence.** Can you make relevant portions of your site maintain client-side state, relying instead on AJAX requests?
  - **Pagination.** Can you implement a pagination scheme? You can do this synchronously, using `page` and `limit` query string parameters to denote pagination values. You can also attempt to implement this asynchronously using an infinite scroll system.
