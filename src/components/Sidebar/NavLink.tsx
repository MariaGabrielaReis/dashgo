import { ElementType } from "react";
import Link from "next/link";
import {
  Icon,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Text,
} from "@chakra-ui/react";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  label: string;
  href: string;
}

export function NavLink({ icon, label, href, ...props }: NavLinkProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink display={"flex"} alignItems={"center"} {...props}>
        <Icon as={icon} fontSize={"24"} />
        <Text ml={"4"} fontWeight={"medium"}>
          {label}
        </Text>
      </ChakraLink>
    </Link>
  );
}
