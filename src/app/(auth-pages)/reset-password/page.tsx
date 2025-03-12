import { Metadata } from "next";
import { resetPasswordAction } from "../actions";
import SubmitButton from "./SubmitButton";
import Navbar from "@/components/Navbar";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "重置密码",
  description: "重置您的账号密码",
};

type SearchParams = {
  token?: string;
  success?: string;
  error?: string;
};

export default async function ResetPasswordPage(props: {
  searchParams: SearchParams;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // 如果用户未登录，重定向到首页
  if (!user) {
    redirect("/");
  }

  const searchParams = await props.searchParams;
  const { token, success, error } = searchParams;

  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-base-200">
        <div className="card w-full max-w-md bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold text-center mb-6">
              重置密码
            </h2>
            <form className="space-y-4" action={resetPasswordAction}>
              <input type="hidden" name="token" value={token} />
              <div className="form-control">
                <h3 className="text-base mb-2">新密码</h3>
                <input
                  type="password"
                  name="password"
                  placeholder="请输入新密码"
                  className="input input-bordered w-full"
                  required
                  minLength={8}
                />
              </div>
              <div className="form-control">
                <h3 className="text-base mb-2">确认密码</h3>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="请再次输入新密码"
                  className="input input-bordered w-full"
                  required
                  minLength={8}
                />
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
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
