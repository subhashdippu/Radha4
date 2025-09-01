import React from "react";
import { ExternalLink } from "lucide-react";

const HomePage = () => {
  const cards = [
    {
      title: "Get started",
      desc: "Read our getting started guide to get the most out of your Capitalmind subscription.",
    },
    {
      title: "Community",
      desc: "Join the conversation on our exclusive community on Slack for Capitalmind Premium subscribers",
    },
    {
      title: "Visit website",
      desc: "Keep up with our latest content on our website",
    },
  ];

  const posts = [
    {
      date: "Apr 18, 2024",
      title: "CM Fixed Income: Exiting Banking & PSU to Add a New Gilt Fund",
      desc: "We are increasing the duration of our Fixed Income portfolio to reflect the current macro conditions...",
    },
    {
      date: "Apr 05, 2024",
      title: "Craftsman Automation: Poised for Growth Amid Temporary Headwinds",
      desc: "Craftsman Automation excels in making precise parts for cars and machines. Amidst temporary headwinds...",
    },
    {
      date: "Apr 03, 2024",
      title:
        "The Focused Way of Investing: Our Four-Quadrant Strategy and FY24 Review",
      desc: "FY24 brought us a 42% gain in our Capitalmind Focused portfolio, gently outperforming the Nifty's 29%...",
    },
    {
      date: "Mar 27, 2024",
      title: "A Small CAD for India, Yet Again",
      desc: "India's Current Account Deficit is a mere 10 bn in the quarter (Dec 2023), less than levels more than a decade back...",
    },
    {
      date: "Mar 25, 2024",
      title: "Poonawalla Fincorp: One right step at a time",
      desc: "There are some winning patterns in investing that keep repeating. One such pattern is when a big company...",
    },
    {
      date: "Mar 18, 2024",
      title:
        "CM Focused: Reducing our allocation to smallcaps & increasing cash",
      desc: "In the last few days, we have seen increased volatility in the mid and small-cap markets...",
    },
  ];

  return (
    <div className="flex-1  m-6 min-h-screen">
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-6">Home</h1>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white p-5 rounded-lg shadow-sm border flex items-start justify-between"
          >
            <div>
              <h2 className="font-semibold text-gray-900">{card.title}</h2>
              <p className="text-sm text-gray-600 mt-1">{card.desc}</p>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 ml-2 mt-1" />
          </div>
        ))}
      </div>

      {/* Latest Posts */}
      <h2 className="text-lg font-semibold mb-4">Latest Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post, idx) => (
          <div key={idx}>
            <p className="text-sm text-gray-500">{post.date}</p>
            <h3 className="font-semibold text-gray-900 mt-1">{post.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{post.desc}</p>
            <a
              href="#"
              className="text-green-600 font-medium text-sm mt-2 inline-block"
            >
              Read full post
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
