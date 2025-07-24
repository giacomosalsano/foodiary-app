# Foodiary App - Complete Documentation

## 📋 Overview

**Foodiary App** is a cross-platform mobile application built with React Native (Expo) that allows users to register and manage their meals through photo or audio uploads. The app leverages **real Artificial Intelligence** (OpenAI) for asynchronous food processing and automatic calculation of nutritional information. The frontend is designed for a seamless user experience, integrating with a serverless backend API.

---

## 🏗️ System Architecture

### Tech Stack
- **Framework:** React Native (Expo)
- **Navigation:** Expo Router
- **State Management:** React Context + React Query
- **Forms & Validation:** React Hook Form + Zod
- **HTTP Client:** Axios
- **Styling:** Tailwind CSS (NativeWind)
- **Storage:** AsyncStorage (for auth tokens)
- **Media:** Expo Camera, Expo Audio, Expo File System
- **Icons:** Lucide React Native
- **AI Integration:** OpenAI (via backend API)

### Data Flow
```
1. User uploads photo/audio → 2. File sent to backend (S3) → 3. Backend triggers AI processing → 4. Nutritional info returned → 5. UI updates meal list/statistics
```

---

## 🗂️ Project Structure

```
foodiary-app/
  ├─ src/
  │   ├─ app/           # Routing and screens (public/private)
  │   ├─ components/    # Reusable UI components
  │   ├─ contexts/      # Global React Contexts (Auth)
  │   ├─ hooks/         # Custom React hooks
  │   ├─ services/      # API clients
  │   ├─ utils/         # Utility functions
  │   ├─ styles/        # Colors and global styles
  │   └─ assets/        # Images and static assets
  ├─ package.json       # Dependencies and scripts
  └─ documentation.md   # This documentation
```

---

## 🔐 Authentication & Security

### Auth Flow
- **Sign Up:** Multi-step onboarding with validation (goal, gender, birth date, height, weight, activity level, account info)
- **Sign In:** Email and password authentication
- **Session Persistence:** JWT token stored in AsyncStorage
- **Protected Routes:** Private screens only accessible when authenticated
- **Sign Out:** Clears token and user data

### AuthContext (`src/contexts/AuthContext.tsx`)
- Provides `user`, `isLoggedIn`, `isLoading`, `signIn`, `signUp`, `signOut`
- Handles token storage and API header management
- Fetches user profile on login

### useAuth Hook (`src/hooks/useAuth.ts`)
- Simple hook to consume AuthContext in any component

---

## 🧑‍💻 Main Features & Flows

### 1. Onboarding & Sign Up
- Multi-step form (Goal, Gender, Birth Date, Height, Weight, Activity Level, Account)
- Each step is a separate component for modularity
- Validation with Zod (see `SignUpSteps/signUpSchema.ts`)
- On submit, calls backend `/signup` and stores JWT

### 2. Sign In
- Simple form with email and password
- Validation with Zod
- On submit, calls backend `/signin` and stores JWT

### 3. Dashboard (Private Home)
- **Header:** Greets user, shows name, and logout button
- **Meals List:** Lists meals for the selected date
- **Date Switcher:** Navigate between days
- **Daily Stats:** Shows progress for calories, proteins, carbs, fats (with arcs)
- **Create Meal Bottom Bar:** Buttons to add meal via audio or photo

### 4. Create Meal (Audio/Photo)
- **AudioModal:** Record audio, upload to backend, triggers AI processing
- **CameraModal:** Take photo, upload to backend, triggers AI processing
- **useCreateMeal Hook:** Handles upload logic and navigation to meal details

### 5. Meal Details
- Shows all info for a meal (name, icon, foods, nutritional breakdown)
- Auto-refreshes until processing is complete

---

## 🧩 Components

