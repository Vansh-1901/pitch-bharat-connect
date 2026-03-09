import Galaxy from "../components/Galaxy";

export default function Home() {
  return (
    <div style={{ position: "relative", height: "100vh", width: "100%", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 0, width: "100%", height: "100%" }}>
        <Galaxy style={{ width: "100%", height: "100%" }} />
      </div>

      <div
        style={{
          position: "absolute",
          zIndex: 1,
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          Pitch Your Startup to India's Top Investors
        </h1>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
          <button
            style={{
              padding: "12px 24px",
              background: "#6366F1",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Apply to Pitch
          </button>

          <button
            style={{
              padding: "12px 24px",
              background: "white",
              color: "black",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Explore Startups
          </button>
        </div>
      </div>
    </div>
  );
}