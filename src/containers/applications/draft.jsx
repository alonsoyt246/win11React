import React from "react";
import { useSelector } from "react-redux";
import { ToolBar } from "../../utils/general";

export const IFrame = (props) => {
  const wnapp = useSelector((state) => state.apps[props.icon]);
  if (!wnapp) return null;
  var data = wnapp.data;

  return wnapp.hide ? null : (
    <div
      data-size={wnapp.size}
      className={
        "floatTab dpShad " +
        (data.invert != true ? "lightWindow" : "darkWindow")
      }
      data-max={wnapp.max}
      style={{
        ...(wnapp.size == "cstm" ? wnapp.dim : null),
        zIndex: wnapp.z,
      }}
      data-hide={wnapp.hide}
      id={wnapp.icon + "App"}
    >
      <ToolBar
        app={wnapp.action}
        icon={wnapp.icon}
        size={wnapp.size}
        name={wnapp.name}
        invert={data.invert == true ? true : null}
        noinvert
      />
      <div className="windowScreen flex flex-col" data-dock="true">
        <div className="restWindow flex-grow flex flex-col">
          <div className="flex-grow overflow-hidden">
            <iframe
              src={data.url}
              allow="camera;microphone"
              className="w-full h-full"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

// Ventana embebida propia: usa el contenedor nativo del proyecto (ToolBar + windowScreen)
// para que la ventana se pueda arrastrar, maximizar, minimizar y cerrar. Si el sitio
// destino no permite ser embebido, queda a mano el botón para abrirlo en pestaña nueva.
export const NaxakFrame = (props) => {
  const wnapp = useSelector((state) => state.apps[props.icon]);
  if (!wnapp) return null;
  var data = wnapp.data;

  return wnapp.hide ? null : (
    <div
      data-size={wnapp.size}
      className={
        "floatTab dpShad " +
        (data.invert != true ? "lightWindow" : "darkWindow")
      }
      data-max={wnapp.max}
      style={{
        ...(wnapp.size == "cstm" ? wnapp.dim : null),
        zIndex: wnapp.z,
      }}
      data-hide={wnapp.hide}
      id={wnapp.icon + "App"}
    >
      <ToolBar
        app={wnapp.action}
        icon={wnapp.icon}
        size={wnapp.size}
        name={wnapp.name}
        invert={data.invert == true ? true : null}
        noinvert
      />
      <div className="windowScreen flex flex-col" data-dock="true">
        <div className="restWindow flex-grow flex flex-col">
          <div className="flex-grow overflow-hidden">
            <iframe
              src={data.url}
              title={wnapp.name}
              allow="camera;microphone;clipboard-write;fullscreen"
              className="w-full h-full"
              frameborder="0"
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
              Si la app no carga aquí, es porque bloquea ser embebida.
            </span>
            <a
              href={data.url}
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
