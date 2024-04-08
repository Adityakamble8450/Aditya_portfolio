import React from "react";
import { useLocation , Link } from "react-router-dom";
import cn from "../lib/Utils";
// import Link from "next/link";

const NavLink = ({
  children,
  className: classn,
  activeClassName = "active",
  ...props
}) => {
  const location = useLocation();
  const path = location.pathname;

  const isActive = path === props.href || path === props.as;

  const className = cn(classn, { [activeClassName]: isActive });

  return (
    <Link   {...props} className={className}>
      {children}
    </Link>
  );
};

export default NavLink;