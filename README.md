# Genesis with Nuxt 3

Using Nuxt UI Pro - SaaS template

## Project structure

```
/app.vue
/components
/layout
/pages
```

app is the root component of our app
components is where we put general reusable components
layout is where we put our pages layouts
pages is where we put our views pages

### Add new module in application

To create a new module you should create a folder with the module name inside some main folders like: pages and components

```
/components/new_module
/pages/new_module
```

## Setup

### Install the dependencies:

```bash
# pnpm
pnpm install
```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm run dev
```

### Production

Build the application for production:

```bash
# pnpm
pnpm run build
```

Locally preview production build:

```bash
# pnpm
pnpm run preview
```
