# mattmiling-ui
A React+Vite+Tailwind application serving as the main site for Matt Miling.

# Quickstart

1. Build:

   ```
   npm run build
   ```

2. Run:

   ```
   npm run preview
   ```

# Development

1. Build and Run:

   ```
   npm run build && npm run preview
   ```

2. Run the tailwind observer:

   ```
   npx tailwindcss -i ./src/index.css -o ./src/output.css --watch
   ```

# Deploy

1. Create a deploy-env.sh script with a single line that sets the `AWS_CF` variable:

   ```
   source deploy-env.sh
   ```

2. Run deploy:

   ```
   npm run deploy
   ```