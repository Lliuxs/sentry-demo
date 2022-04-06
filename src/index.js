import React from 'react';
import { createRoot } from 'react-dom/client';

import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import * as SentryBrowser from '@sentry/browser';
import SentryRRWeb from '@sentry/rrweb';

import App from './App';
import reportWebVitals from './reportWebVitals';

Sentry.init({
  // dns告诉 sentry Sdk将事件发送到哪里
  dsn: 'http://3543df42df8f42a291a7c4cf7dd15fe1@localhost:9000/3',
  // 例如development、testing、staging或production。
  // environment: "production",
  // sdk的tracking就是用来将浏览器的页面加载/导航操作检测为事务 捕获请求 指标和错误作为跨度
  // 性能指标 Performance面板
  integrations: [
    new Integrations.BrowserTracing({
      // export declare function reactRouterV4Instrumentation(history: RouterHistory, routes?: RouteConfig[], matchPath?: MatchPath): ReactRouterInstrumentation;
      // export declare function reactRouterV5Instrumentation(history: RouterHistory, routes?: RouteConfig[], matchPath?: MatchPath): ReactRouterInstrumentation;
      // export declare function withSentryRouting<P extends Record<string, any>, R extends React.ComponentType<P>>(Route: R): R;
      // routingInstrumentation: Sentry.reactRouterV5Instrumentation(history),
    }),
    new SentryRRWeb({
      checkoutEveryNms: 10 * 1000, // 每10秒重新制作快照
      checkoutEveryNth: 200, // 每 200 个 event 重新制作快照
      maskAllInputs: false, // 将所有输入内容记录为 *
    }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
  release: '1.0.0',
});

const user = {
  email: 'user@shopee.com',
};
// 面包屑可以自动生成 sdk自动记录多种类型的
// 手动记录面包屑
SentryBrowser.addBreadcrumb({
  // type, category, message, level, timestamp（许多 SDK 会自动为您设置）和data，
  category: 'auth',
  // message: `Authenticated user ${user.email}`,
  message: 'Authenticated user',
  data: {
    user,
  },
  level: Sentry.Severity.Info,
});

SentryBrowser.addBreadcrumb({
  type: 'default',
  category: 'started',
  data: undefined,
  level: Sentry.Severity.Info,
  message: 'this is a message',
  timestamp: 1596814007.035,
});

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
