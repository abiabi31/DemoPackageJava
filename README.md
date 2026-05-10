# Modern React Dashboard App

A modern, responsive dashboard application built with React, Material-UI, and React Router DOM.

## Features

### Authentication

- Full-screen login page with email/password authentication
- Simple validation and error handling
- Automatic redirect to dashboard after successful login
- Persistent login state using localStorage

### Dashboard Layout

- Responsive top navigation bar with user info and logout
- Collapsible sidebar navigation menu
- Dark/Light mode toggle in the navbar
- Mobile-friendly drawer navigation

### Navigation Menu

- **Dashboard**: Overview with statistics cards
- **Palaya Yaripadi**: Task management table (using existing BibleType component)
- **Puthiya Yaripadi**: User management table with MUI DataGrid

### Table Features

- **Palaya Yaripadi**: Interactive table with status toggles and comments
- **Puthiya Yaripadi**: Advanced DataGrid with search, pagination, and status chips
- Responsive design for all screen sizes
- Hover effects and smooth animations

### Technical Features

- React Router DOM for navigation
- Material-UI (MUI) for modern UI components
- MUI DataGrid for advanced table functionality
- Context API for state management (Auth & Theme)
- Smooth page transitions and animations
- Local storage for data persistence

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run start
   ```

4. Open [http://localhost:3001](http://localhost:3001) in your browser

### Login Credentials

- **Username**: admin
- **Password**: password

## Project Structure

```
src/
├── components/          # Reusable UI components
├── context/            # React Context providers
│   ├── AuthContext.jsx     # Authentication state
│   └── ThemeContext.jsx    # Theme state (dark/light mode)
├── layouts/            # Layout components
│   └── DashboardLayout.jsx # Main dashboard layout
├── pages/              # Page components
│   ├── Login.jsx           # Login page
│   ├── Dashboard.jsx       # Dashboard overview
│   ├── PalayaYaripadi.jsx  # Task management page
│   ├── PuthiyaYaripadi.jsx # User management page
│   └── Bibletype/          # Existing BibleType component
├── routes/             # Routing configuration
│   ├── AppRoutes.jsx       # Main routes
│   └── PrivateRoute.jsx    # Protected route wrapper
├── App.jsx             # Main App component
├── main.jsx            # App entry point
└── index.css           # Global styles
```

## Key Technologies

- **React 19**: Modern React with hooks and functional components
- **Material-UI (MUI)**: Comprehensive UI component library
- **MUI DataGrid**: Advanced data table component
- **React Router DOM**: Client-side routing
- **Context API**: State management for auth and theme
- **Framer Motion**: Smooth animations and transitions

## Features in Detail

### Authentication Flow

1. User visits the app and is redirected to login if not authenticated
2. Login form validates credentials (demo: admin / password)
3. Upon successful login, user is redirected to dashboard
4. Authentication state persists across browser sessions

### Theme System

- Toggle between light and dark modes
- Theme preference saved in localStorage
- MUI theme integration for consistent styling

### Data Management

- **Palaya Yaripadi**: Uses the existing BibleType component with localStorage persistence
- **Puthiya Yaripadi**: Uses MUI DataGrid with dummy data and search functionality
- All data persists in localStorage

### Responsive Design

- Mobile-first approach with MUI breakpoints
- Collapsible sidebar on mobile devices
- Responsive tables and data grids

## Development

### Available Scripts

- `npm run start` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

### Adding New Features

1. Create new page components in `src/pages/`
2. Add routes in `src/routes/AppRoutes.jsx`
3. Update sidebar menu in `src/layouts/DashboardLayout.jsx`
4. Use MUI components for consistent UI consistency

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contributing

1. Follow the existing code structure
2. Use MUI components for UI consistency
3. Add proper TypeScript types if extending
4. Test on multiple screen sizes
5. Follow React best practices

## License

This project is for demonstration purposes.
