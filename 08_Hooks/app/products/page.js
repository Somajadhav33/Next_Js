"use client"
import { useRouter } from "next/navigation";
import React from "react";

const ProductPage = () => {
    const router = useRouter()
  const handleBackClick = () => {
    router.back();
  };
  return (
    <button onClick={handleBackClick} className="bg-red-600 p-6">
      Back
    </button>
  );
};

export default ProductPage;
