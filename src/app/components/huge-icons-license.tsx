"use client";

import { hugeiconsLicense } from "@hugeicons/react-pro";

hugeiconsLicense(process.env.NEXT_PUBLIC_HUGEICONS_LICENSE || "");

export default function LicenseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
