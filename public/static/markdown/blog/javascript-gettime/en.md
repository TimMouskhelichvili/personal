---
title: How To Get The Time In JavaScript?
openGraphImage: /static/images/blog/javascript-gettime/cover.png
date: 2021-12-06
description: A guide on how to get the time in JavaScript? Seconds. Milliseconds. Differences.
author: Tim Mouskhelichvili
tags: javascript
---

To get the time in JavaScript, you will need to work with the built-in `Date` object.

The `Date` object represents a moment in time in a platform-independent manner and has a lot of helper functions that will help the developer better manage the date and the time.

By the end of this article, you will know:

1. How to get the current time.
2. How to get the difference between two times.
3. How to format time.

Let's get to it 🙃!

![JavaScript GetTime](/static/images/blog/javascript-gettime/cover.png)

<Summary />

## How to get the current timestamp?

To get the current timestamp you need to use the `Date` object.

You have a few options:

1. Use the `now()` function.
```javascript
console.log(Date.now());
```

2. Use a date shorthand.

```javascript
console.log(+ new Date());
```

3. Use the `getTime()` function.

```javascript
console.log(new Date().getTime());
```

## How to get the current time in milliseconds?

In JavaScript, to get the current time in milliseconds, you need to use the `getTime()` built-in function of the `Date` object.

Since we want the current time, first we will need to get a new instance of the `Date` object. 

Then we need to call the `getTime()` function.

```javascript 
const current = new Date();
console.log(current.getTime());
```

This code will return the current time in milliseconds.

`Notes:`
1. The `getTime()` function is an ES1 feature and is supported by all browsers.

2. The `getTime()` will return [the milliseconds since Unix Epoch](https://en.wikipedia.org/wiki/Unix_time).

3. The `getTime()` will always use UTC, this means that the result is timezone independent and will be the same across different parts of the world.

## How to get the current time in seconds?

Since 1 second equals 1000 milliseconds, to get the current time in seconds you will need to divide the `getTime()` result by 1000.

```javascript 
const current = new Date();
console.log(current.getTime() / 1000);
```

This code will return the current time in seconds.

## How to get the difference between two times?

To get the difference between two times you need:

1. To get both the start and the end time in milliseconds (with the `getTime()` function).

2. Subtract the start time from the end time.

```javascript
// this is just an example.
const startDate = new Date('2021-12-01');
const endDate = new Date();
console.log(endDate.getTime() - startDate.getTime());
```

If you want the difference to be in seconds, just divide the result by 1000.

```javascript
// this is just an example.
const startDate = new Date('2021-12-01');
const endDate = new Date();
console.log((endDate.getTime() - startDate.getTime()) / 1000);
```

## How to format time?

Formatting time in JavaScript can be a complex task. This is why I always use an npm library when I need to work with dates.

Lately, my favorite date npm library has become [day-js](https://day.js.org/).

> I do not recommend using moment.js since it is a [legacy project](https://momentjs.com/docs/#/-project-status/).

Here is an example of how to format a date in day-js.

```javascript
dayjs('2021-12-25').format('DD/MM/YYYY');
```

![JavaScript GetTime](/static/images/blog/javascript-gettime/2.jpg)

Day.js is: 

1. Very small (2kB)
2. Has great support for internationalization.
3. Is very simple to use.

Day.js supports a lot of different date formats and a lot of different locales, so you should definitely [check it out](https://day.js.org/docs/en/parse/string-format).

## Final Thoughts

Working with dates can be challenging especially when you need to support different locales. 

That's why I always prefer to use a library like day-js when I need to work with dates.

![JavaScript GetTime](/static/images/blog/javascript-gettime/1.jpg)

But, if you don't need locale support, the `Date` object is just fine.

Thank you for reading this article, please share it!