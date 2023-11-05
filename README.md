# BayEye Briefings
## By @Campbellb

Welcome to the BayEye Project! This is a quick guide to help you get the project running on your local machine.

## Prerequisites

- Git
- Node.js
- npm

## Installation

First, clone the project using Git:

```bash
git clone https://github.com/campbellb/bayeye.git
```

Change into the project directory:

```bash
cd bayeye
```

Install the necessary npm packages:

```bash
npm install
```

## Configuration

You'll need to obtain a Donovan API key and add it to your environment variables. Create a `.env.local` file in the root of your project and add the following line:

```env
DONOVAN_API_KEY=<Your-Donovan-API-Key-Here>
```

Make sure to replace `<Your-Donovan-API-Key-Here>` with your actual API key.

## Running the Server

After installation and configuration, you can run the Next.js server:

```bash
npm run dev
```

The server will start and you can navigate to `http://localhost:3000` to view the application.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
