# Quran App

## Overview

Quran App is a modern web application designed to provide an interactive and user-friendly way to read, search, and bookmark chapters (Surahs) and verses (Ayahs) of the Holy Quran. The app offers a seamless experience with features like navigation, bookmarking, and chapter-specific information.

---

## Features

### 1. **Read Quran**

- View all chapters (Surahs) and their respective verses (Ayahs).
- Display Quranic text in the original Arabic script with transliteration and translations.

### 2. **Search Functionality**

- Search Surahs by name or content.
- Filter results dynamically as you type.

### 3. **Bookmark Verses**

- Bookmark your favorite Ayahs for quick access.
- Persist bookmarks using `localStorage`.
- Visual indicators for bookmarked verses.

### 4. **Chapter Navigation**

- Easily switch between Surahs.
- Display Bismillah for appropriate chapters.

### 5. **Responsive Design**

- Fully responsive interface for optimal use on desktops, tablets, and mobile devices.

---

## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- A code editor (e.g., VSCode).

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/quran-app.git
   cd quran-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root of your project.
   - Add your API base URL:
     ```env
     VITE_API_BASE_URL=https://api.quran.com/v4
     ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the app in your browser at [http://localhost:3000](http://localhost:3000).

---

## Usage

### Bookmarking Verses

1. Navigate to a Surah.
2. Click the bookmark icon next to a verse to save it.
3. Bookmarked verses will display a filled bookmark icon.

### Searching Surahs

1. Use the search bar to type in the name of a Surah or any keyword.
2. Results will update dynamically.

### Viewing Surahs

1. Click on a Surah from the list to view its verses.
2. Translations and transliterations are displayed below each verse.

---

## Code Structure

### Components

- **TopNav**: Navigation bar.
- **HomeSideBar**: Sidebar for navigation and toggling.
- **InputSearch**: Search bar component.
- **TabList**: Displays lists of Surahs.
- **RightSection**: Displays selected Surah details and verses.

### State Management

- `useState` is used to manage states such as bookmarks, search results, and toggling UI sections.
- `useEffect` is used for fetching data and synchronizing bookmarks with `localStorage`.

### API Integration

- Uses the Quran.com API for fetching Surah and Ayah data.

---

## Technologies Used

- **React**: Frontend framework.
- **Tailwind CSS**: For responsive and modern UI design.
- **React Router**: For navigation.
- **localStorage**: For persistent bookmarks.
- **Vite**: Development server and build tool.

---

## Future Enhancements

1. Add audio playback for Ayahs.
2. Support for multiple translations and languages.
3. Dark mode toggle.
4. User authentication for saving bookmarks to the cloud.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with detailed descriptions of your changes.

---

## Acknowledgments

- Quran.com API for providing data.
- Open-source contributors for their valuable libraries and tools.

---

**Developed with ❤️ and respect for the Holy Quran.**
