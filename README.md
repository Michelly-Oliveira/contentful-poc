# contentful-test Site

## Get started

1. Clone the repo to your local system:

   ```shell
   git clone <repo url/ssh key>
   ```

2. Then, install all necessary dependencies. This project uses `pnpm` as its package manager

   ```shell
   pnpm install
   ```

3. Setup environment

   At the moment, environment variables are held by individual contributors only. Please reach out to an IC for access.

   For running the site locally, keep the site url set to localhost:3000

4. Run your local dev

   ```shell
   pnpm dev
   ```

   This will run your local site on [http://localhost:3000](http://localhost:3000)

   <br />

## Node version

This project uses Node v24.3.0. If you are using `nvm`, you can run `nvm use` to switch to the correct version.

If you don't have `nvm` installed you can install it [here](https://github.com/nvm-sh/nvm).

## Commit Guidelines

This project uses conventional commits, with Husky v9 for Git hooks. Pre-commit hooks run using pnpm to ensure
consistent behavior across environments.

Commits should follow the format:

```
<type>(<scope>): <description>

[optional body]
[optional footer]
```

Example: `feat(web): add new hero component`

Common types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc)
- `refactor`: Code changes that neither fix a bug nor add a feature
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks, dependency updates, etc

## GraphQL Codegen

This project uses GraphQL Code Generator to create type-safe SDK methods for Contentful queries.

### Setup

1. Ensure your `.env` file has the required Contentful variables (see `.env.example`)
2. Create `.graphql` files with your queries/fragments in `src/`
3. Run codegen:

   ```shell
   pnpm codegen:generate
   ```

This generates `src/lib/graphql/types.ts` and `src/lib/graphql/sdk.ts`.

### Usage

```ts
import { contentfulClient } from '@/lib/api/contentfulClient';

const client = contentfulClient();
const data = await client.GetPageBySlug({ slug: 'home' });
```

## Contributing

1. Create a new branch from `staging`
2. Make your changes following our coding standards
3. Write/update tests as needed
4. Update documentation
5. Submit a pull request
6. Ensure all checks pass
