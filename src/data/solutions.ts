export interface solutionItem {
	slug: string,
  tag: string,
  title: string,
  desc: string,
  gradient: string,
  icon: string
}


 export const solutions  : solutionItem[]=[
  {
    slug: "business-intelligence",
    tag: "CORE OFFERING",
    title: "Agentic AI Systems",
    desc: "Autonomous, goal-driven AI agents that can reason, plan, and execute complex multi-step workflows with minimal human intervention across enterprise systems.",
    gradient: "from-indigo-600/90 via-indigo-500 to-blue-600/90",
    // image: "/illustrations/agentic-ai.png",
    icon: "neurology",
  },
  {
    slug: "intelligent-automation",
    tag: "CUSTOMER & INTERNAL",
    title: "AI Chatbots",
    desc: "Intelligent, context-aware chatbots powered by large language models for customer support, internal knowledge retrieval, onboarding, and real-time assistance.",
    gradient: "from-violet-600/90 via-indigo-500 to-indigo-600/90",
    // image: "/illustrations/ai-chatbot.png",
    icon: "chat_bubble",
  },
  {
    slug: "AI-powered Platforms",
    tag: "OPERATIONS",
    title: "Business Automation",
    desc: "End-to-end automation of repetitive and decision-heavy business processes, reducing manual effort, improving accuracy, and accelerating operational efficiency.",
    gradient: "from-cyan-600/90 via-blue-500 to-indigo-600/90",
    // image: "/illustrations/automation.png",
    icon: "settings_suggest",
  },
  {
    slug: "Research & Advanced AI",
    tag: "DATA & INSIGHTS",
    title: "Predictive Modeling",
    desc: "Advanced machine learning models that forecast trends, detect risks, and uncover actionable insights to support smarter, data-driven business decisions.",
    gradient: "from-purple-600/90 via-fuchsia-500 to-indigo-600/90",
    // image: "/illustrations/predictive.png",
    icon: "ssid_chart",
  },
];