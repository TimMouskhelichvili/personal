---
title: Yarn vs npm - The Complete Guide
seoTitle: Yarn vs npm - The Complete Guide
date: 2021-11-15
description: My top 5 features of TypeScript in 2021 and why should you choose TypeScript over JavaScript for your next web application.
author: Tim Mouskhelichvili
---

Some time ago, when package managers didn't exist, it was very hard to manage all of your project's dependencies. This task was also growing in complexity when your project grew in size. Nowadays, luckily for us, we have package managers that help us add, remove and update dependencies to our project.

The two biggest package managers for JavaScript developers are **Yarn** and **npm**. 

It can be quite a dilemma when choosing between them, so this article will compare them to each other and help you decide which one to use in your next JavaScript project.

## What is npm?

Npm (an acronym for Node Package Manager) is a package manager and was released in 2010. 

This is the default package manager that is installed when you install Node.js.

Npm is FREE TO USE and you can download all public packages without registration.

It is composed of:

1. The [platform](https://www.npmjs.com/) where the developer can search and publish npm packages.

2. The registry where all the packages are stored. The packages can be public or paid-for-private.

2. The [CLI](https://docs.npmjs.com/cli/v7/commands/npm) that helps you interact with the npm registry and manage your dependencies.

You can follow the updates of this project [here](https://github.com/npm/cli).

## What is Yarn?

**Yarn** (an acronym for Yet Another Resource Negotiator) is a package manager released by Facebook in 2016.

Yarn is a completely free and open-source tool. You can view the project [here](https://github.com/yarnpkg/berry).

Originally, it was created to address the performance and security issues of npm. Since then, npm has fixed a lot of its issues, but Yarn still has some nice features that npm doesn't have.

Some of Yarn features are:

1. **Plug'n'Play**: Run a JavaScript project without node_modules.

2. **Offline Cache**: Yarn will work fine if your network goes down for some reason.

3. **Workspaces**: Yarn makes it easy for multiple projects to exist in the same repository and to reference each other.

4. **Plugins**: You can add plugins that will add new resolvers, fetchers, linkers, commands...

5. **TypeScript**: Yarn is written with TypeScript and typed.

## Yarn vs Npm Popularity

Since npm is the default package manager for Node.js and that more people are aware of it, it is more popular than Yarn.

![Yarn vs Npm Popularity](/static/images/blog/yarn-vs-npm-the-complete-guide/popularity-yarn-vs-npm.png)

When it comes to developers, Yarn has more stars on Github than npm.

## Yarn vs Npm Installation

Npm is directly installed when you install Node.js so if you have Node.js you have npm. If you don't have node.js go [here](https://nodejs.org/) and download the LTS version.

### How to install Yarn?

Yarn can be installed through the command line of your terminal. I like to use the integrated terminal of VSCode for this.

```console
npm install yarn --global
```

## Yarn vs Npm Lock file

## Yarn vs Npm Commands

## Yarn vs Npm Adding a package

## Yarn vs Npm Dev Dependencies

## Yarn vs Npm Removing a package

## Yarn vs Npm Updating a package

## Yarn vs Npm Search for Outdated Packages

## Yarn vs Npm Benchmarks (Speed Test)

## Conclusion