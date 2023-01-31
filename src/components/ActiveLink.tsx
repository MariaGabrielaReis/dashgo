import { cloneElement, ReactElement } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({
  children,
  shouldMatchExactHref = false,
  ...rest
}: ActiveLinkProps) {
  const { pathname } = useRouter();

  let isActive = false;

  if (shouldMatchExactHref) {
    isActive = pathname === rest.href || pathname === rest.as;
  } else {
    isActive =
      pathname.startsWith(String(rest.href)) ||
      pathname.startsWith(String(rest.as));
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? "teal.400" : "gray.50",
      })}
    </Link>
  );
}
