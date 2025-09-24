"use client";

import React, { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

const PurchaseFormComponent = () => {
  const searchParams = useSearchParams();
  const formatFromQuery = searchParams.get("formato");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    country: "España",
    phone: "",
    format: formatFromQuery || "fisico",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (formatFromQuery) {
      setFormData((prev) => ({ ...prev, format: formatFromQuery }));
    }
  }, [formatFromQuery]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
      } else {
        // Aquí podrías manejar errores que vengan del backend
        alert(
          "Hubo un error al procesar tu pedido. Por favor, inténtalo de nuevo."
        );
      }
    } catch (error) {
      // Manejo de errores de red o si el servidor no responde
      console.error("Error al enviar el formulario:", error);
      alert(
        "No se pudo conectar con el servidor. Revisa tu conexión a internet."
      );
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold text-black mb-4">
          ¡Gracias por tu compra!
        </h2>
        <p className="text-gray-700">
          Hemos recibido tus datos correctamente. En un mundo real, ahora serías
          redirigido a una pasarela de pago segura para completar la
          transacción.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Formato del libro
        </label>
        <select
          name="format"
          value={formData.format}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
        >
          <option value="fisico">Libro Físico - 24,99€</option>
          <option value="ebook">eBook (Digital) - 9,99€</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre completo <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Correo electrónico <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          Teléfono <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          required
          className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
          onChange={handleChange}
        />
      </div>

      {formData.format === "fisico" && (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
            Dirección de Envío
          </h3>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Dirección <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="address"
              id="address"
              required={formData.format === "fisico"}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                Ciudad <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="city"
                id="city"
                required={formData.format === "fisico"}
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="zip"
                className="block text-sm font-medium text-gray-700"
              >
                Código Postal <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="zip"
                id="zip"
                required={formData.format === "fisico"}
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                País <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="country"
                id="country"
                value={formData.country}
                required={formData.format === "fisico"}
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      )}

      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-red-600 text-white font-bold py-4 px-10 rounded-lg text-xl hover:bg-red-700 transition-colors"
      >
        Proceder al Pago
      </motion.button>
    </form>
  );
};

const PurchaseForm = () => (
  <Suspense fallback={<div>Cargando formulario...</div>}>
    <PurchaseFormComponent />
  </Suspense>
);

export default PurchaseForm;
