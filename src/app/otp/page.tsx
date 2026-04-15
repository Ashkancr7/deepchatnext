import { Suspense } from "react";
import OTP from "./OtpClient";

export default function OtpPage() {
  return (
    <Suspense fallback={<div className="text-white text-center mt-20">در حال بارگذاری...</div>}>
      <OTP />
    </Suspense>
  );
}
