import type { ReactNode } from "react";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

const Container = ({ className, children }: ContainerProps) => (
  <section className={className ?? ""}>
    <div className="max-w-400 mx-auto px-10">{children}</div>
  </section>
);

export default Container;
