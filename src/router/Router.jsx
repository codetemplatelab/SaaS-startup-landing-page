import { createContext, useContext, useEffect, useMemo, useState } from "react";

const RouterContext = createContext({ route: "/", navigate: () => {} });

const normalizePath = (path) => {
  if (!path) {
    return "/";
  }

  const clean = path.split("?")[0].split("#")[0];
  if (clean === "" || clean === "/") {
    return "/";
  }

  return clean.endsWith("/") ? clean.slice(0, -1) : clean;
};

export const Router = ({ children }) => {
  const [route, setRoute] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => setRoute(normalizePath(window.location.pathname));
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (to) => {
    const next = normalizePath(to);
    if (next === route) {
      return;
    }

    window.history.pushState({}, "", next);
    setRoute(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const value = useMemo(() => ({ route, navigate }), [route]);

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
};

export const useRouter = () => useContext(RouterContext);

export const RouteLink = ({ to, onClick, ...props }) => {
  const { navigate } = useRouter();

  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }

    if (event.defaultPrevented) {
      return;
    }

    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      props.target === "_blank"
    ) {
      return;
    }

    event.preventDefault();
    navigate(to);
  };

  return <a href={to} onClick={handleClick} {...props} />;
};
