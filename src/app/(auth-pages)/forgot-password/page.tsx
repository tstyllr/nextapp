import { Metadata } from "next";
import { forgotPasswordAction } from "../actions";
import SubmitButton from "./SubmitButton";
import Navbar from "@/components/Navbar";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "找回密码",
  description: "重置您的账号密码",
};

type SearchParams = {
  success?: string;
  error?: string;
};

export default async function ForgotPasswordPage(props: {
  searchParams: SearchParams;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // 如果用户已登录，重定向到首页
  if (user) {
    redirect("/");
  }

  const { success, error } = props.searchParams;

  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-base-200">
        <div className="card w-full max-w-md bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold text-center mb-6">
              找回密码
            </h2>
            <form className="space-y-4" action={forgotPasswordAction}>
              <div className="form-control">
                <h3 className="text-base mb-2">电子邮箱</h3>
                <input
                  name="email"
                  type="email"
                  placeholder="请输入您的注册邮箱"
                  className="input input-bordered w-full"
                  required
                />
                <p className="text-sm text-neutral-500 mt-1">
                  我们将向您的邮箱发送密码重置链接
                </p>
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
              <div className="text-center space-y-2">
                <a href="/login" className="link link-hover text-sm block">
                  返回登录
                </a>
                <a href="/register" className="link link-hover text-sm block">
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
