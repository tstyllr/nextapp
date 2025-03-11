"use client";

import { signOutAction } from "@/app/(auth-pages)/actions";
import { useState } from "react";

export default function LogoutButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = async () => {
    setIsLoading(true);
    await signOutAction();
    setIsLoading(false);
  };

  return (
    <button
      onClick={handleSignOut}
      className="w-full text-left btn"
      disabled={isLoading}
    >
      {isLoading ? "正在退出..." : "退出登录"}
    </button>
  );
}
