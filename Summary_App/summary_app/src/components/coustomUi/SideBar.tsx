import { Link } from "react-router-dom";
import { AiOutlineWechat } from "react-icons/ai";
import { useHelper } from "@/context/ContextHelper";
const fakeData = [
  {
    id: 1,
    title: "How to learn Python?",
    snippet:
      "Python is a versatile programming language. To learn Python, start with the basics like variables and control structures...",
  },
  {
    id: 2,
    title: "Best practices for React development",
    snippet:
      "When developing with React, it's important to follow best practices such as component reuse, proper state management...",
  },
  {
    id: 3,
    title: "Understanding async/await in JavaScript",
    snippet:
      "Async/await syntax in JavaScript simplifies handling asynchronous operations. It makes the code more readable and easier to manage...",
  },
  {
    id: 4,
    title: "CSS Grid vs Flexbox: When to use which",
    snippet:
      "CSS Grid and Flexbox are powerful layout systems in CSS. Grid is best for two-dimensional layouts, while Flexbox excels in one-dimensional layouts...",
  },
  {
    id: 5,
    title: "Introduction to Machine Learning",
    snippet:
      "Machine Learning is a subset of artificial intelligence focused on building systems that learn from data. Common algorithms include decision trees, support vector machines...",
  },
  {
    id: 6,
    title: "Creating REST APIs with Node.js and Express",
    snippet:
      "Node.js and Express make it easy to create robust REST APIs. Start by setting up a basic Express server, then define your routes and handlers...",
  },
  {
    id: 7,
    title: "Top 10 JavaScript frameworks in 2024",
    snippet:
      "JavaScript frameworks have evolved rapidly. The top frameworks in 2024 include React, Vue.js, Angular, Svelte, and more...",
  },
  {
    id: 8,
    title: "Building responsive websites with Bootstrap",
    snippet:
      "Bootstrap is a popular framework for building responsive websites quickly. It includes a grid system, pre-styled components, and utilities for customization...",
  },
  {
    id: 9,
    title: "What is Docker and how to use it?",
    snippet:
      "Docker is a platform for developing, shipping, and running applications in containers. Containers are lightweight, portable, and ensure consistency across environments...",
  },
  {
    id: 10,
    title: "Understanding GraphQL: A beginner's guide",
    snippet:
      "GraphQL is a query language for APIs that provides a more efficient, powerful, and flexible alternative to REST. It allows clients to request only the data they need...",
  },
];

const Sidebar = () => {
  const {setData, summary} = useHelper();
  console.log(summary);
  
  return (
    <div className="sidebar absolute top-20 h-full max-h-[89%] w-[50%] bg-black overflow-x-hidden overflow-y-scroll px-2">
      <h2 className="h3-bold capitalize">summary Sidebar</h2>
      <div className="relative w-full flex-between mt-2">
        <Link to="/new-chat" className="body-medium">
          New Chat
        </Link>
        <p className="h2-bold text-[#120235] cursor-pointer">
          <AiOutlineWechat />
        </p>
      </div>
      <ul className="w-full relative mt-4 flex-start flex-col gap-2">
        {fakeData.map(({ id, title, snippet }) => (
          <li key={id} className="text-hover h3-regular" onClick={() => setData(snippet)}>
            <p>{title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
