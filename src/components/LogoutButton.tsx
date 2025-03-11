"use client";

import { signOutAction } from "@/app/(auth-pages)/actions";

export default function LogoutButton() {
  return (
    <button onClick={() => signOutAction()} className="w-full text-left">
      退出登录
    </button>
  );
}
