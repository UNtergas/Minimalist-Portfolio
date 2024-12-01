---
title: "COFFWOK - Coffee study together"
slug: "coffwok"
date: "6/2023 – 7/2023"
description: "A web application
allowing the creation of a profile on a public thread to find someone to work with
or study together in a cafe."  
link: "https://www.coffwok.com/"
github: "none"
image: "/project/project1.png"
tags:
  - React
  - SpringBoot
  - CSS
---
# COFFWOK - Coffee study together
![COFFWOK](/project/project1.png)

> Simple reddit no ?

## The short run

Even though this project only lasts for no more than 2 weeks, it is still the first big web project that I work on as a team. As 4 we have create an simple social with a scrolling feed for people to choose a person that they interest in to work with

For the tech stack, we have chosen to work with React for frontend and SpringBoot Java for backend. The frontend and backend are separated from each other and communicate through api.

Working with SpringBoot is a whole lot different from the usual Node with js. Imagine after spending time with a very flexible tool and working typeless, jumping into Spring makes things seem a lot different. A right off the box tool with a strict architect to follow has changed my perspective for backend architecture forever.


During this short project, I mostly worked with CRUD operation of the backend API and testing with Postman. The way of organising our project is like this: each feature will have its own modular (folder), and inside each modular will have its own structure like controller, model, etc.

### The hierarchy 
```
|-controller
|-Dto
|-model
|-repository
|     |-repositoryClass
|     |-repositoryInterface
|-service
      |-serviceClass
      |-serviceInterface
```

[//]: # (***Example of a profile module.***)

By organizing like this, we can ensure the fact that each module can work on its own. Also each module is self-contained, enforcing separation of concerns and easier scalability.
## Afterthought
The project seems to be a bit short, but yet let me learn many things about how to apply a better architecture for the project, some design patterns. With this experience, I have further belief that moving from typeless to type is the better way, and how well we organise the project in the beginning will affect the development speed as we scale it bigger later on.