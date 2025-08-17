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
    title: "How I See the Future of Work",
    date: "2025-08-10",
    tags: ["TypeScript", "API", "DX"],
    excerpt:
      "型別不只是補救錯誤，它影響協作速度、邊界設計與可維護性。我在三個專案裡的實戰筆記。",
    content:
      `Between Hype and Fear

When I think about the future of work, I often notice two extremes. Some people predict the end of employment as we know it, while others insist nothing significant will change. Personally, I believe the reality lies somewhere in between. Work is not disappearing, but it is already being reshaped in ways that are easy to overlook.

From Jobs to Tasks

The real shift is happening at the level of tasks. Repetitive duties such as filing, scheduling, or drafting standard documents are increasingly handled by digital tools. What remains for people are the parts that require judgment, creativity, and communication. Jobs are not being erased overnight, but their composition is changing, and with it, the type of value we contribute.

The New Shape of Work

I imagine the workplace of tomorrow as leaner and more project-based. Small teams will be able to achieve what once required whole departments. Careers will become less about fixed titles and more about combining tools, data, and human insight into meaningful outcomes. In this landscape, qualities that no machine can replicate—empathy, trust, strategy, and cross-disciplinary thinking—will become even more vital.

Choosing How to Adapt

For me, the question is not whether work will change, but how we choose to adapt alongside it. If we view new tools only as a threat, we risk falling behind. But if we learn to integrate them into our daily routines—letting them take over what is mechanical while we focus on what is human—then the future of work can become not only more efficient but also more fulfilling.`
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
