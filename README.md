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

1. Run development to allow code updates to refresh page automatically:

   ```
   npm run dev
   ```

2. Run the tailwind observer:

   ```
   npx tailwindcss -i ./src/index.css -o ./src/output.css --watch
   ```

# Deploy

1. Create a deploy-env.sh script with a single line that sets the `AWS_CF_DIST_ID` variable with the 14-character cloudfront distribution ID, then source it:

   ```
   source deploy-env.sh
   ```

2. Run deploy:

   ```
   npm run deploy
   ```