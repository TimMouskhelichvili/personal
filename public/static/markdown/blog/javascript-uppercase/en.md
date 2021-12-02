---
title: How to uppercase a string in JavaScript?
seoTitle: How to uppercase a string in JavaScript?
openGraphImage: /static/images/blog/javascript-uppercase/cover.png
date: 2021-12-01
description: A guide on how does the toUpperCase() function work in JavaScript? Definition + Examples.
author: Tim Mouskhelichvili
---

In JavaScript, to make a string uppercase, the easiest way to do it is by using the `toUpperCase()` built-in function.

This function is easy to master (even for a beginner), and you will become a pro of using it by the end of this article.

I will also be providing some valuables use cases that you may encounter while developing in JavaScript.

![JavaScript Substring](/static/images/blog/javascript-uppercase/cover.png)

<Summary />

## Definition

The `toUpperCase()` function is used to uppercase a string.

Here is the `toUpperCase()` function syntax.

```javascript
yourString.toUpperCase();
```

Here is an example of how you would call that function.

```javascript
const str = "This is a very long string!";

// This will return => "THIS IS A VERY LONG STRING!"
console.log(str.toUpperCase());
```

In that case, it will return: "THIS IS A VERY LONG STRING!".

### 1. Parameters

The `toUpperCase()` function does not accept any parameters.

### 2. Return Value

The `toUpperCase()` function returns the string converted to uppercase.

## Browser Support

The `toUpperCase()` function works on [all browsers](https://caniuse.com/mdn-javascript_builtins_string_touppercase). 🥳

| Browser | Support |
| ------- | ------- |
| Chrome | YES ✅ |
| Firefox | YES ✅ |
| Opera | YES ✅ |
| Safari | YES ✅ |
| Edge | YES ✅ |
| Internet Explorer | YES ✅ |

## How to uppercase the first letter?

You have a few options to uppercase the first letter of a string.

### 1. Using the `charAt()` with the `slice()` function.

In order to uppercase the first letter of a string you can use the `chatAt()`, `toUpperCase()` and `slice()` functions.

```javascript
const str = "this is a very long string!";

// This will return => "This is a very long string!"
console.log(str.charAt(0).toUpperCase() + str.slice(1));
```

In that case, it will return: "This is a very long string!".

### 2. Using the `replace()` function.

Also, you can use the `replace()` function to uppercase the first letter of a string.

```javascript
const str = "this is a very long string!";

// This will return => "This is a very long string!"
console.log(str.replace(/./, c => c.toUpperCase()));
```

In that case, it will return: "This is a very long string!".

## How to uppercase the first letter of each word?

You can use a regex to uppercase the first letter of each word.

```javascript
const str = "This Is A Very Long String!";

// This will return => "This Is A Very Long String!"
console.log(str.replace(/(^|\s)\S/g, (letter) => letter.toUpperCase()));
```

In that case, it will return: "This Is A Very Long String!".

## Final Thoughts

As you can see the `toUpperCase()` is pretty straight and forward and not difficult to master.

Now that you are a pro of this function please share this article with your fellow coders.

![JavaScript toUpperCase](/static/images/blog/javascript-uppercase/1.jpg)

Thank you for reading.