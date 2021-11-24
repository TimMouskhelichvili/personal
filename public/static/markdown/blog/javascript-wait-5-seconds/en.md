---
title: How To Wait 5 Seconds In JavaScript?
seoTitle: How To Wait 5 Seconds In JavaScript?
openGraphImage: /static/images/blog/javascript-wait-5-seconds/cover.png
date: 2021-11-23
description: A guide on how to wait for X seconds before executing the next line in JavaScript.
author: Tim Mouskhelichvili
---

There is a lot of use cases where you would want to pause your JavaScript's execution before running the next line. 

Sadly, a function like that is absent from JavaScript's default functionality.

Luckily for us, JavaScript provides a few ways for a developer to wait X seconds before executing the next line of the code.

![JavaScript Wait 5 Seconds](/static/images/blog/javascript-wait-5-seconds/cover.png)

To complete this task, first of all, you will need to transform seconds into milliseconds.

To transform seconds into milliseconds you will need to multiply your seconds by 1000.

Example:
* 5 seconds = 5000 milliseconds
* 1 second = 1000 milliseconds

_____________________________

Here are three methods that will help you implement it yourself.

## 1. How To Wait 5 Seconds With A Helper Function

*This method will not work if you need to support legacy browsers.*

```javascript
const sleep = async (milliseconds) => {
    await new Promise(resolve => {
		return setTimeout(resolve, milliseconds)
	});
};

const testSleep = async () => {
    console.log('Step 1 - Called');
    await sleep(5000);
    console.log('Step 2 - Called');
}

testSleep();
```

## 2. How To Wait 5 Seconds In A Loop

Here, we are reusing the sleep helper function that we made earlier.

```javascript
const sleep = async (milliseconds) => {
    await new Promise(resolve => {
		return setTimeout(resolve, milliseconds)
	});
};

const testSleep = async () => {
	for (let i = 0; i < 10; i++) {
		await sleep(1000);
		console.log(i);
	}

	console.log("The loop is finished :)");
}

testSleep();
```

## 3. How To Wait 5 Seconds In ES5

If you need to support old browsers 😞, you will not be able to use [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or async & await. 

In that case you will need to use callbacks.

```javascript
var testSleep = function () {
    console.log('Step 1 - Called');
	setTimeout(function () {
    	console.log('Step 2 - Called');
	}, 5000);
}

testSleep();
```

## 4. Wait 5 Seconds in ES5 (DO NOT USE). 

Another way to pause your code for 5 seconds is to use the Date object with a while statement.

This is very inefficient (because it runs on the main thread).

It is only provided here for educational purposes.

```javascript
function syncDelay(milliseconds){
	var start = new Date().getTime();
	var end = 0;

	while((end - start) < milliseconds){
		end = new Date().getTime();
	}
}

console.log('Step 1 - Called');
syncDelay(5000);
console.log('Step 2 - Called');
```
## Conclusion

Now you know how to wait 5 seconds before executing your next line. 

Of course, you can wait for however long you want 😉 it was just an example.

![JavaScript Wait 5 Seconds](/static/images/blog/javascript-wait-5-seconds/ofcourse.jpg)

Thanks for reading this article. If you liked it please share it.