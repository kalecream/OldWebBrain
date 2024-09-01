# 🧠 Old Web Brain 

![img](https://media.giphy.com/media/8PpFJcG4y8HqsxQumz/giphy.gif)


## Technologies
 ![img](https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white) ![img](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white)
 ![img](https://img.shields.io/badge/Three.js-000000.svg?style=for-the-badge&logo=threedotjs&logoColor=white) ![img](https://img.shields.io/badge/Prisma-2D3748.svg?style=for-the-badge&logo=Prisma&logoColor=white)  ![img](https://img.shields.io/badge/MDX-1B1F24.svg?style=for-the-badge&logo=MDX&logoColor=white)

## Installation


### General
```bash
# Install dependencies
yarn 

# View the website at: 
# http://localhost:3001
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

# See the tables
npx prisma studio

```

> [!NOTE]
>  If you have problems with environment variable not being found, make sure the .env file is just .env and not .env.local with the prisma information.

```bash
# Update database after schema change
npx prisma migrate dev --create-only --name "migration-name"

npx prisma migrate dev
```
> [!WARNING]
> Your tables will be dropped and you will lose data unless you edit the migration file to renaming instead of dropping. It's a simple SQL query. Here is an [SQL Cheatsheet](https://www.sqltutorial.org/sql-cheat-sheet/).
---

<a href="https://ko-fi.com/sabrinamedwinter">
<img src="https://img.shields.io/badge/Kofi-FF5E5B.svg?style=for-the-badge&logo=Ko-fi&logoColor=white" />
</a>

### PR Todo list

- [ ] Update sitemap
- [ ] Test on mobile
