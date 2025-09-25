import React from "react";
import Header from "@/components/shared/header";
import Footer from "@/components/landing/footer";

const TerminosCondicionesPage = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-20 pt-32 text-gray-800">
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-lg shadow-md">
          <h1 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Términos y Condiciones de Uso
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Última actualización: 24 de septiembre de 2025
          </p>

          <h2 className="text-2xl font-bold text-black mt-8 mb-4">
            1. Objeto y Aceptación
          </h2>
          <p className="mb-4">
            Los presentes Términos y Condiciones regulan el uso del sitio web{" "}
            <strong>[Dominio de la web]</strong> (en adelante, "el Sitio Web"),
            titularidad de Rafael Botella (en adelante, "el Titular"). La
            utilización del Sitio Web atribuye la condición de usuario y supone
            la aceptación plena y sin reservas de todas y cada una de las
            disposiciones incluidas en este documento.
          </p>

          <h2 className="text-2xl font-bold text-black mt-8 mb-4">
            2. Proceso de Compra
          </h2>
          <p className="mb-4">
            A través de este Sitio Web, los usuarios pueden adquirir el libro
            "Evolución" en formato físico o digital (eBook). Para realizar un
            pedido, el usuario deberá seguir el procedimiento de compra online,
            rellenar la información solicitada y realizar el pago. Una vez
            completado el proceso, recibirá un correo electrónico de
            confirmación.
          </p>
          <p className="mb-4">
            Los precios de los productos son los indicados en el Sitio Web en el
            momento de la compra e incluyen los impuestos aplicables.
          </p>

          <h2 className="text-2xl font-bold text-black mt-8 mb-4">
            3. Propiedad Intelectual
          </h2>
          <p className="mb-4">
            Todos los contenidos del Sitio Web, incluyendo textos, fotografías,
            gráficos, imágenes, así como el libro "Evolución", son propiedad del
            Titular o de terceros que han autorizado su uso, y están protegidos
            por las leyes de propiedad intelectual. Queda estrictamente
            prohibida su reproducción, distribución o transformación sin el
            consentimiento expreso del Titular.
          </p>

          <h2 className="text-2xl font-bold text-black mt-8 mb-4">
            4. Política de Devoluciones y Desistimiento
          </h2>
          <p className="mb-4">
            <strong>Libro Físico:</strong> El comprador dispone de un plazo de
            14 días naturales desde la recepción del producto para ejercer su
            derecho de desistimiento, sin necesidad de justificación. El
            producto deberá ser devuelto en perfectas condiciones y los gastos
            de envío de la devolución correrán a cargo del comprador.
          </p>
          <p className="mb-4">
            <strong>eBook (Contenido Digital):</strong> De acuerdo con la
            legislación vigente (art. 103 m) de la Ley General para la Defensa
            de los Consumidores y Usuarios), el derecho de desistimiento no será
            aplicable a los contratos que se refieran al suministro de contenido
            digital que no se preste en un soporte material cuando la ejecución
            haya comenzado con el previo consentimiento expreso del consumidor.
            Al realizar la compra de un eBook, el usuario consiente el inicio de
            la descarga y, por tanto, pierde su derecho de desistimiento.
          </p>

          <h2 className="text-2xl font-bold text-black mt-8 mb-4">
            5. Ley Aplicable y Jurisdicción
          </h2>
          <p className="mb-4">
            Estos Términos y Condiciones se regirán e interpretarán conforme a
            la legislación española. Para cualquier controversia que pudiera
            derivarse del acceso o uso del Sitio Web, ambas partes se someten a
            los juzgados y tribunales de la ciudad de Valencia, renunciando a
            cualquier otro fuero que pudiera corresponderles.
          </p>

          <p className="mt-12 text-sm text-gray-600">
            Para cualquier duda o consulta sobre estos términos, puede contactar
            a través de la dirección de correo electrónico{" "}
            <strong>[Tu Email de Contacto]</strong>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TerminosCondicionesPage;
