import React from "react";
import { useNavigate } from "react-router-dom";
import CarouselPage from "../components/CarouselPage";

function Homepage() {
  const navigate = useNavigate();
  return (
    <div>
      <CarouselPage />
    </div>
  );
}

export default Homepage;
