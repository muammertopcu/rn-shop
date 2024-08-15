# React Native Shop

A performant e-commerce product catalog built with React Native. The application allows users to browse products, filter
and sort them, and manage a shopping cart.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Technologies](#technologies)

## Features

- **Product Listing:** Fetch and display products from a mock API.
- **Shopping Cart:** Add, remove, and manage items in the cart; display total price.
- **Performance Optimization:** Implement lazy loading, code splitting, and React hooks for optimization.
- **Error Handling:** Graceful handling of API errors with user-friendly messages.
- **Testing:** Unit tests with Jest and React Testing Library.

## Getting Started

These instructions will help you set up the project on your local machine.

## Prerequisites

- Node.js
- npm or yarn

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/muammertopcu/rn-shop.git
    ```
   
2. Navigate to the project directory:
    
    ```bash
    cd rn-shop
    ```

3. Install the dependencies:

    ```bash
    npm start
    # or
    yarn start
    ```

4. For iOS, install CocoaPods dependencies:
    
    ```bash
    npx pod-install
    ```

## Usage

1. Start the development server:

    ```bash
    npm start
    # or
    yarn start
    ```
   
2. Run the application on a simulator or device:

    ```bash
    npm run ios
    # or
    npm run android
    ```
   

## Testing

Run the unit tests with Jest:

```bash
npm test
# or
yarn test
```

## Technologies

- React Native
- React Navigation
- Redux Toolkit
- Styled Components
- Jest & React Testing Library
