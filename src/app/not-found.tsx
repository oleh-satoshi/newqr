export default function NotFound() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "24px", marginBottom: "16px" }}>
        Страница не найдена
      </h1>
      <p style={{ fontSize: "16px", color: "#666" }}>
        Запрашиваемая страница не существует.
      </p>
    </div>
  );
}
