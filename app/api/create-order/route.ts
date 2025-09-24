import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Validación básica de los datos recibidos
    const { name, email, format } = body;
    if (!name || !email || !format) {
      return NextResponse.json(
        { success: false, error: "Faltan datos obligatorios." },
        { status: 400 }
      );
    }

    // 2. Simulación de guardado en Base de Datos
    // En un proyecto real, aquí guardarías los datos del pedido en tu base de datos (PostgreSQL, MongoDB, etc.)
    // para tener un registro de tus clientes y ventas.
    console.log(
      '✅ Pedido recibido y "guardado" en la base de datos (simulado):',
      body
    );

    // 3. Preparación para la Pasarela de Pago (el paso que dejaremos listo)
    // Aquí es donde se crearía una sesión de pago con Stripe o PayPal.
    // El código se comunicaría con sus APIs, les enviaría el precio y el producto,
    // y ellos devolverían una URL de pago única para este cliente.
    console.log("下一步: Crear sesión de pago con Stripe/PayPal (simulado).");

    // Devolvemos una respuesta exitosa al frontend.
    return NextResponse.json({
      success: true,
      message: "Pedido recibido correctamente.",
    });
  } catch (error) {
    console.error("Error en el servidor al crear el pedido:", error);
    return NextResponse.json(
      { success: false, error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
