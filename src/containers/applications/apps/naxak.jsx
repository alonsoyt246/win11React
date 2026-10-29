import React from "react";
import { useSelector } from "react-redux";
import { ToolBar } from "../../../utils/general";

const NAXAK_URL = "https://naxakpoints.base44.app/login";

export const NaxakApp = () => {
  const wnapp = useSelector((state) => state.apps.naxak);

  if (!wnapp) return null;

  return (
    <div
      className="naxakApp floatTab dpShad darkWindow"
      data-size={wnapp.size}
      id={wnapp.icon + "App"}
      data-max={wnapp.max}
      style={{
        ...(wnapp.size == "cstm" ? wnapp.dim : null),
        zIndex: wnapp.z,
      }}
      data-hide={wnapp.hide}
    >
      <ToolBar
        app={wnapp.action}
        icon={wnapp.icon}
        size={wnapp.size}
        name={wnapp.name}
        invert
        noinvert
      />
      <div className="windowScreen flex flex-col" data-dock="true">
        <div className="restWindow flex-grow flex flex-col">
          <div className="flex-grow overflow-hidden">
            <iframe
              src={NAXAK_URL}
              title={wnapp.name}
              className="w-full h-full"
              frameBorder="0"
              allow="camera;microphone;clipboard-write;fullscreen"
            ></iframe>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "8px",
              padding: "6px 10px",
              fontSize: "11px",
              background: "rgba(0,0,0,0.55)",
              color: "#fff",
            }}
          >
            <span style={{ opacity: 0.8 }}>
              Si la app no carga aquí es porque el sitio bloquea ser embebido.
            </span>
            <a
              href={NAXAK_URL}
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#8ecbff",
                textDecoration: "underline",
                whiteSpace: "nowrap",
              }}
            >
              Abrir en pestaña nueva
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
