"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn btn-primary w-full" disabled={pending}>
      {pending ? (
        <span className="loading loading-spinner loading-sm"></span>
      ) : (
        "重置密码"
      )}
    </button>
  );
}
