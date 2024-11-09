import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Misc
import Layout from "./components/Layout.tsx";
import Home from "./pages/Home.tsx";
import Spillespill from "./pages/spillespill.tsx";
import Kilder from "./pages/kilder.tsx";
import Om from "./pages/om.tsx";

// Hensikter
import Hensikter from "./pages/Hensikter/Hensikter.tsx";
import Bilder from "./pages/Hensikter/Bilder.tsx";
import Brukernavn from "./pages/Hensikter/Brukernavn.tsx";
import Lureri from "./pages/Hensikter/Lureri.tsx";

// Svindel
import SvindelTeknikker from "./pages/Svindelteknikker/Svindelteknikker.tsx";
import Phishing from "./pages/Svindelteknikker/Phishing.tsx";
import Pharming from "./pages/Svindelteknikker/Pharming.tsx";
import SocialEngineering from "./pages/Svindelteknikker/SocialEngineering.tsx";

// Lenker
import Lenker from "./pages/Lenker/Lenker.tsx";
import FarligeLenker from "./pages/Lenker/farlige.tsx";
import UkjenteLenker from "./pages/Lenker/ukjent.tsx";
import FalskeNettsider from "./pages/Lenker/falskenettsider.tsx";
import SpillLenker from "./pages/Lenker/spill.tsx";
import HvaKanSkje from "./pages/Lenker/hvakanskje.tsx";
import FeilLenker from "./pages/Lenker/klikkerfeil.tsx";
import GratisLenker from "./pages/Lenker/gratis.tsx";

// Passord
import Passord from "./pages/Passord/passord.tsx";
import PassordViktig from "./pages/Passord/hvorfor_viktig.tsx";
import PassordEnkle from "./pages/Passord/ikke_enkle.tsx";
import SterkePassord from "./pages/Passord/sterke_passord.tsx";
import PassordHuske from "./pages/Passord/hvordan_huske.tsx";
import ToFaktor from "./pages/Passord/tofaktor.tsx";
import PassordMistet from "./pages/Passord/hva_gjør_du.tsx";
import PassordTrygge from "./pages/Passord/trygge.tsx";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bulma/css/bulma.min.css";

import "typeface-poppins"; // Import Poppins
import "@fontsource/opendyslexic"; // Import OpenDyslexic

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout will wrap around the routes
    children: [
      { path: "/", element: <Home /> },
      { path: "/kilder", element: <Kilder /> },
      { path: "/om", element: <Om /> },
      { path: "/spillespill", element: <Spillespill /> },

      {
        path: "/folk-med-vonde-hensikter",
        children: [
          { path: "", element: <Hensikter /> },
          { path: "lureri", element: <Lureri /> },
          { path: "brukernavn", element: <Brukernavn /> },
          { path: "bilder", element: <Bilder /> },
        ],
      },
      {
        path: "/svindelteknikker",
        children: [
          { path: "", element: <SvindelTeknikker /> },
          { path: "pharming", element: <Pharming /> },
          { path: "phishing", element: <Phishing /> },
          { path: "social-engineering", element: <SocialEngineering /> },
        ],
      },
      {
        path: "/lenker",
        children: [
          { path: "", element: <Lenker /> },
          { path: "farlige-lenker", element: <FarligeLenker /> },
          { path: "ukjente-lenker", element: <UkjenteLenker /> },
          { path: "falske-nettsider", element: <FalskeNettsider /> },
          { path: "spill-lenker", element: <SpillLenker /> },
          { path: "hva-kan-skje", element: <HvaKanSkje /> },
          { path: "feil-lenke", element: <FeilLenker /> },
          { path: "gratis-lenke", element: <GratisLenker /> },
        ],
      },
      {
        path: "/passord",
        children: [
          { path: "", element: <Passord /> },
          { path: "viktig", element: <PassordViktig /> },
          { path: "enkle", element: <PassordEnkle /> },
          { path: "sterke", element: <SterkePassord /> },
          { path: "huske", element: <PassordHuske /> },
          { path: "tofaktor", element: <ToFaktor /> },
          { path: "mistet", element: <PassordMistet /> },
          { path: "trygge", element: <PassordTrygge /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
