# OpenNewspaper

OpenNewspaper is a web application designed to revolutionize the way users access and engage with news articles. Our platform offers a seamless and intuitive experience for discovering, reading, and sharing news from diverse sources. With a focus on user-friendliness and accessibility, OpenNewspaper is your go-to destination for staying informed about current events. OpenNewspaper uses Rapid API to show you the latest articles.

## Features

### Current Features

- **Browse and Discover:**
  - Explore a curated selection of news articles from a variety of reliable sources, covering a wide range of topics.

- **User-Friendly Interface:**
  - Enjoy a clean and intuitive interface that makes navigation effortless, allowing you to focus on the content that matters most.

- **Responsive Design:**
  - Access OpenNewspaper seamlessly from various devices, ensuring a consistent and enjoyable experience whether you're on your desktop, tablet, or smartphone.

### Planned Features

- **Search Functionality:**
  - Easily search for specific topics, keywords, or articles within the platform.

- **User Profiles and Login Authentication:**
  - Create personalized profiles to save favorite articles, follow specific topics, and track reading history.

- **Real-time Updates:**
  - Stay up-to-date with the latest news through real-time notifications and alerts.

- **Multilingual Support:**
  - Access news articles in multiple languages, promoting inclusivity and global engagement.

- **Dark Mode:**
  - Enable a dark mode for comfortable reading during low-light conditions.

- **Share and Connect:**
  - Share interesting articles with your friends and followers, fostering meaningful discussions and promoting knowledge sharing.

- **Customization Options:**
  - Tailor your news feed based on your interests, preferences, and favorite topics, creating a personalized reading experience.

- **Error Page:**
  - Prepare a better error page.

- **Bookmark Functionality:**
  - Easily bookmark articles for later reading.

- **OAuth 2.0:**
  - Implement Google authentication for easier login and signup.

- **Admin App:**
  - Allow administrators to delete old news or update news articles.

- **Caching Mechanism:**
  - Implement a feature where, upon the first request to the server, data is fetched from the API, listed, and stored in the database. If a request with the same query is made within 24 hours, data is rendered from the database. If the request is made after 24 hours, the data is updated in the database.

- **Loading Feature:**
  - Show a loading animation or message while fetching data.

- **Landing Page:**
  - Design and implement an engaging landing page.

- **Complete Overhaul with Bootstrap:**
  - Remove Material-UI and Emotion support, and completely integrate the website with Bootstrap and React Icons using React Bootstrap.

## Tech Stack

### Client-Side

- **HTML5**
- **CSS3**
- **Bootstrap 5**
- **JavaScript**
- **React**

### API

- **RapidAPI**

### Backend

- **Node.js**
- **Express.js**

### Database

- **MongoDB**

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Vipinchaudhary31122002/OpenNewspaper.git
   cd OpenNewspaper
   ```

2. **Install Dependencies:**
- Frontend Dependencies
   ```bash
   cd frontend
   npm install
   ```
- Backend Dependencies
  ```bash
  cd backend
  npm install
  ```

3. **Set Up Environment Variables:**

   Create a `.env` file in the root directory and add your environment variables (e.g., API keys, database URI).

   ```env
   RAPIDAPI_KEY=your_rapidapi_key
   MONGODB_URI=your_mongodb_uri
   ```

4. **Start the Development Server:**
 - Frontend
   ```bash
   cd frontend
   npm run dev
   ```
 - Backend
   ```bash
   cd backend
   npm run dev
   ```

## Contributing

We welcome contributions! Please follow these steps:

1. **Fork the Repository**

2. **Create a Branch:**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Commit Your Changes:**

   ```bash
   git commit -m 'Add some feature'
   ```

4. **Push to the Branch:**

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open a Pull Request**

## Contact

For any inquiries or feedback, please contact us at [vipinchaudhary31122002@gmail.com](mailto:vipinchaudhary31122002@gmail.com).
