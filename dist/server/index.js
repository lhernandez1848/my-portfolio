import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useMatches, useActionData, useLoaderData, useParams, useRouteError, useLocation, ScrollRestoration, Scripts, Meta, Links, Outlet, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement, useState, useEffect, useRef } from "react";
import ImageGallery from "react-image-gallery";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
function Toggle({ handleChange, isDark }) {
  return /* @__PURE__ */ jsx("div", { className: "flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse", children: isDark ? /* @__PURE__ */ jsx("button", { onClick: handleChange, type: "button", className: "hs-dark-mode-active:block hs-dark-mode font-medium text-gray-800 rounded-full hover:bg-gray-200 focus:outline-hidden dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800", "data-hs-theme-click-value": "light", children: /* @__PURE__ */ jsx("span", { className: "group inline-flex shrink-0 justify-center items-center size-9", children: /* @__PURE__ */ jsxs("svg", { className: "shrink-0 size-4", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "4" }),
    /* @__PURE__ */ jsx("path", { d: "M12 2v2" }),
    /* @__PURE__ */ jsx("path", { d: "M12 20v2" }),
    /* @__PURE__ */ jsx("path", { d: "m4.93 4.93 1.41 1.41" }),
    /* @__PURE__ */ jsx("path", { d: "m17.66 17.66 1.41 1.41" }),
    /* @__PURE__ */ jsx("path", { d: "M2 12h2" }),
    /* @__PURE__ */ jsx("path", { d: "M20 12h2" }),
    /* @__PURE__ */ jsx("path", { d: "m6.34 17.66-1.41 1.41" }),
    /* @__PURE__ */ jsx("path", { d: "m19.07 4.93-1.41 1.41" })
  ] }) }) }) : /* @__PURE__ */ jsx("button", { onClick: handleChange, type: "button", className: "hs-dark-mode-active:hidden block hs-dark-mode font-medium text-gray-800 rounded-full hover:bg-gray-200    focus:outline-hidden dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800", "data-hs-theme-click-value": "dark", children: /* @__PURE__ */ jsx("span", { className: "group inline-flex shrink-0 justify-center items-center size-9", children: /* @__PURE__ */ jsx("svg", { className: "shrink-0 size-4", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: /* @__PURE__ */ jsx("path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" }) }) }) }) });
}
function classNames$1(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Navbar({ handleChange, isDark }) {
  let location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const navigation = [
    { name: "Home", href: "/", current: location.pathname === "/" ? true : false },
    { name: "Projects", href: "/projects", current: location.pathname === "/projects" ? true : false }
  ];
  const navMenu = navigation.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
    "a",
    {
      href: item.href,
      "aria-current": item.current ? "page" : void 0,
      className: classNames$1(
        item.current ? "text-white bg-cyan-800 md:bg-transparent md:text-cyan-800 md:p-0 md:dark:text-cyan-500" : "hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-800 md:p-0 md:dark:hover:text-cyan-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",
        "text-gray-900 rounded-sm"
      ),
      children: item.name
    }
  ) }, item.name));
  return /* @__PURE__ */ jsxs("nav", { className: "bg-white dark:bg-gray-950 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-2 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "relative flex h-16 items-center justify-between", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 flex items-center sm:hidden", children: /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setIsOpen(!isOpen), className: "relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-200 focus:outline-hidden dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800", "aria-controls": "mobile-menu", "aria-expanded": "false", children: [
        /* @__PURE__ */ jsx("span", { className: "absolute -inset-0.5" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open main menu" }),
        isOpen ? /* @__PURE__ */ jsx("svg", { className: "block size-6", fill: "none", viewBox: "0 0 24 24", "stroke-width": "1.5", stroke: "currentColor", "aria-hidden": "true", "data-slot": "icon", children: /* @__PURE__ */ jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", d: "M6 18 18 6M6 6l12 12" }) }) : /* @__PURE__ */ jsx("svg", { className: "block size-6", fill: "none", viewBox: "0 0 24 24", "stroke-width": "1.5", stroke: "currentColor", "aria-hidden": "true", "data-slot": "icon", children: /* @__PURE__ */ jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-1 items-center justify-center sm:items-stretch sm:justify-start", children: /* @__PURE__ */ jsx("div", { className: "hidden sm:ml-6 sm:block", children: /* @__PURE__ */ jsx("div", { className: "flex space-x-4", children: /* @__PURE__ */ jsx("ul", { className: "flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0", children: navMenu }) }) }) }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0", children: /* @__PURE__ */ jsx(Toggle, { isDark, handleChange }) })
    ] }) }),
    isOpen && /* @__PURE__ */ jsx("div", { className: "sm:hidden", id: "mobile-menu", children: /* @__PURE__ */ jsx("div", { className: "space-y-1 px-2 pt-2 pb-3", children: /* @__PURE__ */ jsx("ul", { className: "flex flex-col p-2 font-medium border border-gray-100 rounded-lg bg-gray-50 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700", children: navMenu }) }) })
  ] });
}
function Body({ children }) {
  const [isDark, setIsDark] = useState(false);
  const handleChange = () => {
    localStorage.setItem("isDark", (!isDark).toString());
    setIsDark(!isDark);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDark(localStorage.getItem("isDark") === "true");
    }
  }, []);
  return /* @__PURE__ */ jsxs("body", { "data-theme": isDark ? "dark" : "light", className: "font-sans antialiased text-gray-900 leading-normal tracking-wider bg-no-repeat", children: [
    /* @__PURE__ */ jsx(Navbar, { isDark, handleChange }),
    children,
    /* @__PURE__ */ jsx(ScrollRestoration, {}),
    /* @__PURE__ */ jsx(Scripts, {})
  ] });
}
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsx(Body, {
      children
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const ABOUT = {
  title: "FRONT-END DEVELOPER",
  name: "Lisdanay Hernandez",
  location: "Kitchener, Ontario Canada",
  description: "I'm a Front-end Developer based in Kitchener, Ontario. With over 2 years of experience in designing, developing and maintaining web applications, I am looking to leverage my skills to produce applications that exceed user expectations."
};
const EXPERIENCE = [
  {
    name: "FRONT-END DEVELOPER",
    location: "Periculum",
    startYear: "2021",
    timeFrame: "Sept 2021 - May 2023",
    list: [
      "Designed and developed main platform dashboards in React/Chart.js, integrated APIs, and led a website redesign that increased traffic by 80%."
    ]
  },
  {
    name: "UX/UI DESIGNER",
    location: "COMMUNITECH",
    startYear: "2021",
    timeFrame: "March 2021 - June 2021",
    list: [
      "Redesigned websites for 10+ small businesses, boosting online sales and improving user experience during the COVID-19 pandemic."
    ]
  }
];
const EDUCATION = [
  {
    name: "COMPUTER PROGRAMMER / ANALYST",
    location: "Conestoga College",
    timeFrame: "September 2017 - April 2020",
    list: [
      "Three-year advanced diploma",
      "Awarded Graduation with Distinction",
      "GPA: 3.77"
    ]
  },
  {
    name: "BUSINESS ADMINISTRATION - ACCOUNTING",
    location: "Conestoga College",
    timeFrame: "September 2011 - April 2014",
    list: [
      "Three-year advanced diploma"
    ]
  }
];
const PROJECTS = [
  {
    title: "Insights",
    role: "Front-End Developer",
    stack: ["React", "Redux", "Auth0"],
    shortDescription: "Insights is a data-driven analytics and credit scoring engine that provides predictive insights into customer’s financial standing",
    description: ["Insights is a data-driven analytics and credit scoring engine that provides predictive insights into customer’s financial standing. From the Home page, a user can upload a bank statement, and, once processed, can view it’s Analytics, Credit Scoring, Affordability, etc."],
    mainImage: "/assets/insights-home.png",
    images: ["/assets/insights-home-full.png", "/assets/insights-affordability.png", "/assets/insights-score.png"]
  },
  {
    title: "IVY",
    role: "Front-End Developer",
    stack: ["Android Studio", "Java", "NodeJS"],
    shortDescription: "IVY is a mobile application that provides main inventory functions",
    description: ["IVY is a mobile application that provides main inventory functions. This app was developed as part of the Capstone graduation project. Our team of three was asked to make this project for the client company, Huex Inc."],
    mainImage: "/assets/ivy-group.png",
    images: ["/assets/ivy-login.png", "/assets/ivy-product-result.png", "/assets/ivy-value.png", "/assets/ivy-pie.png"],
    link: "https://github.com/lhernandez1848/Capstone",
    linkTitle: "View Repository"
  },
  {
    title: "Plantpedia",
    role: "Personal Project",
    stack: ["Android Studio", "Java", "AdobeXD", "Firebase Authentication", "Firebase Realtime Database"],
    shortDescription: "",
    description: ["Developed for Android OS using Java, this mobile app is designed to help the user catalog and care for their houseplants. Each user can keep track of which plants they own and their specific needs. The app will send daily notifications to remind the user of which specific plants need to be watered that day."],
    mainImage: "/assets/pl-group.png",
    images: ["/assets/pl-home.png", "/assets/pl-add.png", "/assets/pl-rec.png"],
    link: "https://github.com/lhernandez1848/Plantpedia",
    linkTitle: "View Repository"
  }
];
function About() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("p", { className: "pt-4 text-sm dark:text-gray-200", children: ABOUT.description }),
    /* @__PURE__ */ jsx("div", { className: "mt-6 pb-6 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-center lg:justify-start gap-6", children: resources$1.map(({ href, icon, handle }, i) => /* @__PURE__ */ jsx(
      "a",
      {
        "data-tippy-content": handle,
        className: "link",
        href,
        target: "_blank",
        rel: "noreferrer",
        children: icon
      },
      i + href
    )) })
  ] });
}
const resources$1 = [
  {
    href: "https://github.com/lhernandez1848",
    text: "GitHub",
    handle: "",
    icon: /* @__PURE__ */ jsxs("svg", { className: "h-6 fill-current text-gray-600 hover:text-cyan-800", role: "img", viewBox: "0 0 24 24", children: [
      /* @__PURE__ */ jsx("title", { children: "GitHub" }),
      /* @__PURE__ */ jsx("path", { d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" })
    ] })
  },
  {
    href: "https://www.linkedin.com/in/lisdanay-hernandez/",
    text: "LinkedIn",
    handle: "",
    icon: /* @__PURE__ */ jsx("svg", { className: "h-6 fill-current text-gray-600 hover:text-cyan-800", version: "1.1", viewBox: "0 0 382 382", children: /* @__PURE__ */ jsx("path", { d: "M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889\n          C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056\n          H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806\n          c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1\n          s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73\n          c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079\n          c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426\n          c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472\n          L341.91,330.654L341.91,330.654z" }) })
  }
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Tabs(props) {
  const [activeTab, setActiveTab] = useState(0);
  const headers = props.tabBodies.map((tabBody, i) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        className: "st-details-header me-2 cursor-pointer",
        onClick: () => setActiveTab(i),
        children: /* @__PURE__ */ jsx("h4", { className: classNames(activeTab === i ? "text-cyan-900 hover:text-cyan-600 dark:text-cyan-500 dark:hover:text-cyan-500 border-b border-cyan-600 dark:border-cyan-500" : "hover:text-gray-600 hover:border-b hover:border-gray-300 dark:hover:text-gray-300", "text-sm inline-block pb-1"), children: tabBody.title })
      },
      i + tabBody.title
    );
  });
  let activeTabBody = props.tabBodies[activeTab];
  if (activeTabBody === null || activeTabBody === void 0) {
    return null;
  }
  return /* @__PURE__ */ jsxs("div", { className: "font-medium text-gray-500 dark:text-gray-400", children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap mt-4 gap-4", children: headers }),
    /* @__PURE__ */ jsx("div", { className: "tab-bodies-container", children: activeTabBody.body })
  ] }, activeTab);
}
function Experience() {
  const experience = EXPERIENCE.map((el, i) => {
    return /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-sm font-bold dark:text-gray-200", children: [
        el.name,
        " | ",
        el.location
      ] }),
      /* @__PURE__ */ jsx("p", { className: "font-semibold text-xs dark:text-gray-200", children: el.timeFrame }),
      /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm dark:text-gray-200 mt-2 mb-1", children: "Key Responsibilities" }),
      /* @__PURE__ */ jsx("ul", { className: "text-sm list-disc pl-4 space-y-1", children: el.list.map((item, j) => {
        return /* @__PURE__ */ jsx("li", { children: item }, j);
      }) })
    ] }, i);
  });
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ jsx("div", { className: "py-3", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-4", children: experience }) }) });
}
function Education() {
  const schools = EDUCATION.map((el, i) => {
    return /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ jsx("p", { className: "font-semibold text-xs text-gray-700", children: el.timeFrame }),
      /* @__PURE__ */ jsxs("p", { className: "text-sm font-medium mb-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-cyan-700", children: el.name }),
        ", ",
        el.location
      ] }),
      el.list.map((item, j) => /* @__PURE__ */ jsx("p", { className: "font-bold text-xs text-gray-700 mb-2", children: item }, j))
    ] }, i);
  });
  return /* @__PURE__ */ jsx("div", { className: "py-3 sm:order-none order-1", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col space-y-1", children: schools }) });
}
function Skills() {
  const skills = resources.map((skill, i) => {
    return /* @__PURE__ */ jsx("li", { children: skill }, i);
  });
  return /* @__PURE__ */ jsx("div", { className: "py-3 sm:order-none order-2", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("ul", { className: "text-sm list-disc pl-3 space-y-1", children: skills }) }) });
}
const resources = [
  "HTML, CSS, JavaScript, TypeScript",
  "Tailwind CSS",
  "React, Next",
  "Redux, Firebase",
  "C#, Java"
];
function meta$1({}) {
  return [{
    title: "Lisdanay Hernandez"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
const home = withComponentProps(function Home() {
  return /* @__PURE__ */ jsxs("div", {
    className: "max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0",
    children: [/* @__PURE__ */ jsx("div", {
      id: "profile",
      className: "w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white dark:bg-black opacity-75 mx-6 lg:mx-0",
      children: /* @__PURE__ */ jsxs("div", {
        className: "p-4 md:p-12 lg:text-left",
        children: [/* @__PURE__ */ jsx("div", {
          className: "block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center",
          style: {
            backgroundImage: "url('/assets/lisdanay.png')"
          }
        }), /* @__PURE__ */ jsx("h1", {
          className: "text-3xl font-bold pt-8 lg:pt-0 dark:text-gray-200 text-center lg:text-start",
          children: ABOUT.name
        }), /* @__PURE__ */ jsx("div", {
          className: "mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-cyan-500 opacity-25"
        }), /* @__PURE__ */ jsxs("p", {
          className: "pt-4 text-base dark:text-gray-200 font-bold flex items-center justify-center lg:justify-start",
          children: [/* @__PURE__ */ jsx("svg", {
            className: "h-4 fill-current text-cyan-800 pr-4",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ jsx("path", {
              d: "M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"
            })
          }), " ", ABOUT.title]
        }), /* @__PURE__ */ jsxs("p", {
          className: "pt-2 text-gray-600 dark:text-gray-400 text-xs lg:text-sm flex items-center justify-center lg:justify-start",
          children: [/* @__PURE__ */ jsx("svg", {
            className: "h-4 fill-current text-cyan-800 pr-4",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ jsx("path", {
              d: "M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z"
            })
          }), " ", ABOUT.location]
        }), /* @__PURE__ */ jsx(Tabs, {
          tabBodies: tabs
        })]
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "w-full lg:w-2/5",
      children: /* @__PURE__ */ jsx("img", {
        src: "/assets/lisdanay.png",
        className: "rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
      })
    })]
  });
});
const tabs = [{
  title: "About",
  body: /* @__PURE__ */ jsx(About, {})
}, {
  title: "Experiense",
  body: /* @__PURE__ */ jsx(Experience, {})
}, {
  title: "Education",
  body: /* @__PURE__ */ jsx(Education, {})
}, {
  title: "Skills",
  body: /* @__PURE__ */ jsx(Skills, {})
}];
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
function Gallery(props) {
  const images = props.images.map((image) => {
    return {
      original: image
    };
  });
  return /* @__PURE__ */ jsx(ImageGallery, { items: images, showThumbnails: false, showPlayButton: false });
}
function Modal(props) {
  const ref = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        props.callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return /* @__PURE__ */ jsx("div", { className: "modal-overlay bg-gray-500/75 transition-opacity z-30", children: /* @__PURE__ */ jsxs("div", { className: "modal bg-white rounded-lg shadow-sm dark:bg-gray-700", ref, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 w-full md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-medium text-gray-900 dark:text-white", children: props.title }),
      /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => props.callback(), className: "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white", "data-modal-hide": "extralarge-modal", children: [
        /* @__PURE__ */ jsx("svg", { className: "w-3 h-3", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14", children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", "stroke-linejoin": "round", strokeWidth: "2", d: "m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" }) }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close modal" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "modal-content", children: props.element })
  ] }) });
}
function ProjectCard({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    isOpen && /* @__PURE__ */ jsx(Modal, { element: /* @__PURE__ */ jsx(Gallery, { images: data.images }), title: data.title, callback: () => setIsOpen(false) }),
    /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col md:flex-row w-full my-6 shadow-2xl bg-white dark:bg-black opacity-75 border border-slate-200 dark:border-slate-900 rounded-lg w-96", children: [
      /* @__PURE__ */ jsx("div", { className: "relative p-2.5 md:w-2/5 shrink-0 overflow-hidden", children: /* @__PURE__ */ jsx(
        "img",
        {
          onClick: () => setIsOpen(true),
          src: data.mainImage,
          alt: "card-image",
          className: "h-full w-full rounded-md md:rounded-lg object-cover"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsx("h4", { className: "mb-2 text-slate-800 text-xl font-semibold dark:text-gray-200", children: data.title }),
        /* @__PURE__ */ jsx("p", { className: "mb-8 text-slate-600 leading-normal font-light dark:text-gray-200", children: data.description }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: data.stack.map((item, y) => /* @__PURE__ */ jsx("div", { className: "mb-4 rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-auto text-center", children: item }, y)) })
      ] })
    ] })
  ] });
}
function meta({}) {
  return [{
    title: "Lisdanay Hernandez - Projects"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
const projects = withComponentProps(function Projects() {
  const projects2 = PROJECTS.map((el, i) => {
    return /* @__PURE__ */ jsx(ProjectCard, {
      data: el
    }, i);
  });
  return /* @__PURE__ */ jsxs("div", {
    className: "max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-4 lg:mx-auto my-32",
    children: [/* @__PURE__ */ jsx("h1", {
      className: "mb-2 text-slate-800 text-xl font-semibold dark:text-gray-200",
      children: "Projects"
    }), projects2]
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: projects,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-BfzIibfD.js", "imports": ["/assets/chunk-K6CSEXPM-BhJW2lBu.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-DsnAqNV_.js", "imports": ["/assets/chunk-K6CSEXPM-BhJW2lBu.js", "/assets/with-props-Dl1UVF2D.js"], "css": ["/assets/root-CdUlT2Pd.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/home-Cl1Sx-4q.js", "imports": ["/assets/with-props-Dl1UVF2D.js", "/assets/chunk-K6CSEXPM-BhJW2lBu.js", "/assets/data-BRPjnLRI.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "routes/projects": { "id": "routes/projects", "parentId": "root", "path": "/projects", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/projects-BjoEHWzu.js", "imports": ["/assets/with-props-Dl1UVF2D.js", "/assets/chunk-K6CSEXPM-BhJW2lBu.js", "/assets/data-BRPjnLRI.js"], "css": ["/assets/projects-D-buSbsU.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-f6eaf75d.js", "version": "f6eaf75d" };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/projects": {
    id: "routes/projects",
    parentId: "root",
    path: "/projects",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routes,
  ssr
};
