# AWS App Runner Demo

A simple Node.js web application demonstrating AWS App Runner deployment.

## 🚀 Overview

This is a minimal Express.js application that serves a static website with a home page and about page. It's configured to run on AWS App Runner for easy deployment and scaling.

## 📁 Project Structure

```
apprunner-nodejs/
├── apprunner.yaml          # AWS App Runner configuration
├── server.js               # Express server entry point
├── package.json            # Node.js dependencies
├── config/
│   └── serverConfig.js     # Server configuration
├── controllers/
│   └── homeController.js   # Route controllers
├── routes/
│   └── index.js           # Express routes
└── public/
    ├── index.html         # Home page
    └── about.html         # About page
```

## 🛠️ Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   # or for development with auto-reload
   npm run dev
   ```
   
## ☁️ AWS App Runner Deployment

### Prerequisites
- AWS CLI configured
- AWS App Runner service access

### Deployment Steps

1. **Push code to a Git repository** (GitHub, GitLab, etc.)

2. **Create App Runner service:**
   - Go to AWS App Runner console
   - Choose "Create service"
   - Select "Source code repository"
   - Connect your repository
   - Configure build settings using the `apprunner.yaml` file

