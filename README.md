<center>
<h1> 🩸 Sisyphus Escaping Liminality 🩸 </h1>
(formerly known as Old Web Brain)

![img](https://www.yunghigue.com/_next/image?url=https%3A%2F%2Fmedia1.giphy.com%2Fmedia%2Fv1.Y2lkPTc5MGI3NjExdnNwMHZrdnR6NXU4bXFmOGp5MmJwZjQ4YmwxY20yOG56ZXNhY25ucSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw%2F1xSVq3jCyrYICv5XuC%2Fgiphy.webp&w=256&q=75)

<a href="https://ko-fi.com/sabrinamedwinter">
<img src="https://img.shields.io/badge/Kofi-FF5E5B.svg?style=for-the-badge&logo=Ko-fi&logoColor=white" />
</a>

<!-- DESCRIPTION/ -->

A cross between a portfolio, a playground, and a prayer.

<!-- /DESCRIPTION -->

## Technologies

<!-- BADGIE TIME -->

<!-- END BADGIE TIME -->

![img](https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white) ![img](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white)
![img](https://img.shields.io/badge/Three.js-000000.svg?style=for-the-badge&logo=threedotjs&logoColor=white) ![img](https://img.shields.io/badge/Prisma-2D3748.svg?style=for-the-badge&logo=Prisma&logoColor=white) ![img](https://img.shields.io/badge/MDX-1B1F24.svg?style=for-the-badge&logo=MDX&logoColor=white)

</center>

<center>

### General

The following are really my notes because I don't have good memory and I like being able to copy paste commands for the ones I won't use often. So this is really a mini-wiki, but I figure it will be useful for persons who want to contribute, learn code or copy and change things to customise the site to their liking.

```bash
# Install dependencies
yarn

# View the website at:  http://localhost:3001
yarn dev
```

### Prisma

```bash
# Install the Prisma CLI
yarn add --dev prisma

# Generate artifacts
npx prisma generate

# Create tables
npx prisma db push

# Migration
npx prisma migrate dev --name init

# See the tables
npx prisma studio

```

</center>

> [!NOTE]
> If you have problems with environment variable not being found, make sure the .env file is just .env and not .env.local with the prisma information.

```bash
# Update database after schema change
npx prisma migrate dev --create-only --name "migration-name"

npx prisma migrate dev
```

> [!WARNING]
> Your tables will be dropped and you will lose data unless you edit the migration file to renaming instead of dropping. It's a simple SQL query. Here is an [SQL Cheatsheet](https://www.sqltutorial.org/sql-cheat-sheet/).

> [!NOTE]
> If you intend on deploying to Vercel, it is very important that you click this link should you encounter a build error -> [Link](https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/vercel-caching-issue)

---

<center>

### PR Todo list

See something, you would like to change? You're welcome to submit a PR. Here are some things that need to be done! I also try to go through this checklist before merging.

- [ ] Update sitemap
- [ ] Test on mobile

## Releasing

```bash

yarn release -- --release-as patch
yarn release -- --release-as minor
yarn release -- --release-as major

git push --follow-tags origin main
```

<!-- BACKERS/ -->

## Backers

### Code

### Finances

<!-- /BACKERS -->

<!-- HISTORY/ -->

## History

[Discover the release history by heading on over to the releases page.](https://github.com/kalecream/OldWebBrain/releases)

<!-- /HISTORY -->

</center>
