export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  content: string; // HTML string for detail page
}

export const articles: Article[] = [
  {
    slug: "ai-revolutionizing-supply-chain",
    title: "How AI is Revolutionizing Supply Chain Management",
    excerpt:
      "Artificial intelligence is reshaping logistics with predictive analytics and real-time optimization...",
    date: "Feb 28, 2026",
    image: "/images/blog/ai-supply-chain.jpg",
    content: `
      <p>Artificial intelligence is transforming supply chain management in unprecedented ways. From predictive demand forecasting to autonomous vehicles, AI is making logistics faster, cheaper, and more reliable.</p>
      <p>Our platform leverages machine learning to optimize routes, predict delays, and suggest cost‑saving measures. Real‑time data analysis allows us to adjust to disruptions instantly, ensuring your goods arrive on time, every time.</p>
      <p>With AI, we can also offer dynamic pricing and capacity planning, giving you a competitive edge in a volatile market.</p>
    `,
  },
  {
    slug: "reduce-shipping-costs",
    title: "5 Tips for Reducing Shipping Costs",
    excerpt:
      "Optimize packaging, consolidate shipments, and choose the right carrier to save money...",
    date: "Feb 20, 2026",
    image: "/images/blog/shipping-costs.jpg",
    content: `
      <p>Shipping costs can eat into your margins, but with the right strategies, you can cut expenses significantly. Here are five proven tips:</p>
      <ul>
        <li><strong>Optimize packaging:</strong> Use right‑sized boxes to reduce dimensional weight charges.</li>
        <li><strong>Consolidate shipments:</strong> Combine orders to increase volume and negotiate better rates.</li>
        <li><strong>Choose the right carrier:</strong> Compare rates and services; sometimes regional carriers offer better deals.</li>
        <li><strong>Use technology:</strong> Our platform compares rates in real time and suggests the most cost‑effective option.</li>
        <li><strong>Plan ahead:</strong> Avoid expedited shipping by forecasting demand accurately.</li>
      </ul>
    `,
  },
  {
    slug: "green-logistics-future",
    title: "The Future of Green Logistics",
    excerpt:
      "Sustainable practices, electric trucks, and carbon offsetting are becoming standard...",
    date: "Feb 12, 2026",
    image: "/images/blog/green-logistics.jpg",
    content: `
      <p>Environmental responsibility is no longer optional – it’s a business imperative. Green logistics is at the forefront of our operations.</p>
      <p>We’ve invested in electric delivery vehicles, optimized routes to reduce fuel consumption, and partnered with carbon offset programs. Our clients can choose carbon‑neutral shipping options, helping them meet their sustainability goals.</p>
      <p>Looking ahead, we’re exploring hydrogen fuel cells and autonomous electric trucks, aiming to achieve net‑zero emissions by 2030.</p>
    `,
  },
];
