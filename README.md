# Crypto Tracker App

## Overview

Crypto Tracker App is a React-based application that provides real-time data on various cryptocurrencies. Users can view detailed information about specific coins, including their current price, market cap, and rank.

## Architecture

The application is built using the following technologies:

- **React**: For building the user interface.
- **Material-UI**: For styling and layout.
- **Axios**: For making HTTP requests to fetch cryptocurrency data.
- **React Router**: For routing and navigating between different pages.
- **html-react-parser**: For parsing HTML content from API responses.
- **CoinGecko API**: As the data source for cryptocurrency information.

### Component Structure

- **CoinPage**: The main component that displays detailed information about a specific cryptocurrency.
- **CoinInfo**: A sub-component that displays additional information and charts about the coin.
- **CryptoContext**: Context provider for managing global state, such as selected currency and symbol.
- **CoinsTable**: A component that lists various cryptocurrencies with their key data points.

### Styling

We use Material-UI's `makeStyles` hook to create custom styles for our components, ensuring a responsive and visually appealing design.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Prerana-Jadhav/react-crypto-tracker-master.git
    ```
2. Navigate to the project directory:
    ```bash
    cd crypto-tracker-app
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

### Running the App

To start the application in development mode, run:
```bash
npm start
