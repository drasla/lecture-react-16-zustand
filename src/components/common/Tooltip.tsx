import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TooltipProps = {
    children: ReactNode;
    content: string;
    position?: "top" | "bottom" | "left" | "right";
};

function Tooltip({ children, content, position = "top" }: TooltipProps) {
    const positionClasses = {
        // left, top, right, bottom 은 기준점이 되는 대상 부모의 크기에 따른 위치 계산
        // translate는 내 자신에 대한 크기에 따른 위치 이동 계산
        top: ["left-1/2", "bottom-full", "-translate-x-1/2", "mb-2"],
        bottom: ["left-1/2", "-translate-x-1/2", "top-full", "mt-2"],
        left: ["right-full", "top-1/2", "-translate-y-1/2", "mr-2"],
        right: ["left-full", "top-1/2", "-translate-y-1/2", "ml-2"],
    };

    return (
        <div className={twMerge(["relative", "group"])}>
            {children}
            {/* 툴팁 */}
            <div
                className={twMerge(
                    // whitespace-nowrap : 줄바꿈 안함
                    ["absolute", "whitespace-nowrap", "px-2", "py-1"],
                    positionClasses[position],
                    ["shadow-md", "bg-gray-800", "text-white", "rounded-md"],
                    // dark 모드에서 적용되는 CSS를 적용하려면 접두사(prefix) dark: 를 붙여주면 됨
                    ["text-xs", "font-medium", "dark:bg-white", "dark:text-gray-800"],
                    ["invisible", "group-hover:visible"],
                    ["transition-all", "opacity-0", "group-hover:opacity-100"],
                    ["scale-60", "group-hover:scale-100"],
                )}>
                {content}
            </div>
        </div>
    );
}

export default Tooltip;
