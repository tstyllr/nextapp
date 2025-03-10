import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { FC } from "react";

const Navbar: FC = async ({}) => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isLoggedIn = !!user;

  return (
    <div className="navbar bg-base-100 shadow-lg px-4">
      <div className="flex-1">
        <a className="text-xl font-bold">我的应用</a>
      </div>
      <div className="flex-none gap-2">
        {isLoggedIn ? (
          <>
            <div className="text-sm">欢迎，{user.email}</div>
            <button className="btn btn-ghost btn-sm">退出登录</button>
          </>
        ) : (
          <>
            <Link href="/login" className="btn btn-ghost btn-sm">
              登录
            </Link>
            <Link href="/register" className="btn btn-primary btn-sm ml-2">
              注册
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
