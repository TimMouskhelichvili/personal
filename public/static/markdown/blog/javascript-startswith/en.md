---
title: How Does StartsWith Function Work In JavaScript? 
seoTitle: How Does StartsWith Function Work In JavaScript? 
openGraphImage: /static/images/blog/javascript-wait-5-seconds/cover.png
date: 2021-11-23
description: A guide on how to wait for X seconds before executing the next line in JavaScript.
author: Tim Mouskhelichvili
---

When you will finish reading this guide you will become a pro of JavaScript's startsWith function.

You will know how to use it and when to use it.

<Summary />

## Definition

The startsWith function is used to determine if a string begins by the search value.

If the string begins by the search value, it returns *true*, otherwise, it returns *false*.

```javascript
const str = "This is a very long string!";

// This will return true. ✅
console.log(str.startsWith('This'));

// This will also return true. ✅
console.log(str.startsWith('This is a'));

// This will return false. ❌ 
// startsWith() is case sensitive.
console.log(str.startsWith('this'));

// This will return false. ❌
console.log(str.startsWith('string'));
```

This is startsWith() syntax: 

```javascript
str.startsWith(searchValue[, startPosition])
```

Here are some things that you need to take into considerations:

1. This function is **case sensitive**.
2. You can specify a start position (completely optional).

### Parameters

| Parameters | Necessity | Description |
| --- | ---- | ----------- |
| searchValue | Required | The value to search for. |
| startPosition | Optional | The default position is 0, but you can specify your own. |

### Return Value

This method will return a *boolean*.

**true** => if startsWith the search value.

**false** => if does not startsWith the search value. 

### Browser Support

This method only works on browsers that support ES2015.

| Browser | Support |
| ------- | ------- |
| Chrome | YES ✅ |
| Firefox | YES ✅ |
| Opera | YES ✅ |
| Safari | YES ✅ |
| Edge | YES ✅ |
| Internet Explorer | No ❌ |

*To support legacy browsers like Internet Explorer you will need to add a polyfill.* 

[[Get the polyfill here]](#how-to-fix-startswith-is-not-a-function)

## How to make startsWith() function case insensitive?

To make the startsWith function case insensitive you will need to make both the value and the searchValue lowercase.

```javascript
const str = "This is a very long string!".toLowerCase();
const searchValue = "THis".toLowerCase();

// This will return true. ✅
console.log(str.startsWith(searchValue));
```

Alternatively you can use [the regex method](#how-to-check-if-a-string-starts-with-another-using-a-regex) with the "i" modifier.

## How to use startsWith() function with multiple values?

## How to fix "startsWith() is not a function"?

There is two main methods to fix this error. 

1. You need to make sure that you are calling this function on a String. This method will only work on a String, so you will need to cast the value into a String.

```javascript
const str = "This is a very long string!";

// This will return true. ✅
console.log(str.indexOf("This") === 0);
```

2. You need to make sure your browser or nodeJS version support ES2015. If your environment doesn't support new EcmaScript you will need to use add this polyfill before calling this function.

```javascript
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (searchValue, position) {
    position = position || 0;

    return this.indexOf(searchValue, position) === position;
  };
}
```

## Are there alternatives to the startsWith() function?

Of course. There are a lot of alternatives to the startsWith function. 

<u>You can use the indexOf() function, the substring() function or a regex.</u>

#### 1. How to check if a string starts with another using indexOf()?

You can get the same behavior as the startsWith() function by using the indexOf() function. 

To replicate the startsWith() function, you will need to check if indexOf's return position is 0.

```javascript
const str = "This is a very long string!";

// This will return true. ✅
console.log(str.indexOf("This") === 0);

// This will also return true. ✅
console.log(str.startsWith('This'));
```

#### 2. How to check if a string starts with another using substring()?

You can check if a string starts with your search value by using the function substring with the length of the search value.

This method is a little more complicated.

```javascript
const str = "This is a very long string!";

// This will return true. ✅
console.log(str.substring(0, 4) === 'This');

// This will also return true. ✅
console.log(str.startsWith('This'));
```

#### 3. How to check if a string starts with another using a regex?

You can check if a string starts with your search value by using a regex.

This is pretty simple to do and you can specify if the case sensitivity. To make the search case insensitive add the "i" modifier at the end of the regex.

```javascript
const str = "This is a very long string!";

// This will return true. ✅
const regex = /this/i; 
console.log(regex.test(str));

// This will also return true. ✅
console.log(str.startsWith('This'));
```

## Conclusion

Now that you are a pro of the startsWith() function in JavaScript, please share this article with others so they too can become a pro just like you. Thanks for reading.