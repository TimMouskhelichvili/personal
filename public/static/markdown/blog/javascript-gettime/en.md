---
title: How To Get The Time In JavaScript?
openGraphImage: /static/images/blog/javascript-gettime/cover.png
date: 2021-12-06
description: 4 different ways of rounding a number to 2 decimal places in javascript.
author: Tim Mouskhelichvili
tags: javascript
---

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

Then we call the `getTime()` function.

```javascript 
const current = new Date();
console.log(current.getTime());
```

This code will return the current time in milliseconds.

`Notes:`
1. The `getTime()` function is an ES1 feature and is supported by all browsers.

2. The `getTime()` will return [the milliseconds since Unix Epoch](https://en.wikipedia.org/wiki/Unix_time).

3. The `getTime()` will always use UTC, this means that its result is timezone independent and will be the same across different parts of the world.

## How to get the current time in seconds?

Since 1 second equals 1000 milliseconds, to get the current time in seconds you will need to divide the `getTime()` result by 1000.

```javascript 
const current = new Date();
console.log(current.getTime() / 1000);
```

This code will return the current time in seconds.

## How to get the difference between two times?

## How to format time?

## How to get the current time in 24h format?