import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-error">404</h1>
        <p className="text-2xl text-base-content">Oops! Page Not Found</p>
        <button
          className="btn btn-primary mt-4"
          onClick={() => navigate("/")} // 返回首頁
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Error404;
