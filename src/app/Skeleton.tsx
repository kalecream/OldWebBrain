import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface SkeletonProps {
  count?: number;
  circle?: boolean;
  className?: string;
  containerClassName?: string;

  baseColor?: string;
  highlightColor?: string;
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  inline?: boolean;
}

const LoadingSkeleton = ({ count = 3, baseColor = "#202020", highlightColor = "#444",containerClassName="flex-1", height="1rem" }: SkeletonProps) => {
  return (
    <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
      <p>
        <Skeleton count={count} containerClassName={containerClassName} style={{ lineHeight: 1, height: height, width: "100%", borderRadius: "--var(borderRadius)" }} />
      </p>
    </SkeletonTheme>
  );
};

export default LoadingSkeleton;
