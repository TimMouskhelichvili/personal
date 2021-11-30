---
title: Substring() In JavaScript - How does it work? 
seoTitle: Substring() In JavaScript - How does it work? 
openGraphImage: /static/images/blog/javascript-substring/cover.png
date: 2021-11-29
description: A guide on how does the substring() function work in JavaScript?
author: Tim Mouskhelichvili
---

You may know the substring() function, but do you know everything about it? 

In this article, you will find all the information needed, from *the definition* to the *difference between substring() slice() and substr()*.

I will also provide valuable examples for some of the most common use cases that you may encounter.

![JavaScript Substring](/static/images/blog/javascript-substring/cover.png)

<Summary />

## Definition

The substring() function is used to extract a substring between the start & end position.

Here is the substring() function syntax.
```javascript
str.substring(start[, end]);
```

There are 3 different ways to call the substring() function:

#### 1. When you specify both the start and end parameters.

```javascript
const str = "This is a very long string!";

// This will return => "This i"
console.log(str.substring(0, 6));
```

It will return a new substring, in this case: "This i".

#### 2. When you specify the start but omit the end parameter.

```javascript
const str = "This is a very long string!";

// This will return => "s a very long string!"
console.log(str.substring(6));
```

It will return the new substring from position 6.

#### 3. When you specify a negative start position.

```javascript
const str = "This is a very long string!";

// This will return => "This i"
console.log(str.substring(-2, 6));
```

This will give the same result as for 0.

Note: the start or end lower than ZERO will be treated as ZERO.

### 1. Parameters

| Parameters | Necessity | Description |
| --- | ---- | ----------- |
| start | Required | The start position. |
| end | Optional | The end position. |

*Notes:* 
1. The start index is 0.
2. If no end parameter is provided => the rest of the string.

### 2. Return Value

The substring method will return a new *string* containing part of the given string.

## Browser Support

The substring() function works on all browsers. 🥳

| Browser | Support |
| ------- | ------- |
| Chrome | YES ✅ |
| Firefox | YES ✅ |
| Opera | YES ✅ |
| Safari | YES ✅ |
| Edge | YES ✅ |
| Internet Explorer | YES ✅ |

## Examples

Here, I've compiled a list of some common use cases for the substring() method.

## 1. How to get the substring before a specified character?

You can get a substring before a specified character using the substring() and indexOf() functions.

```javascript
const str = "This is a, very long string!";

// This will return => "This is a"
console.log(str.substring(0, str.indexOf(',')));
```

In this case, it will return: "This is a".

## 2. How to get a substring between two characters?

You can get a substring between two characters by using the substring(), indexOf() and lastIndexOf() functions.

```javascript
const str = "This is a, very long string!";

// This will return => " very long string"
console.log(str.substring(
	str.indexOf(",") + 1, 
	str.lastIndexOf("!")
));
```

In this case, it will return: " very long string".

## 3. How to get the first character?

You can get the first character of a string by using the substring() function with 0 as start position and 1 as end position.

```javascript
const str = "This is a, very long string!";

// This will return => "T"
console.log(str.substring(0, 1));
```

In this case, it will return: "T".

## 4. How to get the last character of a string?

You can get the last character of a string by using the substring() function with the length of the string minus 1 as the end position.

```javascript
const str = "This is a, very long string!";

// This will return => "!"
console.log(str.substring(str.length - 1));
```

In this case, it will return: "!".

## The difference between substring() and substr()

## The difference between substring() and slice()

## Substring() vs Substr() vs Slice()

## substr deprecated

## Polyfills

## Final Thoughts