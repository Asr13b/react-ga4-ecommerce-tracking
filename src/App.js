import { BrowserRouter, Routes, Route } from "react-router-dom";
import usePageTracking from "./hooks/usePageTracking";
import SignupButton from "./components/SignupButton";

// Create a small wrapper component to handle the tracking
function TrackingProvider() {
  usePageTracking();
  return null; // This component doesn't render anything, just tracks
}

function App() {
  return (
    <BrowserRouter>
      {/* Now usePageTracking is INSIDE BrowserRouter, so it will work! */}
      <TrackingProvider />

      <Routes>
        <Route path="/" element={<SignupButton />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
