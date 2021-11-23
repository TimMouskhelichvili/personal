---
title: Yarn vs npm - The Complete Guide
seoTitle: Yarn vs npm - The Complete Guide
openGraphImage: /static/images/blog/yarn-vs-npm-the-complete-guide/cover.png
date: 2021-11-17
description: A Complete Guide on Yarn vs npm. Comparison, Differences, Benchmark Tests and Commands.
author: Tim Mouskhelichvili
---

Some time ago, when package managers didn't exist, it was very hard to manage all of your project's dependencies. This task was also growing in complexity when your project grew in size. Nowadays, luckily for us, we have package managers that help us add, remove and update dependencies on our projects.

![Yarn vs npm](/static/images/blog/yarn-vs-npm-the-complete-guide/cover.png)

The two biggest package managers for JavaScript developers are **Yarn** and **npm**. 

It can be quite a dilemma when choosing between them, so this article will compare them to each other and help you decide which one to use in your next JavaScript project.

<Summary />

## What is npm?

Npm (an acronym for Node Package Manager) is a package manager and was released in 2010. 

This is the default package manager that is installed when you install Node.js.

Npm is FREE TO USE and you can download all its public packages without registration.

It is composed of:

1. The [platform](https://www.npmjs.com/) where the developer can search and publish npm packages.

2. The registry where all the packages are stored (The packages can be public or paid-for-private).

2. The [CLI](https://docs.npmjs.com/cli/v7/commands/npm) that helps you interact with the npm registry and manage all your dependencies.

You can follow the updates of this project [here](https://github.com/npm/cli).

## What is Yarn?

**Yarn** (an acronym for Yet Another Resource Negotiator) is a package manager released by Facebook in 2016.

![Yarn](/static/images/blog/yarn-vs-npm-the-complete-guide/yarn.jpeg)

Yarn is a completely free and open-source tool. You can view the project [here](https://github.com/yarnpkg/berry).

Originally, it was created to address the performance and security issues of npm. Since then, npm has fixed a lot of its issues, but Yarn still has some nice features that npm doesn't have.

Some of Yarn's features are:

1. **Plug'n'Play**: Run a JavaScript project without node_modules.

2. **Offline Cache**: Yarn will work fine even if your network goes down for some reason.

3. **Workspaces**: Yarn makes it easy for multiple projects to exist in the same repository and to reference each other.

4. **Plugins**: You can add plugins that will add new resolvers, fetchers, linkers, commands...

5. **TypeScript**: Yarn is written with TypeScript and typed.

## Yarn vs Npm Popularity

Since npm is the default package manager for Node.js and that more people are aware of it, it is more popular than Yarn.

![Yarn vs Npm Popularity](/static/images/blog/yarn-vs-npm-the-complete-guide/popularity-yarn-vs-npm.png)

However, when it comes to developers, Yarn has more stars on Github than npm.

## Yarn vs Npm Installation

Npm is directly installed when you install Node.js so if you have Node.js you have npm. 

*P.S. If you don't have Node.js go [here](https://nodejs.org/) and download the LTS version of Node.js.*

#### How to check npm version?

Check your npm version by running this command.

```console
npm --version
```

#### How to install Yarn?

Yarn can be installed through the command line of your terminal. I like to use the integrated terminal of VSCode for this.

```console
npm install --global yarn
```

#### How to check Yarn version?

Check Yarn version by running this command.

```console
yarn --version
```

## Yarn vs Npm Lock file

To make it consistent across all environments, when a package manager modifies the node_modules folder or the package.json file, it stores all the versions of the packages inside a special lock file. This lock file is auto-generated and managed by the package manager. 

For npm, this file is called *package-lock.json*.

For yarn, this file is called *yarn.lock*.

This file is intended to be committed inside the repository of your project. 

DO NOT DELETE IT.

![Yarn vs Npm Popularity](/static/images/blog/yarn-vs-npm-the-complete-guide/lockfile.jpeg)

It is advised not to use both yarn and npm because this can create dependency conflicts. 

When it comes to Yarn, Yarn makes it easy to switch from npm, because it can use package-lock.json natively to import dependencies without external libraries.

## Yarn vs Npm Commands

Both Yarn and Npm provide a rich CLI that will help you manage your dependencies and publish your packages. Here are a few of those commands.

### Yarn commands

| Command | Description |
| --- | ----------- |
| yarn init | Initializes the development of your package. |
| yarn install | Installs all the dependencies defined in your package.json file. |
| yarn add <package\> | Adds a package to use in your current package. |
| yarn remove <package\> | Removes a package from your current package. |
| yarn publish | Publishes your package to a registry. |
| yarn why <package\> | Display the reason why a package is needed. |
| yarn licenses ls | Allows you to inspect the licenses of your dependencies |
| yarn outdated | Checks for outdated package dependencies. |

You can view the full list of all commands of Yarn [here](https://yarnpkg.com/cli/install).

### Npm commands

| Command | Description |
| --- | ----------- |
| npm init | Initializes the development of your package. |
| npm install | Installs all the dependencies defined in your package.json file. |
| npm install <package\> | Adds a package to use in your current package. |
| npm uninstall <package\> | Removes a package from your current package. |
| npm publish | Publishes your package to a registry. |
| npm outdated | Checks for outdated package dependencies. |

You can view the full list of all commands of npm [here](https://docs.npmjs.com/cli/v7/commands).

### Yarn vs Npm commands difference

As you can see, both yarn and npm have a lot of the same commands. The two big differences are the commands to add and to remove a package.

* Add a package: ***yarn add <package\>*** vs ***npm install <package\>***.

* Remove a package: ***yarn remove <package\>*** vs ***npm uninstall <package\>***.

Also, Yarn supports some commands that npm doesn't: 

* ***yarn why***

*  ***yarn licenses ls***.

## Yarn vs Npm Adding a package

#### How do you add a package in Yarn?

Add a package with yarn by running this command.

```console
yarn add <package>
```

#### How do you add a package in npm?

Add a package with npm by running this command.

```console
npm install <package>
```

## Yarn vs Npm Dev Dependencies Packages

#### How do you add a dev dependency package in Yarn?

Add a package as a dev dependency with yarn by running this command.

```console
yarn add <package> --dev
```

#### How do you add a dev dependency package in npm?

Add a package as a dev dependency with npm by running this command.

```console
npm install <package> --save-dev
```

You will notice very soon, that node_modules is a very heavy folder. This is completely normal.

![Node Modules](/static/images/blog/yarn-vs-npm-the-complete-guide/nodemodules.png)

## Yarn vs Npm Global Packages

*To run those commands you may need to have administrator privileges.*

#### How do you add a global package in Yarn?

Add a global package with yarn by running this command.

```console
yarn global add <package>
```

#### How do you add a global package in npm?

Add a global package with npm by running this command.

```console
npm install -g <package>
```

## Yarn vs Npm Removing a package

*Be careful not to remove something you need.*

#### How do you remove a package in Yarn?

Remove a package with yarn by running this command.

```console
yarn remove <package>
```

#### How do you remove a package in npm?

Remove a package with npm by running this command.

```console
npm uninstall <package>
```

![Deleted](/static/images/blog/yarn-vs-npm-the-complete-guide/deleted.jpg)

## Yarn vs Npm Outdated Packages

#### How do you search for outdated packages in Yarn?

Search for outdated packages with yarn by running this command.

```console
yarn outdated
```

#### How do you search for outdated packages in npm?

Search for outdated packages with npm by running this command.

```console
npm outdated
```

Here is the output of this command when I ran it on this website:

```console
$ yarn outdated

info Color legend : 
 "<red>"    : Major Update backward-incompatible updates 
 "<yellow>" : Minor Update backward-compatible features 
 "<green>"  : Patch Update backward-compatible bug fixes
Package            Current Wanted  Latest  Package Type    URL                                                                       
@types/react       17.0.34 17.0.35 17.0.35 devDependencies https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react
eslint-config-next 12.0.3  12.0.3  12.0.4  devDependencies https://github.com/vercel/next.js#readme                                  
next               12.0.3  12.0.3  12.0.4  dependencies    https://nextjs.org 
```

If a package is red, this means the dependency had a breaking change so you will need to update it manually.

## Yarn vs Npm Updating a package

#### How do you update an outdated package in Yarn?

Update all outdated packages with yarn by running this command.

```console
yarn upgrade
```

Update a specific package with yarn by running this command.

```console
yarn upgrade <package>@latest
```

#### How do you update an outdated package in npm?

Update all outdated packages with npm by running this command.

```console
npm update
```

Update a specific package with npm by running this command.

```console
npm update <package>@latest
```

## Yarn vs Npm Benchmarks (Speed Test)

In my experience, yarn is much **more faster and more stable** than npm. 

When installing a lot of packages Yarn seems to always be faster. Also, Yarn caches the packages better than npm, which speeds up time when you reinstall packages. 

Even, with the latest version of npm, npm cannot beat the speeds of Yarn.

I ran a few tests on my website's project. Those are the results:

![Npm Vs Yarn Benchmarks](/static/images/blog/yarn-vs-npm-the-complete-guide/benchmarks-yarn-vs-npm.png)

## Npm Dependency Tree Problem

One big problem with npm is a lot of times it is unable to resolve the dependency tree (which is a huge issue). 

For example for this project, I have an ESLint conflict and npm cannot resolve it.

```console
$ npm i
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR! 
npm ERR! While resolving: tim_mouskhelichvili@1.0.5
npm ERR! Found: eslint@8.2.0
npm ERR! node_modules/eslint
npm ERR!   dev eslint@"8.2.0" from the root project
npm ERR! 
npm ERR! Could not resolve dependency:
npm ERR! peer eslint@"^7.23.0" from eslint-config-next@12.0.3
npm ERR! node_modules/eslint-config-next
npm ERR!   dev eslint-config-next@"12.0.3" from the root project
```

## Conclusion

In 2021, I choose Yarn for my web development projects, for those three reasons:

* Yarn is faster.

* Yarn is better at resolving dependencies.

* I have fewer development issues with Yarn.

Thank you for reading! Please share this article.