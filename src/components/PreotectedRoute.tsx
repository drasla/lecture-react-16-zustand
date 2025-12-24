import type { ReactNode } from "react";
import { useAuthStore } from "../stores/useAuthStore.ts";
import { Navigate } from "react-router";

type Props = {
    children: ReactNode;
};

function ProtectedRoute({ children }: Props) {
    // 로그인이 되어져 있으면~ 그대로 출력하고
    // 로그인이 안되어져 있으면~ /sign-in 으로 사용자를 보내는 역할
    const { isAuthenticated } = useAuthStore();
    if (!isAuthenticated) return <Navigate to={"/sign-in"} />;
    return <>{children}</>;
}

export default ProtectedRoute;
