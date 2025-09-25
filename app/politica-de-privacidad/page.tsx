import React from "react";
import Header from "@/components/shared/header";
import Footer from "@/components/landing/footer";

const PoliticaPrivacidadPage = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-20 pt-32 text-gray-800">
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-lg shadow-md">
          <h1 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Política de Privacidad
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Última actualización: 24 de septiembre de 2025
          </p>

          <h2 className="text-2xl font-bold text-black mt-8 mb-4">
            1. Responsable del Tratamiento
          </h2>
          <p className="mb-4">
            <strong>Titular:</strong> Rafael Botella
            <br />
            <strong>Correo electrónico de contacto:</strong> [Tu Email de
            Contacto]
            <br />
            <strong>Actividad:</strong> Venta de libro
          </p>

          <h2 className="text-2xl font-bold text-black mt-8 mb-4">
            2. ¿Qué datos personales recogemos y por qué?
          </h2>
          <p className="mb-4">
            Recogemos los datos personales que nos proporcionas a través del
            formulario de compra para poder gestionar tu pedido. Los datos
            solicitados son:
          </p>
          <ul className="list-disc list-inside mb-4 pl-4">
            <li>Nombre y apellidos</li>
            <li>Dirección de correo electrónico</li>
            <li>Número de teléfono</li>
            <li>
              Dirección de envío (ciudad, código postal, país) en caso de
              adquirir el libro físico.
            </li>
          </ul>
          <p className="mb-4">
            La finalidad de la recogida de estos datos es exclusivamente para:
          </p>
          <ul className="list-disc list-inside mb-4 pl-4">
            <li>Procesar y gestionar el envío de tu pedido.</li>
            <li>
              Comunicarnos contigo sobre cualquier asunto relacionado con tu
              compra.
            </li>
            <li>Cumplir con nuestras obligaciones fiscales y legales.</li>
          </ul>
          <p className="mb-4">
            No utilizaremos tus datos para enviarte comunicaciones comerciales
            no solicitadas, a menos que obtengamos tu consentimiento expreso
            para ello.
          </p>

          <h2 className="text-2xl font-bold text-black mt-8 mb-4">
            3. Legitimación para el tratamiento de tus datos
          </h2>
          <p className="mb-4">
            La base legal para el tratamiento de tus datos es la ejecución de un
            contrato de compraventa (art. 6.1.b del RGPD) que suscribes al
            realizar un pedido en nuestro Sitio Web.
          </p>

          <h2 className="text-2xl font-bold text-black mt-8 mb-4">
            4. ¿Con quién compartimos tus datos?
          </h2>
          <p className="mb-4">
            Tus datos no serán cedidos a terceros, salvo obligación legal. Para
            la gestión del envío del libro físico, tus datos de contacto y
            dirección serán compartidos con la empresa de mensajería
            correspondiente.
          </p>

          <h2 className="text-2xl font-bold text-black mt-8 mb-4">
            5. Tus Derechos de Protección de Datos
          </h2>
          <p className="mb-4">
            Como usuario, tienes derecho a acceder, rectificar, suprimir y
            oponerte al tratamiento de tus datos, así como otros derechos, como
            se explica en la información adicional. Puedes ejercer estos
            derechos enviando un correo electrónico a{" "}
            <strong>[Tu Email de Contacto]</strong>, adjuntando una copia de tu
            DNI para verificar tu identidad.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaPrivacidadPage;
