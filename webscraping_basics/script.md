## Outline
- Intro
- What is webscraping
- Why Puppeteer
- Basic tutorial
- Advanced tutorial

Slides: [[../Content Slides/Webscraping 101|Webscraping 101]]
## Script

**intro**
Web scraping enables you to interact with websites using code.

With this you can automatically interact with and read data from millions of websites in a short amount of time. 

In this video I will teach you the basics of web scraping, some tools and techniques that you should know, as well as how to get started... using Puppeteer, a Javascript library. 

Now, this video is aimed at anyone with some experience with Javascript. Meaning, if you know what npm is, you're good.

If you are looking for a more advanced tutorial, I will be publishing one soon that shows you how to scrape websites that try to stop you from doing so.

Here's what we'll be learning in this video. Timestamps are in the description, let's get started

**what is webscraping?**
Think of webscraping like having a robot browse the web for you. It still sees everything you can see and do whatever it is you can do. But it's a robot, so it can do things much faster.

Web scraping has a lot of potential, here are some things you can do:
- Like scraping the entire course catalog for your school's academic year to build your own course selection app.
- You can train AI models using text gathered from scraping news websites or wikipedia
- If you're feeling devious, you can spread misinformation by creating social media bots.
- Or what I'm personally working on, using scraped data to create a search engine for indie tech products (link in the description)

**why puppeteer** 
My go to for web scraping is Puppeteer, a NodeJS library. 
The way it works is that it spins up a chrome browser in the background that we interact with through code.

I primarily use Puppeteer even after having looked into other scraping libraries and frameworks, like Selenium, PlayWright, and the more traditional forms of web scraping. 

Note that Selenium and PlayWright support multiple languages and browsers but are built specifically for testing.  

In my opinion Puppeteer stands out because it focuses on browser automation, not
- It was created and supported by Google
- It's also incredibly fast because it uses the devtools protocol. 

Think of how you can use the console in the browser inspector to do things, that's like what Puppeteer uses to control the browser. 

And also, being forced into Javascript and Chrome is not that bad, considering Javascript is great and Chrome is supported by probably 99% of websites.

I would like to add that PlayWright is a newer library that was created by the original Puppeteer team. 

Its very similar to Puppeteer and supports more languages and browsers. 

I still personally prefer Puppeteer because PlayWright's focus is at testing, but if you guys want to try something newer, go for it. 

**warning**
Before we get into the tutorial, I should say that you need to be careful when web scraping.

You might trigger website defenses and have your ip address blocked for some websites temporarily.

Scraping publically available data is fine, but sensitive private content is not. It might not be legal, especially if you want to use the data for commercial uses.

Speaking of, you should know that programming your own web scraper might not be the best use of your time. There are paid services out there that will do this for you. 

So if you just want to get something fast, that might be something you might want to pay for.

Also, you should always investigate whether there are publically available APIs before you web scrape, which can save you tons of time. 

**basic tutorial**
Now for the tutorial section, what we'll build is a wikipedia scraper. This short project will teach you the fundamentals of webscraping with Puppeteer. 

So our scraping script will do this: go to a wikipedia page, takes a screenshot, gets all the text content of the article, then gets the references for the page.

Ok so let's get started
