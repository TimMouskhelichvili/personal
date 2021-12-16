---
title: How does the for loop work in TypeScript?
openGraphImage: ./images/cover.png
date: 2021-12-16
description: A guide on how does the for loop work in TypeScript?
author: Tim Mouskhelichvili
tags: typescript
---

![TypeScript for loop](./images/cover.png)

<Summary />

In TypeScript, just like in JavaScript, the `for` loop executes a code block a specified number of times.

Here is an example of the `for` loop in action:

```typescript
for (let i = 0; i < 5; i++) {
	console.log('Iteration ' + i);
}
```

Output:
```typescript
// Iteration 0
// Iteration 1
// Iteration 2
// Iteration 3
// Iteration 4
```

## Syntax of the `for` loop.

The default `for` loop is composed of 3 statements.

```typescript
for (statement 1; statement 2; statement 3) {
    // code to be executed.
}
```

| Statement | Execution |Explanation |
| -- | -- | -- |
| statement 1 | Only one time in the beginning. | The looping variable is declared here. |
| statement 2 | Every time before the execution of the code block. | The condition based on which the `for` loop will execute a new iteration of the code. |
| statement 3 | Every time after the execution of the code block. | The looping variable is updated here. |

Those are the steps when a `for` loop executes:

1. Statement 1 is executed. This is where the looping variable is declared.
2. Statement 2 is executed. If the condition is `false` the `for` loop exits.
3. The code block is executed.
4. Statement 3 is executed.
5. Go back to step 2.


## How does the `break` statement work?

The `break` statement is used to terminate a `for` loop.

```typescript
for (let i = 0; i < 5; i++) {
	if (i === 2) {
		break;
	}
	console.log('Iteration ' + i);
}
```
Output:
```typescript
// Iteration 0
// Iteration 1
```

In this example, we terminate the `for` loop's execution after the index reaches `2`.

## How does the `continue` statement work?

The `continue` statement is used to skip to the next code iteration of the `for` loop.

```typescript
for (let i = 0; i < 5; i++) {
	if (i === 2) {
		continue;
	}
	console.log('Iteration ' + i);
}
```
Output:
```typescript
// Iteration 0
// Iteration 1
// Iteration 3
// Iteration 4
```

In this example, we skip the code block's execution when the index reaches `2`.

for of
for in