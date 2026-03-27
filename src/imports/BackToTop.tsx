import { useEffect, useState } from "react";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed right-[32px] bottom-[32px] z-50
        flex items-center justify-center
        w-[48px] h-[48px]
        border border-[#3A2E2A]
        text-[#3A2E2A]
        bg-[#F1E9DA]
        transition-all duration-300 ease-out
        hover:bg-[#3A2E2A] hover:text-[#F1E9DA]
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[10px] pointer-events-none"}
      `}
        >
            ↑
        </button>
    );
}