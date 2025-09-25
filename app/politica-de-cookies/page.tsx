import React from "react";
import Header from "@/components/shared/header";
import Footer from "@/components/landing/footer";

const PoliticaCookiesPage = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-20 pt-32 text-gray-800">
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-lg shadow-md">
          <h1 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Política de Cookies
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Última actualización: 24 de septiembre de 2025
          </p>

          <h2 className="text-2xl font-bold text-black mt-8 mb-4">
            ¿Qué son las cookies?
          </h2>
          <p className="mb-4">
            Una cookie es un pequeño fichero de texto que se almacena en su
            navegador cuando visita casi cualquier página web. Su utilidad es
            que la web sea capaz de recordar su visita cuando vuelva a navegar
            por esa página. Las cookies suelen almacenar información de carácter
            técnico, preferencias personales, personalización de contenidos,
            estadísticas de uso, enlaces a redes sociales, acceso a cuentas de
            usuario, etc.
          </p>

          <h2 className="text-2xl font-bold text-black mt-8 mb-4">
            Cookies utilizadas en este sitio web
          </h2>
          <p className="mb-4">
            Siguiendo las directrices de la Agencia Española de Protección de
            Datos, procedemos a detallar el uso de cookies que hace esta web con
            el fin de informarle con la máxima exactitud posible.
          </p>
          <p className="mb-4">Este sitio web utiliza las siguientes cookies:</p>
          <ul className="list-disc list-inside mb-4 pl-4">
            <li>
              <strong>Cookies técnicas o necesarias:</strong> Son aquellas
              esenciales para el funcionamiento del sitio web. Por ejemplo, las
              que permiten mantener la sesión de un usuario, gestionar el tiempo
              de respuesta, rendimiento o validación de opciones, etc. Dado que
              son imprescindibles, estas cookies están activadas por defecto y
              no requieren de su consentimiento.
            </li>
          </ul>
          <p className="mb-4">
            Actualmente, este sitio web no utiliza cookies de análisis,
            publicitarias o de seguimiento que requieran un consentimiento
            adicional.
          </p>

          <h2 className="text-2xl font-bold text-black mt-8 mb-4">
            ¿Cómo desactivar o eliminar cookies?
          </h2>
          <p className="mb-4">
            Usted puede permitir, bloquear o eliminar las cookies instaladas en
            su equipo mediante la configuración de las opciones del navegador
            instalado en su ordenador. A continuación, le proporcionamos enlaces
            a las instrucciones de los navegadores más populares:
          </p>
          <ul className="list-disc list-inside mb-4 pl-4">
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:underline"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:underline"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:underline"
              >
                Microsoft Edge
              </a>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaCookiesPage;
