// /app/meeting/result/page.tsx
"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { PiCheckCircleBold, PiXCircleBold } from "react-icons/pi";

function ResultContent() {
  const params = useSearchParams();
  const router = useRouter();
  const isSuccess = params.get("status") === "success";

  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground px-6">
      <div
        className="
          w-full max-w-md rounded-2xl border
          border-border/80 dark:border-[rgba(255,255,255,0.12)]
          bg-card/90 backdrop-blur-xl text-card-foreground
          shadow-[0_18px_45px_rgba(15,23,42,0.35)]
          p-8 md:p-10 transition-colors
        "
      >
        {isSuccess ? (
          <PiCheckCircleBold className="mx-auto mb-6 text-7xl text-green-500" />
        ) : (
          <PiXCircleBold className="mx-auto mb-6 text-7xl text-red-500" />
        )}
        <h1 className="mb-3 text-center text-2xl font-semibold">
          {isSuccess ? "Lead information saved successfully!" : "Submission failed"}
        </h1>
        <p className="mb-8 text-center text-muted-foreground text-sm">
          {isSuccess
            ? "Thanks for reaching out. We’ll review your details and contact you shortly to schedule your meeting."
            : "An unexpected error occurred while saving your details. Please go back and try again."}
        </p>
        <button
          onClick={() => router.push("/")}
          className="
            mx-auto block w-full rounded-xl border border-border bg-primary
            text-primary-foreground hover:opacity-90 px-6 py-2.5 text-sm font-medium
            transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ring
          "
        >
          Go back home
        </button>
      </div>
    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
          <div className="animate-pulse rounded-2xl border border-border bg-card/80 p-10 text-sm">
            Loading…
          </div>
        </div>
      }
    >
      <ResultContent />
    </Suspense>
  );
}
