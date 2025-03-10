import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {/* 英雄区域 */}
        <div className="hero bg-base-200 rounded-box mb-8">
          <div className="hero-content text-center py-10">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">欢迎光临</h1>
              <p className="py-6">
                这是一个使用DaisyUI组件库构建的简单演示页面，展示了多种常用组件。
              </p>
              <button className="btn btn-primary">开始使用</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
