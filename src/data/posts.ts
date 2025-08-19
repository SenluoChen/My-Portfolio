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
      `Between Hype and Fear
When I think about the future of work, I often notice two extremes...`,
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
    title: "The Impact of AI on Software Engineering",
    date: "2025-07-30",
    tags: ["React", "Performance"],
    excerpt:
      `A Shift, Not the End

AI is already changing how we code. Routine work like writing boilerplate or fixing small bugs is now handled much faster by tools. That doesn’t mean engineers are disappearing...`,
    content:
      `A Shift, Not the End

AI is already changing how we code. Routine work like writing boilerplate or fixing small bugs is now handled much faster by tools. That doesn’t mean engineers are disappearing. It means the role is moving toward guiding AI, reviewing its output, and solving the complex problems that actually drive value.

The Tough Spot for Juniors

The first people to feel the pressure are newcomers. Entry-level coding tasks, the ones that used to teach you the basics, are now automated. This makes the path into the field steeper. It doesn’t shut the door, but it does raise the expectation that you bring something more than just syntax knowledge.

Why Going Beyond Code Matters

Software development is no longer just about code. The engineers who stand out will be those who combine AI skills with expertise in other areas like finance, biotech, healthcare, or energy. When you understand an industry and use AI as a tool inside it, you bring unique value that a model on its own cannot.

Looking Ahead

The future of this profession isn’t about fighting AI. It’s about learning how to work with it, letting it take the repetitive parts so we can focus on creativity, strategy, and building meaningful solutions. The engineers who embrace this shift and go beyond pure coding will be the ones shaping the future.`
  }
];
