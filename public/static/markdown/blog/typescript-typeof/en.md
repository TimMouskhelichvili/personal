---
title: How does typeof work in TypeScript?
openGraphImage: ./images/cover.png
date: 2021-12-14
description: A guide on how does typeof work in TypeScript?
author: Tim Mouskhelichvili
tags: typescript
---

![TypeScript typeof](./images/cover.png)

<Summary />

TypeScript just like JavaScript has a special `typeof` operator.

In TypeScript, the `typeof` operator is used to refer to *the type of a variable* in a type context.

```typescript
const v = 'This is a string';
const data: typeof v;
```

In that case, the type of `data` is `string`.

Maybe you have noticed, but, in this particular example, this is not very useful, since the type is a basic type... You are right. But, the `typeof` operator becomes very handy with complex objects.

```typescript
const person = {
	age: 26,
	name: 'Tim',
	subList: {
		element1: true
	}
};

type Data = typeof person;
```

In that case, the `Data` type will have this structure:

```typescript
type Data = {
	age: number;
    name: string;
	subList: {
		element1: boolean;
	};
};
```

In that example, we create a type based on the structure of the `person` variable, that we can later use to match other variables.

> P.S. You can only use the `typeof` on variable names or their properties.

## How to get the type from array elements?

In TypeScript, you can transform elements from an array into a union type using the `const` keyword.

```typescript
const animals = [ 'dog', 'cat', 'elephant' ] as const;
type Data = typeof animals[number];
```
In that case, the `Data` type will have this structure:

```typescript
type Data = 'dog' | 'cat' | 'elephant';
```

This also work on an array of objects!

```typescript
const animals = [
    { age: 3, type: 'dog' },
    { age: 4, type: 'cat' }
];
type Data = (typeof animals)[number];
```

In that case, the `Data` type will have this structure:

```typescript
type Data = {
	age: number;
	type: string;
};
```

## How does `keyof typeof` work in TypeScript?

In TypeScript, `keyof typeof` is used to get a union type of an object's keys.

```typescript
const person = {
	age: 26,
	name: 'Tim'
};

type Data = keyof typeof person;
```

In that case, the `Data` type will have this structure:

```typescript
type Data = 'name' | 'age';
```

This also works on an `enum`!

```typescript
enum Animal {
	cat,
	dog,
	cow
}
type Data = keyof typeof Animal;
```

In that case, the `Data` type will have this structure:

```typescript
type Data = 'cat' | 'dog' | 'cow';
```

## How to get the return type of a function?

In TypeScript, you can get the return type of a function using the `ReturnType`, introduced in TypeScript v2.8. `ReturnType` will take a function type and return its return type.

```typescript
const createPerson = () => ({
	age: 26,
	firstName: 'Tim'
});
  
type Data = ReturnType<typeof createPerson>
```

In this example, the `Data` type will have this structure:

```typescript
type Data = {
	age: number;
	firstName: string;
};
```

## Final Thoughts

As a TypeScript developer, I use the `typeof` operator a lot. It is particularly useful when you need to type-check a parameter based on an object's structure or when you need to extract keys from an object as a type.

I hope you liked this article, please share it!