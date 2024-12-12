import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([
    { gameName: "Elian", tagLine: "000" },
    { gameName: "Dua Lipa enjoyer", tagLine: "EsLey" },
    { gameName: "Dua Lipa enjoyer", tagLine: "1975" },
    { gameName: "JCArtillo", tagLine: "LAS" },
  ]);
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchStats = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/ranked/batch", {
        users,
      });
      setStats(response.data);
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div className="App">
      <h1>Beto SoloQ Challenge</h1>
      <h2>Participantes</h2>
      {loading ? (
        <p>Loading stats...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Queue Type</th>
              <th>Rank</th>
              <th>Wins</th>
              <th>Losses</th>
            </tr>
          </thead>
          <tbody>
  {stats.map((user, index) => {
    // Filtrar las estadísticas para solo mostrar RANKED_SOLO_5x5
    const soloRankedStats = user.data
      ? user.data.find((entry) => entry.queueType === "RANKED_SOLO_5x5")
      : null;

    return (
      <tr key={index}>
        <td>{user.user}</td>
        <td>{soloRankedStats ? soloRankedStats.queueType : "N/A"}</td>
        <td>
          {soloRankedStats
            ? `${soloRankedStats.tier} ${soloRankedStats.rank} ${soloRankedStats.leaguePoints}LP`
            : "N/A"}
        </td>
        <td>{soloRankedStats ? soloRankedStats.wins : "N/A"}</td>
        <td>{soloRankedStats ? soloRankedStats.losses : "N/A"}</td>
      </tr>
    );
  })}
</tbody>

        </table>
      )}
    </div>
  );
}

export default App;
