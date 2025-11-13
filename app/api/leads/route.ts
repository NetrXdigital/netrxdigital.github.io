// /app/api/leads/route.ts
import { NextResponse } from "next/server";
import { db } from "@/lib/firebaseServer";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const { name, phone_number, email } = await request.json();

    // Basic validation
    if (!name || !phone_number || !email) {
      return NextResponse.json(
        { error: "Name, phone number, and email are required" },
        { status: 400 }
      );
    }

    const docRef = await addDoc(collection(db, "leads"), {
      name,
      phone_number,
      email,
      created_at: serverTimestamp(),
      status: "new",
      source: "api-route",
    });

    return NextResponse.json(
      {
        id: docRef.id,
        name,
        phone_number,
        email,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error inserting lead into Firestore:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