- **AuthLayout:** Layout for sign in/up screens
- **Button:** Customizable button with loading state
- **Input:** Text input with optional mask, label, error, append
- **OptionsSelector:** Used for selecting options in onboarding
- **DateSwitcher:** Navigate between days
- **DailyStats:** Shows nutritional progress with SVG arcs
- **MealCard:** Summary card for each meal
- **MealsList:** Lists all meals for a day
- **CreateMealBottomBar:** Floating bar to add meals
- **AudioModal:** Modal for recording/uploading audio
- **CameraModal:** Modal for taking/uploading photos
- **Logo:** SVG logo component

---

## 🧮 Nutritional Goals Calculation

- Calculated on backend during sign up
- Based on:
  - **BMR (Basal Metabolic Rate):**
    - Men: `88.36 + 13.4 × weight + 4.8 × height - 5.7 × age`
    - Women: `447.6 + 9.2 × weight + 3.1 × height - 4.3 × age`
  - **TDEE (Total Daily Energy Expenditure):** `BMR × Activity Multiplier`
  - **Goal:**
    - Maintain: TDEE
    - Gain: TDEE + 500 cal
    - Lose: TDEE - 500 cal
  - **Macros:**
    - Proteins: `weight × 2g`
    - Fats: `weight × 0.9g`
    - Carbs: `(calories - proteins×4 - fats×9) ÷ 4`

---

## 📦 Dependencies

### Production
- `react`, `react-native`, `expo`, `expo-router`, `@tanstack/react-query`, `axios`, `zod`, `react-hook-form`, `nativewind`, `@expo-google-fonts/host-grotesk`, `expo-camera`, `expo-audio`, `expo-file-system`, `@react-native-async-storage/async-storage`, `lucide-react-native`, `tailwindcss`, `tailwind-merge`, `clsx`

### Development
- `typescript`, `@types/react`, `@babel/core`

---

## 🎨 Design & Styling

- **Colors:** Defined in `src/styles/colors.ts` (lime, gray, black, support colors)
- **Global Styles:** Tailwind CSS via NativeWind (`src/styles/global.css`)
- **Fonts:** Host Grotesk (Google Fonts)
- **SVG Logo:** Custom SVG in `Logo.tsx`

---

## 🛠️ Utilities

- **formatDate:** Formats dates for display (e.g., "TODAY, SUNDAY, 12 MAY")
- **formatMealDate:** Formats meal times (e.g., "Today, 12h30")
- **cn:** Utility for merging Tailwind/clsx classes

---

## 🌟 Strengths

1. **Real AI Integration:** OpenAI for food processing (via backend)
2. **Well-structured Architecture:** Clear separation of concerns
3. **Security:** JWT, Zod validation, AsyncStorage
4. **Scalability:** Modular, easy to extend
5. **Type Safety:** TypeScript throughout
6. **Consistent Patterns:** Uniform structure for screens/components
7. **Multimodal:** Supports both audio and image meal input
8. **Scientific Nutritional Calculations:** Based on real formulas
9. **Modern UX:** Clean, mobile-first design

---

## 🔧 Suggested Improvements

### High Priority
1. **Add unit/integration tests** for hooks, context, and components
2. **Implement structured logging** for error tracking
3. **Improve input validation** (e.g., password strength)
4. **Add monitoring/analytics** (e.g., Sentry, Amplitude)

### Medium Priority
1. **Add pagination** to meal lists
2. **Implement rate limiting** for API calls
3. **Add refresh tokens** for auth
4. **Automate CI/CD**

### Low Priority
1. **Add OpenAPI/Swagger documentation** for backend
2. **Implement API versioning**
3. **Add business metrics** (e.g., meal frequency)
4. **Optimize queries with indexes (backend)**

---

## 🎯 Conclusion

The **Foodiary App** is a robust, production-ready mobile application for food tracking, leveraging real AI for food recognition and nutritional analysis. The codebase is clean, modular, and follows best practices for React Native development. The current focus should be on automated testing and monitoring to ensure stability and scalability in production.
