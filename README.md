# 🧠 Old Web Brain 


## Installation

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

> [!Note]
>  If you have problems with the database, with environment variable not being found, make sure the .env file is just .env and not .env.local with the prisma information.
