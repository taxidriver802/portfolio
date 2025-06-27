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
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.current.destroy(); // Clean up on unmount
    };
  }, []);

  return (
    <div className="text-3xl sm:text-4xl font-bold">
      <span ref={el} />
    </div>
  );
};

export default TypingHeader;
