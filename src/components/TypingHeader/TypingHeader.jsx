import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingHeader = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: [
        "👨‍💻 Jason Cox",
        "⚙️ A Full-Stack Developer",
        "A JavaScript Enthusiast",
        "📚 A Lifelong Learner",
        "A Tech Innovator",
        "💡 A Creative Thinker",
        "A Passionate Coder",
        "An Adaptable Professional",
        "🚀 A Problem Solver",
        "🌐 A Web Application Builder",
        "🛠️ A React & Node.js Specialist",
        "🤝 A Team Player",
        "🎨 A UI/UX Explorer",
        "🔍 A Detail-Oriented Engineer",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div className="text-3xl sm:text-4xl font-bold max-w-xs">
      <span ref={el} />
    </div>
  );
};

export default TypingHeader;
