import { Metadata } from "next";

export const metadata: Metadata = {
  title: "注册 - 创建新账号",
  description: "注册新用户账号",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold text-center mb-6">
            创建新账号
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
                placeholder="请设置密码（至少6位字母或数字）"
                className="input input-bordered w-full"
                required
                minLength={6}
                pattern="[A-Za-z0-9]+"
              />
              <p className="text-sm text-neutral-500 mt-1">
                密码必须包含至少6位字母或数字
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary w-full">注册</button>
            </div>
            <div className="text-center">
              <a href="/login" className="link link-hover text-sm">
                已有账号？点击登录
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
