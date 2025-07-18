import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { HoverButton } from "@/components/ui/hover-button"

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <HoverButton variant="primary">
          <Link to="/">Return to Home</Link>
        </HoverButton>
      </div>
    </div>
  );
};

export default NotFound;
