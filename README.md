# WakeUp

"Changing the way people wake up, one alarm at a time."

#### Organization of this document:

1. Problem and motivation
2. Solution
3. Prototype status
4. Fiware Stack in WakeUp
5. Developer API and Source code
6. Future plans
7. Video
8. Team

## 1. Problem and motivation

Getting up early sucks. Everyone hates that moment when the alarm fires off and you have to get out bed in order to start your day.

Most people use the same alarm sound for everyday, without considering things like the current weather conditions, how busy their calendar is or whether you'll experience light or heavy traffic while driving to the office, so we can pretty much say that current alarm clocks are dumb and do not follow the current pace of progress other aspects of technology are following.

We also did some research on the matter and found some interesting studies, such [this paper](http://www.safetyhumanfactors.org/wp-content/uploads/2011/12/228Lim_Wogalter2002.pdf) by Raymond W. Lim and Michael S. Wogalter from the Department of Psychologyof the North Carolina State University. In which they present the current status of alarm clocks, what is wrong with them and how we can solve it. 
Finally, we realized that this a moment of the day in which you usually do nothing because you are still sleepy and it's unconfortable to read. So, the best way of getting information while you wake up is by hearing it. Given these three facts, we observed that current alarm clocks are outdated and need a major rethink and redesign. 
## 2. Solution

We wanted to create a new concept of alarm clock. So the first decision we made is to let the user decide how they wanted to be woken up, and the second decision was to build a product separated from the smartphone.

In order to do this, we realized that we needed to allow developers create their own modules to wake up. We provide modules for waking up with News, weather and music and an open platform for creating new ones (explained further in point 5). We are also open source and (if we get to build it) open hardware.
The user can choose how they can be waken up by choosing among their installed modules and set the hour they want to wake up.

![](https://github.com/CampusHacks/WakeUp/blob/master/images/Screenshot_2014-04-24-17-39-03.png?raw=true)

We are building a product separated from the smartphone to make the alarm bullet proof. If you use your phone as alarm clock, if the battery dies during the night, you won't be woken up.

## 3. Prototype status

Given the Fiware Hackathon, we saw it as a good opportunity to make an early prototype of WakeUp and present it in society to get feedback. Right now, to make prototyping quicker, we are using the RaspberryPi platform to build the hardware prototype. We attached a pair of speakers to it and an ethernet cable that at the moment has already been replaced by a wifi connection. 

Right now you can set the alarm using the webapp and choose and order the modules with which you want to be woken up. You can choose to hear the weather, then your favorite song and then some news related to your stock market investments. It is totally customizable, you even can configure each module with your preferred settings, like the number of news you want to hear or the topic.

![](https://github.com/CampusHacks/WakeUp/blob/master/images/Screenshot_2014-04-24-17-40-12.png?raw=true)

We have created a strong and reliable core, that allows us and other developers to create modules on top of WakeUp and create new experiences. 

At the moment WakeUp uses the following technologies: 

* NodeJS as the core platform, given its versatility and ease to create new modules for WakeUp.
* LevelDB as database, this key-value database allows us to have a schemaless database that support the different modules configuration.
* PicoTTSLibrary, as the Text to Speech library we use to read text though the speakers. It is the same library Android uses to read text.

## 4. Fiware Stack in WakeUp

We plan to add WakeUp some intelligence using FiWare Big Data solutions. Our idea is to use the algorithm we used in [Smads](http://github.com/CampusHacks/Smads) to check the weather conditions or the traffic, so we can try to predict the animic state of the individual and customize their alarm to fit their animic state, and make him happier. 


If we get selected to the next round, we use Campus Party week to discuss with Fiware engineers how can we get this done, due that this AI features are difficult to implement.

We are also developing a server that will be hosted in FiLab Cloud to make all the text to audio conversions, they are a bit slow in the RaspberryPi and we could use Fiware's computing power to get this done in a more efficient way. We are thinking of also using some kind of caching so we don't have to process the same sentence twice. 

## 5. Source Code and Developer API


## 6. Future plans
## 7. Video

We made a short video to try to show how it works and how the prototype looks like.
## 8. Team
