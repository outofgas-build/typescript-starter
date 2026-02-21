# ts-foundry

A TypeScript project template with [Bun](https://bun.com), [tsup](https://github.com/egoist/tsup), [Vitest](https://vitest.dev), and [Biome](https://biomejs.dev).

## Clone the Repository

```bash
git clone git@github.com:outofgas-build/ts-foundry.git
cd ts-foundry
```

## Create a New Project from This Template

1. Clone the repository:

   ```bash
   git clone git@github.com:outofgas-build/ts-foundry.git my-project
   cd my-project
   ```

2. Remove the existing git history and reinitialize:

   ```bash
   rm -rf .git
   git init
   ```

3. Update `package.json` with your project's name and details.

4. Install dependencies:

   ```bash
   bun install
   ```

5. Start developing!

## Scripts

```bash
bun run build       # Build with tsup
bun run dev         # Build in watch mode
bun run test        # Run tests with coverage
bun run test:watch  # Run tests in watch mode
bun run lint        # Lint with Biome
bun run format      # Format with Biome
```
