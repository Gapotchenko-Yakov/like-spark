import { Route, Routes } from "react-router-dom";
import "./globals.css";

function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route path="/sign-in" element={<SignInForm />} />
        {/* private routes */}
        <Route index element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
