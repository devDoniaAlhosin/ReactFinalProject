import React, { useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../utilies/UserAuth";

const ReactProtected = ({ children }) => {
  const navigate = useNavigate();
  const { token } = useContext(UserAuth);
  const userToken = localStorage.getItem("user_token");

  useEffect(() => {
    // Check if token and userToken are both null
    if (token == null && userToken == null) {
      navigate("/"); // Navigate to home page if both tokens are null
    }
  }, [token, userToken, navigate]); // Add navigate to the dependency array to prevent stale closure

  // Render children only if token or userToken is not null
  return token != null || userToken != null ? children : null;
};

export default ReactProtected;
