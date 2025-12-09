// /app/meeting/firestore.tsx
"use client";

import React, { useState, useMemo } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { db } from "@/lib/firebaseClient";

// Simple helpers
const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const isValidIndianPhone = (phone: string) =>
  /^[6-9]\d{9}$/.test(phone); // 10 digits, starts with 6–9

const LeadCaptureForm = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(""); // only the 10 digits
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Computed form validity: all inputs must be valid
  const isFormValid = useMemo(() => {
    return (
      name.trim().length > 0 &&
      isValidEmail(email) &&
      isValidIndianPhone(phoneNumber)
    );
  }, [name, email, phoneNumber]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Guard: don’t even start submit if invalid
    if (!isFormValid) {
      alert("Please fill all fields correctly before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "leads"), {
        name: name.trim(),
        phone_number: `+91${phoneNumber}`, // store with +91
        email: email.trim(),
        created_at: serverTimestamp(),
        status: "new",
        source: "meeting-page",
      });

      router.push("/contact-netrx-digital/result?status=success");
    } catch (error) {
      console.error("Error adding document: ", error);
      router.push("/contact-netrx-digital/result?status=error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <div className="relative rounded-2xl border border-border/60 bg-gradient-to-b from-background/80 to-background/40 shadow-[0_18px_45px_rgba(15,23,42,0.25)] overflow-hidden">
        {/* Glow accent */}
        <div className="pointer-events-none absolute -top-32 -right-16 h-64 w-64 rounded-full blur-3xl opacity-40 bg-gradient-to-br from-blue-500/60 via-sky-400/40 to-indigo-500/40" />

        <div className="relative p-6 md:p-8">
          <div className="mb-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
              Book a strategy call
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-foreground">
              Schedule a Meeting
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Share your details and we&apos;ll reach out with a personalized growth plan
              for your brand.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-medium uppercase tracking-wide text-muted-foreground mb-1.5"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="
                  block w-full rounded-xl border border-border/70 bg-background/70
                  px-3.5 py-2.5 text-sm text-foreground
                  focus:outline-none focus:ring-2 focus:ring-blue-500/70 focus:border-blue-500/80
                  placeholder:text-muted-foreground/60
                "
                placeholder="e.g., Rahul Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium uppercase tracking-wide text-muted-foreground mb-1.5"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="
                  block w-full rounded-xl border border-border/70 bg-background/70
                  px-3.5 py-2.5 text-sm text-foreground
                  focus:outline-none focus:ring-2 focus:ring-blue-500/70 focus:border-blue-500/80
                  placeholder:text-muted-foreground/60
                "
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {email && !isValidEmail(email) && (
                <p className="text-red-500 text-xs mt-1">
                  Please enter a valid email address.
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-xs font-medium uppercase tracking-wide text-muted-foreground mb-1.5"
              >
                Phone Number (India)
              </label>

              <div className="flex items-center gap-2">
                <span className="text-sm px-3 py-2.5 rounded-xl border border-border/70 bg-background/70">
                  +91
                </span>

                <input
                  type="tel"
                  id="phoneNumber"
                  className="
                    block w-full rounded-xl border border-border/70 bg-background/70
                    px-3.5 py-2.5 text-sm text-foreground
                    focus:outline-none focus:ring-2 focus:ring-blue-500/70 focus:border-blue-500/80
                    placeholder:text-muted-foreground/60
                  "
                  placeholder="10-digit mobile number"
                  value={phoneNumber}
                  maxLength={10} // prevents more than 10 digits
                  onChange={(e) => {
                    const cleaned = e.target.value.replace(/\D/g, "");
                    if (cleaned.length <= 10) {
                      setPhoneNumber(cleaned);
                    }
                  }}
                  required
                />
              </div>

              {phoneNumber && !isValidIndianPhone(phoneNumber) && (
                <p className="text-red-500 text-xs mt-1">
                  Enter a valid mobile number (10 digits).
                </p>
              )}
            </div>

            {/* Small reassurance text */}
            <p className="text-[11px] text-muted-foreground/80">
              We&apos;ll only use this information to contact you about your enquiry. No spam.
            </p>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting || !isFormValid}
              className={`
                mt-2 inline-flex w-full items-center justify-center rounded-xl
                px-4 py-2.5 text-sm font-medium text-white
                bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500
                shadow-[0_12px_32px_rgba(37,99,235,0.45)]
                transition
                ${isSubmitting || !isFormValid
                  ? "opacity-60 cursor-not-allowed"
                  : "hover:scale-[1.01] hover:shadow-[0_18px_40px_rgba(37,99,235,0.55)]"
                }
              `}
            >
              {isSubmitting ? "Saving your details…" : "Book My Free Meeting"}
            </button>
          </form>

          {/* Trust text */}
          <div className="mt-5 border-t border-border/60 pt-4 text-[11px] text-muted-foreground flex items-center justify-between gap-2">
            <span>Avg. response time &lt; 24 hours</span>
            <span className="inline-flex h-6 items-center rounded-full border border-green-500/40 bg-green-500/10 px-2 text-[10px] font-medium text-green-500">
              ✓ No obligation call
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadCaptureForm;
