"use client";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className="btn btn-primary w-full" disabled={pending}>
      {pending ? "注册中..." : "注册"}
    </button>
  );
}

export default SubmitButton;
