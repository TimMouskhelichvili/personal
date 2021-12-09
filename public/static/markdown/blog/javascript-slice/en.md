---
title: How to use slice() in JavaScript on an Array or a String?
openGraphImage: /static/images/blog/javascript-slice/cover.png
date: 2021-12-08
description: A guide on how to get the time in JavaScript? Seconds. Milliseconds. Differences.
author: Tim Mouskhelichvili
tags: javascript
---

In JavaScript, the `slice()` function is part of both the Array and the String prototype.

This function is used to select *items* or *characters* based on the provided indices.

In this article, you will find all the information needed, for you to become a pro of the `slice()` function.

I will also provide a lot of common use examples that will help you better understand this function.

![JavaScript Slice](/static/images/blog/javascript-slice/cover.png)

<Summary />

## Definition

For an array, the `slice()` built-in function is used to select *items* based on the provided indices.

For a string, the `slice()` built-in function is used to select *characters* based on the provided indices.

The `slice()` function will NOT modify the original array or string.

By using the `start` and the `end` parameters you can specify what portion of the array or string you want to select.

Here is the `slice()` function in action with an array:

```javascript
const languages = ['english', 'french', 'german', 'spanish', 'russian', 'japanese'];

// This will return: ["spanish", "russian", "japanese"]
console.log(languages.slice(3));

// This will return: ["french", "german"]
console.log(languages.slice(1, 3));

// This will return: ["spanish", "russian", "japanese"]
console.log(languages.slice(-3));

// This will return: ["spanish"]
console.log(languages.slice(3, -2));
```

Here is the `slice()` function in action with a string:

```javascript
const str = 'This is a very long string!';

// This will return: "very long string!"
console.log(str.slice(10));

// This will return: "This"
console.log(str.slice(0, 4));

// This will return: "string!"
console.log(str.slice(-7));

// This will return: "string"
console.log(str.slice(-7, -1));
```

This is the syntax of the `slice()` function.

```javascript
arr.slice([ start[, end ]])
```

*P.S. If you don't specify any parameters, the `slice()` function will return a copy of the entire array or string.*

### Parameters

| Parameters | Necessity | Description |
| --- | ---- | ----------- |
| start | Optional | The start index of the extraction. |
| end | Optional | The end index before which to extract. |

> **Start Parameter**
> 1. If the start parameter is `undefined`, the extraction will begin at index `ZERO`.
> 2. For an array, if the start parameter is greater than the length of the array, an empty array will be returned.
> 3. For a string, if the start parameter is greater than the length of the string, an empty string will be returned.

> **End Parameter**
> 1. If the end parameter is omitted, the extraction will end at the length of the array or the string.
> 2. For an array, if the end parameter is greater than the length of the array, the end index will be the length of the array.
> 3. For a string, if the end parameter is greater than the length of the string, the end index will be the length of the string.

### Return Value

For the array, a new array containing part of the original array.

For the string, a new string containing part of the original string.

## Browser Support

This method [works on all browsers](https://caniuse.com/?search=slice) since it is an ES1 feature.

| Browser | Support |
| ------- | ------- |
| Chrome | YES ✅ |
| Firefox | YES ✅ |
| Opera | YES ✅ |
| Safari | YES ✅ |
| Edge | YES ✅ |
| Internet Explorer | YES ✅ |

## Examples

Here, I've compiled a list of some common use cases for the `slice()` method.

## How to select the first X elements from an array?

To select the first X elements you need to the `start` parameter to be `0` and the specify an `end` parameter.

```javascript
const languages = ['english', 'french', 'german', 'spanish', 'russian', 'japanese'];

// This will return: ["english", "french"]
console.log(languages.slice(0, 2));
```

*In this example, we select the first 2 elements.*

## How to select the last X elements from an array?

To select the last X elements you only need to specify the `start` parameter.

```javascript
const languages = ['english', 'french', 'german', 'spanish', 'russian', 'japanese'];

// This will return: ["spanish", "russian", "japanese"]
console.log(languages.slice(3));
```

*In this example, we select the last 3 elements.*

## `slice` vs `splice`