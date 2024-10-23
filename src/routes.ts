import { Elysia, type StatusMap } from "elysia";
import type { HTTPHeaders } from "elysia/types";
import { aboutUsPage } from "pages/about_us";
import { faqPage } from "pages/faq_page";
import { mainPage } from "pages/main_page";
import { openingHoursPage } from "pages/opening_hours_page";
import { prislistaPage } from "pages/prislist_page";
import { tavlingarPage } from "pages/tavlingar_page";
import type { Page } from "sig_template";
import { SigMainTemplate } from "templates/sig_main_template";

const pages: Record<string, Page> = {
  main: mainPage,
  prislista: prislistaPage,
  opening_hours: openingHoursPage,
  about_us: aboutUsPage,
  tavlingar: tavlingarPage,
  faq: faqPage,
};

const routes = new Elysia()
  // Home route
  .get("/", ({ set }) => renderPage("main", set))
  .get("/:path", ({ params, set }) => {
    const path = params.path;
    return renderPage(path, set);
  });

function renderPage(
  path: string,
  set: {
    headers: HTTPHeaders;
    status?: number | keyof StatusMap;
    redirect?: string;
    cookie?: unknown;
  }
) {
  const template = new SigMainTemplate();

  let page: Page;
  if (!pages[path]) {
    page = mainPage;
  } else {
    page = pages[path];
  }

  if (page) {
    set.headers["Content-Security-Policy"] =
      "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
      "font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; " +
      "frame-src 'self'; object-src 'none'; " +
      "base-uri 'self'; form-action 'self'; " +
      "frame-ancestors 'none'; upgrade-insecure-requests;";
    set.headers["Permissions-Policy"] =
      "accelerometer=(), autoplay=(self), camera=(), display-capture=(), " +
      "encrypted-media=(), fullscreen=(self), geolocation=(), gyroscope=(), " +
      "keyboard-map=(self), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), " +
      "publickey-credentials-get=(), screen-wake-lock=(), sync-xhr=(self), usb=(), web-share=()";

    set.headers["Content-Type"] = "text/html";
    return template.renderPage(page);
  } else {
    return "Page not found";
  }
}

export default routes;
