import { Metadata } from "next";
import { signInAction } from "../actions";
import SubmitButton from "./SubmitButton";
import Navbar from "@/components/Navbar";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "登录 - 用户登录",
  description: "登录您的账号",
};

type SearchParams = {
  success?: string;
  error?: string;
};

export default async function LoginPage(props: { searchParams: SearchParams }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // 如果用户已登录，重定向到首页
  if (user) {
    redirect("/");
  }

  const searchParams = await props.searchParams;
  const { success, error } = searchParams;

  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-base-200">
        <div className="card w-full max-w-md bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold text-center mb-6">
              账号登录
            </h2>
            <form className="space-y-4" action={signInAction}>
              <div className="form-control">
                <h3 className="text-base mb-2">电子邮箱</h3>
                <input
                  type="email"
                  name="email"
                  placeholder="请输入您的邮箱"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
                <h3 className="text-base mb-2">密码</h3>
                <input
                  type="password"
                  name="password"
                  placeholder="请输入密码"
                  className="input input-bordered w-full"
                  required
                />
                <div className="flex justify-end">
                  <a
                    href="/forgot-password"
                    className="text-sm link link-hover mt-1"
                  >
                    忘记密码？
                  </a>
                </div>
              </div>
              {success && (
                <div className="alert alert-success mb-4">
                  <span>{success}</span>
                </div>
              )}
              {error && (
                <div className="alert alert-error mb-4">
                  <span>{error}</span>
                </div>
              )}
              <div className="form-control mt-6">
                <SubmitButton />
              </div>
              <div className="text-center">
                <a href="/register" className="link link-hover text-sm">
                  没有账号？立即注册
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
