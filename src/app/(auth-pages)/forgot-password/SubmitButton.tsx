"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn btn-primary w-full" disabled={pending}>
      {pending ? (
        <>
          <span className="loading loading-spinner"></span>
          发送重置链接...
        </>
      ) : (
        "发送重置链接"
      )}
    </button>
  );
}
