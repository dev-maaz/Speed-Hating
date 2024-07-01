# The Speed Hating App

Devious in nature and very unorthodox. Speed Hating is like Speed Dating, but instead of finding your soulmate, you're simulating an average reddit conversation. Pitting yourself against someone online who equally hates you as much as they probably hate themself, Speed Hating lets you let out your inner demons. Saying vile things is part of the win condition, infact you're encouraged to let out your frustration here so can spend a good rest of the day. 

## How to Play

The game is quite simple, after pressing the play button, you enter a lobby. All you have to do is share your URL with one of your very very close friends and wait for them to join. Press launch to start the game. Once the game starts, try to assert your dominance over the other player in anyway you feel like. Better insults will net you good scores, but be careful not to say grunts or throw small insults since they might end up leaving your own reputation tarnished and embarassed. 

## Task Check List

Task 1: ✅
Task 2: ✅
Task 3: ✅

Bonus Tasks

Bonus Task 1: ❌
Bonus Task 2: ✅
Bonus Task 3: ❌

## General Approach

HomePage > PlayerPage > Victory Modal ( Does not work yet)

The PlayerPage initates the player lobby using playroomkit, allowing players to connect. Since this is a debating( more of insult slinging) game it is supposed to be between 2 players only, so maxplayers = 2.

An Array is passed in insertCoin() for customised avatars.

Chat messages are handled using a multiplayerState Map structure so both players have track of the messages being sent to each other. Each message before being saved has it's sender information saved for identification during rendering. This array is then sent to a component that renders chat messages. 

Accessing myPlayer() values has been very inconsistent for me, with the code running and the exact same code throwing an error when i ran it after an hour or so. regardless, due to this inconsistency I shifted the scores to a local react state hook and calculated score based on the number of insults a player has in their sentence. The more insults, the more score you get for the sentence. Insults are an array of strings stored in the PlayerPage.

Added a length Restriction of 7 on sentences, violating it results in negative score (and embarassment).

Added a PromptDisplay that periodically gives different hints to the player to help them form strong "arguments".


