import React from "react";
import Link from "next/link";

const TextLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => {
  return <Link href={href} style={{ fontSize: 20 }}>{children}</Link>;
};

export default TextLink;
