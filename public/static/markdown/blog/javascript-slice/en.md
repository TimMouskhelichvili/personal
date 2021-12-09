---
title: Slice() In JavaScript - How To Select Elements In An Array?
openGraphImage: /static/images/blog/javascript-slice/cover.png
date: 2021-12-08
description: A guide on how to get the time in JavaScript? Seconds. Milliseconds. Differences.
author: Tim Mouskhelichvili
tags: javascript
---

![JavaScript Slice](/static/images/blog/javascript-slice/cover.png)

<Summary />

## Definition

The `slice()` built-in array function is used to select a portion of elements from an array.

You can select part of an array by using the `start` and the `end` parameters.

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

This is the syntax of the `slice()` function.

```javascript
arr.slice([ start[, end ]])
```

### Parameters

| Parameters | Necessity | Description |
| --- | ---- | ----------- |
| start | Optional | The start index of the extraction. |
| end | Optional | The end index before which to extract. |

> **Start Parameter**
> 1. If the start parameter is `undefined`, the extraction will begin at index `ZERO`.
> 2. If the start parameter is greater than the length of the array, an empty array will be returned.

> **End Parameter**
> 1. If the end parameter is omitted, the extraction will end at `arr.length`.
> 2. If the end parameter is greater than the length of the array, the extraction will end at `arr.length`.

### Return Value

A new array containing part of the array.

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