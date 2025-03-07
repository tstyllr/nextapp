"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("phone");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isSendingCode, setIsSendingCode] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const handleSendVerificationCode = async () => {
    if (!phone || phone.length < 11) {
      alert("请输入有效的手机号码");
      return;
    }

    setIsSendingCode(true);
    // 这里应该有发送验证码的API调用
    // 模拟API调用
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // 开始倒计时
    setCountdown(60);
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsSendingCode(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    setIsSendingCode(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (loginMethod === "email") {
      if (!email || !password) {
        alert("请输入邮箱和密码");
        return;
      }
      
      // 这里应该有邮箱登录的API调用
      console.log("邮箱登录", { email, password });
    } else {
      if (!phone || !verificationCode) {
        alert("请输入手机号和验证码");
        return;
      }
      
      // 这里应该有手机号登录的API调用
      console.log("手机号登录", { phone, verificationCode });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold text-center mb-6">登录</h2>
          
          <div className="tabs tabs-boxed mb-6">
            <a 
              className={`tab ${loginMethod === "phone" ? "tab-active" : ""}`}
              onClick={() => setLoginMethod("phone")}
            >
              手机号登录
            </a>
            <a 
              className={`tab ${loginMethod === "email" ? "tab-active" : ""}`}
              onClick={() => setLoginMethod("email")}
            >
              邮箱登录
            </a>
          </div>
          
          <form onSubmit={handleSubmit}>
            {loginMethod === "email" ? (
              <>
                <div className="form-control">
                  <div className="flex items-center gap-4">
                    <label className="label w-20">
                      <span className="label-text">邮箱</span>
                    </label>
                    <input
                      type="email"
                      placeholder="请输入邮箱"
                      className="input input-bordered flex-1"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-control mt-4">
                  <div className="flex items-center gap-4">
                    <label className="label w-20">
                      <span className="label-text">密码</span>
                    </label>
                    <input
                      type="password"
                      placeholder="请输入密码"
                      className="input input-bordered flex-1"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      忘记密码?
                    </a>
                  </label>
                </div>
              </>
            ) : (
              <>
                <div className="form-control">
                  <div className="flex items-center gap-4">
                    <label className="label w-20">
                      <span className="label-text">手机号</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="请输入手机号"
                      className="input input-bordered flex-1"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-control mt-4">
                  <div className="flex items-center gap-4">
                    <label className="label w-20">
                      <span className="label-text">验证码</span>
                    </label>
                    <div className="flex gap-2 flex-1">
                      <input
                        type="text"
                        placeholder="请输入验证码"
                        className="input input-bordered flex-1"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        required
                      />
                      <button
                        type="button"
                        className="btn btn-outline"
                        onClick={handleSendVerificationCode}
                        disabled={isSendingCode || countdown > 0}
                      >
                        {countdown > 0 ? `${countdown}秒` : "获取验证码"}
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
            
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                登录
              </button>
            </div>
          </form>
          
          <div className="text-center mt-4">
            <p>
              还没有账号?{" "}
              <Link href="/register" className="link link-primary">
                立即注册
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
