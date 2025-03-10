import { Metadata } from "next";

export const metadata: Metadata = {
  title: "登录 - 用户登录",
  description: "登录您的账号",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold text-center mb-6">
            账号登录
          </h2>
          <form className="space-y-4">
            <div className="form-control">
              <h3 className="text-base mb-2">电子邮箱</h3>
              <input
                type="email"
                placeholder="请输入您的邮箱"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <h3 className="text-base mb-2">密码</h3>
              <input
                type="password"
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
            <div className="form-control mt-6">
              <button className="btn btn-primary w-full">登录</button>
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
  );
}
