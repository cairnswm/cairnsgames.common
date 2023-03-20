# Getting Started

Change port in the package.json

Change the "template" values in the modulefederation.config.js

Create relevant components
Change Application to demo the components - add fields to use as inputs to the component

# Make component reusable

ie. Use props to pass config values such as client_id etc

# CI/CD

After cloning the template update the secrets for the build process

SERVER 
FTP_USERNAME
FTP_PASSWORD
SERVER_DIR (dir should be root relative e.g /template/)

DEPLOY_DIR (dir should be root relative e.g /template/)

Server dir is used when commiting to main branch
Deploy dir used when deploying to deploy branch (ie going to production)

Commit and push code

# Structure

## Provider

Each component set that uses data should provide a Provider to manage the data, and Hooks to access the data. Do not expect users to useContext, instead wrap the useContext in the hooks so that users only use getters and fetchers.

Create a global provider, add external hooks for users to access data. see useProvider as a template for data driven values, and useTest for local only values.

To keep the provider simple and clear use internal data hooks to fetch and manage data. 
Do not export Data Hooks, rather export functions from the provider and wrap in user hooks.

## Hooks

## Components

## Application

Application is used as the entry point if running as a standalone application.

When writting a SaaS use Application as the entry point

When writing components use Application to demonstrate the components being included