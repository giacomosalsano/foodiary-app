# Foodiary App

Mobile app for logging, analyzing, and tracking meals using Artificial Intelligence (OpenAI). Allows photo or audio uploads, automatically processes foods, and calculates personalized nutritional information.

## 🏗️ Tech Stack
- **React Native (Expo)**
- **TypeScript**
- **Expo Router** (navigation)
- **React Query** (data fetching/cache)
- **React Hook Form + Zod** (forms & validation)
- **AsyncStorage** (local storage)
- **Tailwind CSS (NativeWind)**
- **Expo Camera & Audio**
- **Axios** (HTTP client)
- **OpenAI API** (via backend)

<div align="center" style="display: inline_block justify-center"><br>
  <img src="https://skillicons.dev/icons?i=typescript,js,react,tailwind,nodejs,postgres,figma,github&perline=8" alt="icons" />
</div>

## 🚀 Main Features
- Upload meals by **photo** or **audio**
- Automatic processing with **real AI** (OpenAI Whisper + GPT-4 Vision)
- Calorie and macronutrient calculation
- Personalized nutritional goals
- JWT authentication
- Modern, mobile-first UX
- Seamless integration with serverless backend

## ⚡ How to Run Locally
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Expo development server:
   ```bash
   npm start
   ```
4. Configure the backend API URL if needed (see `src/services/httpClient.ts`)
5. Run on your device or emulator (Android/iOS/Web)


## 📚 Learn More
For full details on architecture, flows, components, and improvement suggestions, check the [complete documentation](./documentation.md).

---

made with ♥ by [giacomosalsano](https://giacomosalsano.com)! 
