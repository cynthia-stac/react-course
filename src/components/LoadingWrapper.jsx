import { Suspense } from "react";

export default function LoadingWrapper({ children, fallback }) {
  return (
    <Suspense fallback={fallback || <div className="text-2xl">Loading... ⏳</div>}>
      {children}
    </Suspense>
  );
}