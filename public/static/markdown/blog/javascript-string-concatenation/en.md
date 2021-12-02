---
title: How To Concatenate Strings In JavaScript?
seoTitle: How To Concatenate Strings In JavaScript?
openGraphImage: /static/images/blog/javascript-string-concatenation/cover.png
date: 2021-12-02
description: A guide on how does the startsWith() function work in JavaScript? Case Sensitivity, Multiple Values, Alternatives.
author: Tim Mouskhelichvili
---

In JavaScript, you have a lot of options when it comes to the concatenation of strings. 

You can use: 

1. The `+` operator.

2. Template literals.

3. The built-in `concat()` function of `String`.

4. The built-in `join()` function of `Array`.

In this article, I will show you how to use each one of them, as well as the positives and the negatives of each one.

![JavaScript String Concatenation](/static/images/blog/javascript-string-concatenation/cover.png)

<Summary />

## String concatenation using the `+` operator

This method is very easy to read and understand, that's why it is the first that you learn in class.

```javascript
const str = 'This is a very long' + ' ' + 'string!';

// OUTPUT: This is a very long string!
console.log(str);
```

You can also use the `+=` operator.

```javascript
let str = 'This is a very long';
str += ' ';
str += 'string!';

// OUTPUT: This is a very long string!
console.log(str);
```

> Doing `a += b` is an abbreviation of doing `a = a + b`.

If however, you have a lot of strings to concatenate it can quickly become harder to manage.

```javascript
const str = 'This' + ' is' + ' a' + ' very' + ' long' + ' string!';
// OUTPUT: This is a very long string!
console.log(str);
```

This is hard ❌ to read.

Since, the release of ES6, I prefer to use [templates strings](#string-concatenation-using-templates-literals) because they make my code more readable.

![JavaScript String Concatenation](/static/images/blog/javascript-string-concatenation/1.jpg)

## String concatenation using templates literals

If your browser [supports ES2015](https://caniuse.com/template-literals), you can use templates literals (or template strings) to concatenate strings.

Template literals are literals that are delimited by backticks (`).

```javascript
const str = 'very long';

// OUTPUT: This is a very long string!
console.log(`This is a ${str} string!`);
```

Another advantage of using templates literals is your ability to use multi-line strings.

```javascript
console.log(`
This:
is a very long string!`);
```

You can also do nesting with templates literals.

```javascript
const condition = true;
const str1 = 'very long';
const str2 = 'very little';

console.log(`This is a ${condition ? str1 : str2} string!`);
```

## String concatenation using the `concat()` function

Another option that you have is to use the `concat()` function.

It is supported by all browsers.

The `concat()` function accepts an unlimited number of strings to concat as parameters.

```javascript
// OUTPUT: This is a very long string!
console.log('This is'.concat(' a ', 'very long', ' string!'));
```

In my experience, this function is very rarely used. Developers end up using either the `+` operator or template strings.

![JavaScript String Concat Function](/static/images/blog/javascript-string-concatenation/2.jpg)

## String concatenation using the `join()` function

The final option to concatenate strings is to use the `join()` built-in function.

This method is interesting when you have a big array of strings that you want to concatenate.

Optionally, you can also specify a separator. By default, it is a comma.

```javascript
// OUTPUT: This is,a,very long,string!
console.log(['This is', 'a', 'very long', 'string!'].join());
```

To insert spaces between those strings, just specify the separator.

```javascript
// OUTPUT: This is a very long string!
console.log(['This is', 'a', 'very long', 'string!'].join(' '));
```

![JavaScript String Join Function](/static/images/blog/javascript-string-concatenation/3.jpg)

## Final Thoughts

As you can see in you have a lot of options to concatenate a string.

For my part, I mostly use the template literal for normal cases, and the `join()` function when I have an array.

Thank you for reading! Please share this article.