# Alan Padiernos Portfolio - Frontend React Application

This project is a React-based frontend application designed to function as a portfolio and resume builder. It leverages Firebase Authentication for user authentication and Axios for making REST API calls with bearer tokens to perform CRUD operations related to the resume builder. The application is built using Vite for a fast and optimized development experience.

## Features

- **Firebase Authentication**: Secure user authentication.
- **REST API CRUD Operations**: Manage resume data using Axios with bearer token authentication.
- **React-based UI**: Built with React, Redux for state management, and TailwindCSS for styling.
- **Form Management**: Utilizes `react-hook-form` for efficient form handling.
- **Toast Notifications**: Provides user feedback with `react-hot-toast`.
- **Routing**: Implements `react-router-dom` for navigation.

## Getting Started

### Prerequisites

- Node.js (version 18.x recommended)
- npm or yarn
- Firebase project with Authentication enabled

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/alan-padiernos-portfolio-frontend-react.git
   cd alan-padiernos-portfolio-frontend-react
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and add the following variables:

   ```env
   VITE_API_URL=YOUR_API_URL
   VITE_FIREBASEAUTHUSER_ID=YOUR_FIREBASEAUTHUSER_ID
   VITE_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
   VITE_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
   VITE_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
   VITE_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
   VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
   VITE_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID
   ```

   Replace the placeholders with your actual Firebase and API credentials.

4. **Run the development server**

   ```bash
   npm run dev
   ```

   The application should now be running on `http://localhost:3000`.

### Building for Production

To build the application for production, run:

```bash
npm run build
```

This will lint the code, compile TypeScript, and generate an optimized production build in the `dist` directory.

### Previewing the Production Build

To preview the production build locally, use:

```bash
npm run preview
```

## Dependencies

### Core Dependencies

- **React**: A JavaScript library for building user interfaces.
- **React DOM**: Provides DOM-specific methods for React.
- **Redux Toolkit**: Simplifies Redux development with utilities and best practices.
- **Axios**: Promise-based HTTP client for making API requests.
- **Firebase**: Backend-as-a-Service for authentication and other features.
- **React Hook Form**: Library for managing forms in React.
- **React Hot Toast**: Lightweight toast notifications for React.
- **React Router DOM**: Declarative routing for React applications.

### Development Dependencies

- **TypeScript**: Adds static typing to JavaScript.
- **Vite**: Next-generation frontend tooling for fast development.
- **ESLint**: Pluggable linting utility for JavaScript and TypeScript.
- **TailwindCSS**: Utility-first CSS framework for rapid UI development.
- **PostCSS**: Tool for transforming CSS with JavaScript.

## TODO

- **Migrate Axios REST API to Cloud Functions**: Transition from direct Axios calls to Firebase Cloud Functions for better scalability and security.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

**Note**: Replace `yourusername` with your actual GitHub username and update the environment variables with your Firebase project credentials.
