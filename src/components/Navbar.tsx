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
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-lg flex items-center justify-center h-full">
                  {user.email?.[0].toUpperCase()}
                </span>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li className="menu-title px-4 py-2">
                <span className="text-sm opacity-70">已登录为</span>
                <span className="font-medium truncate">{user.email}</span>
              </li>
              <div className="divider my-0"></div>
              <li>
                <button>退出登录</button>
              </li>
            </ul>
          </div>
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
