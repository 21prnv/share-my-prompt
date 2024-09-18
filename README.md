# ShareMyPrompt

**ShareMyPrompt** is an open-source AI prompting tool designed for the modern world. It allows users to discover, create, and share creative prompts that inspire and enhance AI interactions. The platform is built using **Next.js**, **MongoDB**, **NextAuth**, **Tailwind CSS**, and **TypeScript** for a seamless user experience.

## Live Demo

Check out the live application here: [Live Link](https://share-my-prompt-p.vercel.app/)

## Features

- **Discover Prompts**: Browse through a wide variety of creative prompts shared by users worldwide.
- **Create Prompts**: Design and share your own prompts to inspire others.
- **AI-Driven**: ShareMyPrompt enhances creativity by providing AI-powered prompt suggestions.
- **User Authentication**: Secure and user-friendly authentication system using **NextAuth**.
- **Responsive UI**: The app uses **Tailwind CSS** for a sleek, responsive, and modern design.
- **TypeScript Support**: Ensuring strong typing and a smooth development experience.

## Tech Stack

- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Next.js API routes, MongoDB
- **Authentication**: NextAuth for secure authentication
- **Database**: MongoDB
- **TypeScript**: For static typing and improved code reliability

## Installation and Setup

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/21prnv/share-my-prompt
    cd share-my-prompt
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env.local` file and add your environment variables:
    ```env
    MONGODB_URI=your-mongodb-connection-string
    NEXTAUTH_SECRET=your-nextauth-secret
    NEXTAUTH_URL=http://localhost:3000
    ```

4. Run the development server:
    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

Once installed, you can:

- Log in with your account.
- Create new prompts and share them with the community.
- Browse and discover interesting prompts shared by others.

## Contributing

We welcome contributions! Feel free to submit issues, fork the repository, and open pull requests.

## License

This project is licensed under the MIT License
