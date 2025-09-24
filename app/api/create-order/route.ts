import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { z } from "zod";

const prisma = new PrismaClient();

// Esquema de validación con Zod
const orderSchema = z.object({
  name: z.string().min(3, "El nombre es obligatorio."),
  email: z.string().email("El correo electrónico no es válido."),
  phone: z.string().min(9, "El teléfono es obligatorio."),
  format: z.enum(["fisico", "ebook"]),
  address: z.string().optional(),
  city: z.string().optional(),
  zip: z.string().optional(),
  country: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Validar los datos con Zod
    const validation = orderSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Datos del formulario no válidos.",
          details: validation.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, phone, format, address, city, zip, country } =
      validation.data;

    // 2. Calcular el precio total basado en el formato
    const formatPrices: { [key: string]: number } = {
      fisico: 24.99,
      ebook: 9.99,
    };
    const total = new Decimal(formatPrices[format] || 0);

    // 3. Crear el pedido en la base de datos
    const order = await prisma.order.create({
      data: {
        name,
        email,
        phone,
        format,
        address,
        city,
        zip,
        country,
        total,
      },
    });

    console.log("✅ Pedido creado en la base de datos:", order);

    // 4. Devolver una respuesta exitosa
    return NextResponse.json({
      success: true,
      message: "Pedido recibido correctamente.",
      orderId: order.id,
    });
  } catch (error) {
    console.error("Error en el servidor al crear el pedido:", error);
    return NextResponse.json(
      { success: false, error: "Error interno del servidor." },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
