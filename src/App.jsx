import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {SplashScreen,Enquire,Gallery,HomePage,Login,Service,Signin,VendorsPage} from '../src/Compoments'


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Splash screen 3 sec tak dikhayega
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Vendor" element={<VendorsPage />} />
        <Route path="/Enquire" element={<Enquire />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}
export default App;
