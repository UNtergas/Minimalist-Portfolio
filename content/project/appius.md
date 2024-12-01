---
title: "Ceasar 3 - 2.5D City building game"
slug: "appius"
date: "9/2022 – 2/2023"
description: "A simple DIY version of Caesar 3 game, allowing the player to manage a city.
"
link: "none"
github: "https://github.com/jumscrafteur/appius"
image: "/project/project2.png"
tags:
  - Python
  - Pygame
  - C
---
#Appius

![appius1.png](/project/img/appius1.png)


|-----------------------------------------------------------------------------------
| Maybe the best way to learn about a language is to make things with it.         
| And what should be a no more suitable idea: making a replication of a game in it
|----------------------------------------------------------------

## Introduction

To begin my first semester in France , I was greeted by a 6 month game project right off the bat. Yet at that time I had little knowledge in python plus working in a group of 6 required a lot of communication in french. At first things seemed to be a little all over the place but after a while, I’ve started to get used to the pace and begin to solve the puzzle little by little.

Using pygame, the game will be an infinite loop till shutdown, and each loop will consist of 3 phrase:
 - Input phase: User interaction will be tracked.
 - Simulation phase: All the tracked interactions that affect the game state will be calculated, then a new game state replaces the old one.
 - Render phase: Manual render the current game state.

![appius2.png](/project/img/appius2.png)

## The interaction phrase
There are two main interactions with the game: through keyboard and through mouse.

For the keyboard, I have used the pygame key listener to know which key is being pressed at the time to register it to the interaction buffer. While mouse interaction will be class into 2 case:

Map interaction and Hud interaction. Map interaction consists of all interactions of the map like drag and drop or moving the map.

![appius3.png](/project/img/appius3.png)

Hud interaction is on other hand be listen by a separated class which listen on button interaction on the right screen hud.

### Event Simulation Phase
For calculating event, each event will be handled by a separated class:  

Building event will be listen by the builder class, fire event will be listen by the fire class and etc

When the interaction buffer be passing to all the event handler one by one like the middleware architecture:

Buffer - > Building_event ->Fire_event -> etc-> Render.

![appius4.png](/project/img/appius4.png)

(***Example: Building a road tile***)

Also apart from the user based event there are also time event like house evolution and burning etc:

![appius5.png](/project/img/appius5.png)

(***Example: House update after reaching inhabitant cap and be close to a water well***)

### Npc

Aside from user handling all the things, in this game there are also some npcs that do it own job.
A nominated example for this is a Fireman bot who will run around in the map and will try to find and extinguish any building on fire.

![appius6.png](/project/img/appius6.png)
    
(***Example: Fireman extinguishing a building***)

To implement a Fireman to be able to do this, it has to have 2 key-feature:
- Surrounding awareness: it need to know it current position in the map to always choose to be on the road rather on the grass tile (faster movement): by having a on the fly function to calculate in position
- Memory: it need to remember if it is current on mission or just chill around, this can be solve easily by a mission queue
- to the point: it need to find the fastest way to the destination, for this I have choose A-star to be the algo for the path fiding.

## Rendering Phase:

![appius7.png](/project/img/appius7.png)

In pygame, the game only supports drawing squares or images in a grid like order, meaning we have to draw each tile one by one into the screen. In order to have a 2.5D game, the game has to have an isometric conversion calculation so that pygame can draw a rectangle at the correct place to achieve this effect.

Then I find out that if we just draw tiles one by one, it will be very costly and the game will be as slow as a 10 year old toaster. So I have think of drawing it in layers:
- Layer 1: Since the majority of the map is only grassland, it is better to assemble all the grass tile into a big isometric rectangle and draw it all at once
- Layer 2: After the grass , we will draw all the roads.
- Layer 3: Sprites.
  The order of layers is important because Pygame drawing is like on a real canvas, we need to paint the background then add details to it. If the house is being painted before the sky, we won't see the house at all since it is covered by the color of the sky.

After the last render phrase, mark the end of a loop, another loop will come next. And that is how the DIY game works in a single threaded environment.

# After thought
After finishing the project in no more but an exhausting way (the deadline rush is real), I have gained for myself not only python knowledge, algos but also how development works in general. Alongside all the technical aspects, this experience also helped me with my French, communication skills and working as a team. Thus preparing for many of the upcoming projects in my learning path.