// src/data/posts.ts
export type Post = {
  id: string;
  title: string;
  date: string;     // ISO or readable string
  tags: string[];
  excerpt: string;  // 卡片上顯示的摘要
  content: string;  // 內文（可用 \n\n 分段）
};

export const posts: Post[] = [
  {
    id: "why-typed-apis",
    title: "為什麼我用 Typed API：從前端 DX 到後端可靠性",
    date: "2025-08-10",
    tags: ["TypeScript", "API", "DX"],
    excerpt:
      "型別不只是補救錯誤，它影響協作速度、邊界設計與可維護性。我在三個專案裡的實戰筆記。",
    content:
      `型別的價值常被誤解為“多寫幾個字”。但在多人協作的產品開發中，
它其實是“溝通介面”的一部分。這篇文章從三個面向談我如何逐步把後端契約前移，
用 Typed API 提升開發效率與可靠性。

一、溝通成本：規格先行
我習慣在需求模糊期先用 Zod/TypeBox 定義資料結構，與 PM/設計師同步，
這讓我在前端可以先 stub 出 UI，不必等到後端上線。

二、回歸點：錯誤落在 compile-time
很多 runtime 才發現的錯，提早在編譯時阻擋，PR review 的討論品質也提高。

三、部署後：日誌+型別做為迭代證據
當資料結構演進時，我用 codemod+型別狀態拆遷移步驟，降低風險。`
  },
  {
    id: "react-performance-notes",
    title: "React 效能筆記：從 120ms 到 16ms 的旅程",
    date: "2025-07-30",
    tags: ["React", "Performance"],
    excerpt:
      "一次表單渲染卡頓的救援：Profiler、分段渲染、避免不必要的 re-render。",
    content:
      `我們的管理介面在表單切換時會卡住。我用 React Profiler 發現是 context 改變
導致的大量無關 re-render。調整策略如下：

1) 切分 Context：把高頻變動的 state 下放更靠近使用者的 component。
2) memo + useCallback：只在必要時穩定參考。
3) skeleton + 分段渲染：先出可見區，再載入次要欄位。

最後首屏互動時間從 120ms 降到 16ms，用戶的體感差非常多。`
  }
];
