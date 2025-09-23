import React from "react";
import PurchaseForm from "@/components/landing/purchase-form";

const PurchasePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black tracking-tight sm:text-5xl">
            Finaliza tu compra
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Estás a un solo paso de empezar tu "Evolución".
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <PurchaseForm />
        </div>

        <div className="mt-8 text-center">
          <a
            href="/"
            className="text-sm text-gray-600 hover:text-red-600 transition-colors"
          >
            &larr; Volver a la página principal
          </a>
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;
