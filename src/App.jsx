import Weatherapp from "./component/Weatherapp";

const App = () => {
  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#0B3D91", // Dark Blue
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },

    heading: {
      color: "#ffffff",
      fontSize: "36px",
      letterSpacing: "2px",
      marginBottom: "20px",
    },

    card: {
      background: "rgba(255,255,255,0.1)",
      padding: "25px",
      borderRadius: "15px",
      backdropFilter: "blur(10px)",
      boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>WEATHER APP</h1>

      <div style={styles.card}>
        <Weatherapp />
      </div>
    </div>
  );
};

export default App;
