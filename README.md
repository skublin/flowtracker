# Flowtracker
🚀 **Flowtracker** – a modern web-based project management tool built with Next.js 15, TypeScript, and Tailwind CSS, powered by Appwrite and deployed on Vercel (check it out - [flowtracker.dev](https://www.flowtracker.dev), but first reach out to me for access).

## 🌟 Features

- **User Authentication** – sign up and log in securely.
- **Workspaces** – create and manage multiple workspaces.
- **Projects** – organize your work within different projects.
- **Tasks** – manage tasks efficiently with:
  - **Table View** for structured task lists.
  - **Kanban Board** for agile workflow.
  - **Calendar View** for deadline tracking.

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React, TypeScript, Tailwind CSS, shadcn
- **Backend**: Appwrite (for authentication, database, and storage), Hono
- **Deployment**: Vercel
- **Toolkit**: Bun

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed:
- **Node.js** (latest LTS recommended)
-  **bun** or **npm** or **yarn**
- **Appwrite Instance** (if running locally)

### Installation
```sh
git clone https://github.com/skublin/flowtracker.git
cd flowtracker
bun install  # npm install or yarn install
```

### Environment Setup
Create a `.env.local` file in the root directory and add the required environment variables:
```
NEXT_PUBLIC_APP_URL=http://localhost:3000  # to use it locally

NEXT_PUBLIC_APPWRITE_ENDPOINT=your-appwrite-endpoint
NEXT_PUBLIC_APPWRITE_PROJECT=your-appwrite-project

NEXT_PUBLIC_APPWRITE_DATABASE_ID=your-appwrite-database-id
NEXT_PUBLIC_APPWRITE_WORKSPACES_ID=your-appwrite-workspaces-id
NEXT_PUBLIC_APPWRITE_MEMBERS_ID=your-appwrite-members-id
NEXT_PUBLIC_APPWRITE_PROJECTS_ID=your-appwrite-projects-id
NEXT_PUBLIC_APPWRITE_TASKS_ID=your-appwrite-tasks-id
NEXT_PUBLIC_APPWRITE_IMAGES_BUCKET_ID=your-appwrite-images-bucket-id

NEXT_APPWRITE_KEY=your-appwrite-key
```

### Running the App
```sh
bun run dev  # npm run dev or yarn dev
```
Your app will be available at `http://localhost:3000`.

## 📦 Deployment
You can easily deploy this app using Vercel, just make sure to add your environment variables in Vercel’s dashboard.

## 📄 License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## 🤝 Contributing
Contributions are welcome! Feel free to submit a PR or open an issue.

## 📩 Contact
For any questions, reach out via [szymonkublin@gmail.com](mailto:szymonkublin@gmail.com) or open an issue in the repository.

## 🙌 Credits

Special thanks to [Code With Antonio](https://www.codewithantonio.com/) for his helpful tutorial, which greatly contributed to the development of this project.
