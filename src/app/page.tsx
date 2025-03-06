
export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* 英雄区域 */}
      <div className="hero bg-base-200 rounded-box mb-8">
        <div className="hero-content text-center py-10">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">欢迎光临</h1>
            <p className="py-6">这是一个使用DaisyUI组件库构建的简单演示页面，展示了多种常用组件。</p>
            <button className="btn btn-primary">开始使用</button>
          </div>
        </div>
      </div>

      {/* 卡片区域 */}
      <h2 className="text-3xl font-bold mb-4">特色服务</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card bg-base-100 shadow-xl">
          <figure><div className="w-full h-48 bg-primary/20 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-primary">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
            </svg>
          </div></figure>
          <div className="card-body">
            <h2 className="card-title">网站开发</h2>
            <p>我们提供专业的网站开发服务，帮助您打造完美的在线形象。</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary btn-sm">了解更多</button>
            </div>
          </div>
        </div>
        
        <div className="card bg-base-100 shadow-xl">
          <figure><div className="w-full h-48 bg-secondary/20 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-secondary">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
          </div></figure>
          <div className="card-body">
            <h2 className="card-title">移动应用</h2>
            <p>专业的移动应用开发团队，为您创造出色的用户体验。</p>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary btn-sm">了解更多</button>
            </div>
          </div>
        </div>
        
        <div className="card bg-base-100 shadow-xl">
          <figure><div className="w-full h-48 bg-accent/20 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-accent">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
            </svg>
          </div></figure>
          <div className="card-body">
            <h2 className="card-title">数据分析</h2>
            <p>利用先进的数据分析技术，帮助您做出更明智的业务决策。</p>
            <div className="card-actions justify-end">
              <button className="btn btn-accent btn-sm">了解更多</button>
            </div>
          </div>
        </div>
      </div>

      {/* 统计数据 */}
      <div className="stats shadow w-full mb-8">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>
          </div>
          <div className="stat-title">客户总数</div>
          <div className="stat-value text-primary">25,600+</div>
          <div className="stat-desc">↗︎ 增长率 14% (30天)</div>
        </div>
        
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <div className="stat-title">收入</div>
          <div className="stat-value text-secondary">¥2,500万</div>
          <div className="stat-desc">↗︎ 增长率 21% (30天)</div>
        </div>
        
        <div className="stat">
          <div className="stat-figure text-accent">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
            </svg>
          </div>
          <div className="stat-title">项目完成率</div>
          <div className="stat-value text-accent">98%</div>
          <div className="stat-desc">↗︎ 提升 7% (30天)</div>
        </div>
      </div>

      {/* 步骤展示 */}
      <h2 className="text-3xl font-bold mb-4">我们的工作流程</h2>
      <ul className="steps steps-vertical lg:steps-horizontal w-full mb-8">
        <li className="step step-primary">需求分析</li>
        <li className="step step-primary">设计方案</li>
        <li className="step step-primary">开发实现</li>
        <li className="step">测试验收</li>
        <li className="step">上线维护</li>
      </ul>

      {/* 联系表单 */}
      <div className="card bg-base-100 shadow-xl mb-8">
        <div className="card-body">
          <h2 className="card-title text-2xl">联系我们</h2>
          <p className="mb-4">填写下面的表单，我们将尽快与您联系。</p>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">您的姓名</span>
            </label>
            <input type="text" placeholder="请输入您的姓名" className="input input-bordered" />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">电子邮箱</span>
            </label>
            <input type="email" placeholder="请输入您的电子邮箱" className="input input-bordered" />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">留言内容</span>
            </label>
            <textarea className="textarea textarea-bordered h-24" placeholder="请输入您的留言内容"></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">提交</button>
          </div>
        </div>
      </div>

      {/* 页脚 */}
      <footer className="footer p-10 bg-base-200 text-base-content rounded-box">
        <nav>
          <h6 className="footer-title">服务</h6> 
          <a className="link link-hover">网站开发</a>
          <a className="link link-hover">移动应用</a>
          <a className="link link-hover">数据分析</a>
          <a className="link link-hover">UI/UX设计</a>
        </nav> 
        <nav>
          <h6 className="footer-title">公司</h6> 
          <a className="link link-hover">关于我们</a>
          <a className="link link-hover">联系方式</a>
          <a className="link link-hover">招聘信息</a>
          <a className="link link-hover">新闻动态</a>
        </nav> 
        <nav>
          <h6 className="footer-title">法律</h6> 
          <a className="link link-hover">使用条款</a>
          <a className="link link-hover">隐私政策</a>
          <a className="link link-hover">Cookie政策</a>
        </nav>
      </footer>
    </main>
  );
}
