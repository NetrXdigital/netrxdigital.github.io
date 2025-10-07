"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { PiCheckCircleBold, PiXCircleBold } from "react-icons/pi";

export default function ResultPage() {
  const params = useSearchParams();
  const status = params.get("status"); // success or error
  const router = useRouter();

  const isSuccess = status === "success";

  return (
    <div
      className="
        flex min-h-screen items-center justify-center
        bg-background text-foreground
        px-6
      "
    >
      {/* ✅ Updated Card Section */}
      <div
        className="
          w-full max-w-md
          rounded-xl border
          bg-card text-card-foreground
          border-border/80
          dark:border-[rgba(255,255,255,0.12)]
          shadow-[0_0_12px_rgba(0,0,0,0.08)]
          dark:shadow-[0_0_18px_rgba(255,255,255,0.08)]
          p-8 md:p-10 transition-colors
        "
      >

        {isSuccess ? (
          <PiCheckCircleBold className="mx-auto mb-6 text-7xl text-green-500" />
        ) : (
          <PiXCircleBold className="mx-auto mb-6 text-7xl text-red-500" />
        )}

        <h1 className="mb-3 text-center text-2xl font-semibold">
          {isSuccess
            ? "Lead information saved successfully!"
            : "Submission failed!"}
        </h1>

        <p className="mb-8 text-center text-muted-foreground">
          {isSuccess
            ? "We will contact you shortly."
            : "An unexpected error occurred. Please try again."}
        </p>

        <button
          onClick={() => router.push("/")}
          className="
            mx-auto block w-full rounded-md
            border border-border
            bg-primary text-primary-foreground
            hover:opacity-90
            px-6 py-2 transition
            focus:outline-none focus-visible:ring-2 focus-visible:ring-ring
          "
        >
          Go back home
        </button>
      </div>
    </div>
  );
}
