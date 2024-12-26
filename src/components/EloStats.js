import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from './Nav.js'
import Subnav from './Subnav.js'
import Spinner from './Spinner.js'

function EloStats() {
    const [users] = useState([
        {
            gameName: "Elian Payne",
            tagLine: "BTOQ",
            participantName: "Reshito",
            isStreamer: true,
            twitchLink: "https:\/\/www.twitch.tv\/reshito"
        },
        {
            gameName: "Asstral",
            tagLine: "BTOQ",
            participantName: "BTOmmyn",
            isStreamer: true,
            twitchLink: "https:\/\/www.twitch.tv\/BTOmmyn"
        },
        {
            "gameName": "ElVenao",
            "tagLine": "BTOQ",
            "participantName": "sherdeath",
            "isStreamer": true,
            "twitchLink": "https:\/\/www.twitch.tv\/sherdeath"
        },
        {
            "gameName": "Shebii",
            "tagLine": "BTOQ",
            "participantName": "biiann_",
            "isStreamer": true,
            "twitchLink": "https:\/\/www.twitch.tv\/biiann_"
        },
        {
            "gameName": "tetas de jamon",
            "tagLine": "btoq",
            "participantName": "1lautahz",
            "isStreamer": false,
            "twitchLink": null
        },
        {
            "gameName": "Sendo",
            "tagLine": "BTOQ",
            "participantName": "tryhqrdsito",
            "isStreamer": true,
            "twitchLink": "https:\/\/www.twitch.tv\/tryhqrdsito"
        },
        {
            "gameName": "Katamerquero",
            "tagLine": "BTOQ",
            "participantName": "Nazaacc",
            "isStreamer": true,
            "twitchLink": "https:\/\/www.twitch.tv\/www.twitch.tv\/nazaacc"
        },
        {
            "gameName": "333",
            "tagLine": "BTOQ",
            "participantName": "ayelencitapp",
            "isStreamer": true,
            "twitchLink": "https:\/\/www.twitch.tv\/ayelencitapp"
        },
        {
            "gameName": "soul",
            "tagLine": "BTOQ",
            "participantName": "Cryntzz",
            "isStreamer": false,
            "twitchLink": null
        },
        {
            "gameName": "ilostcustody69",
            "tagLine": "BTOQ",
            "participantName": "permabanpac_",
            "isStreamer": false,
            "twitchLink": null
        },
        {
            "gameName": "BarcoBasurero",
            "tagLine": "BTOQ",
            "participantName": "Relty69",
            "isStreamer": false,
            "twitchLink": null
        },
        {
            "gameName": "ElKaisero",
            "tagLine": "BTOQ",
            "participantName": "lcloud_darkl",
            "isStreamer": false,
            "twitchLink": null
        },
        {
            "gameName": "minun",
            "tagLine": "btoq",
            "participantName": "Cherriw_",
            "isStreamer": true,
            "twitchLink": "https:\/\/www.twitch.tv\/twitch.tv\/cherriw_"
        },
        {
            "gameName": "Markuz30",
            "tagLine": "BTOQ",
            "participantName": "markuz30",
            "isStreamer": true,
            "twitchLink": "https:\/\/www.twitch.tv\/markuz30"
        },
        {
            "gameName": "kenn",
            "tagLine": "BTOQ",
            "participantName": "kenn01_",
            "isStreamer": true,
            "twitchLink": "https:\/\/www.twitch.tv\/kenn01_"
        },
        {
            "gameName": "ACM1PTLOKITASAPE",
            "tagLine": "BTOQ",
            "participantName": "hanzo_hasashi_goh",
            "isStreamer": true,
            "twitchLink": "https:\/\/www.twitch.tv\/hanzo_hasashi_goh"
        },
        {
            "gameName": "Biishe",
            "tagLine": "BTOQ",
            "participantName": "biiash7_",
            "isStreamer": true,
            "twitchLink": "https:\/\/www.twitch.tv\/biiash7_"
        },
        {
            "gameName": "Nakroth",
            "tagLine": "BTOQ",
            "participantName": "Redsneyder",
            "isStreamer": false,
            "twitchLink": null
        },
        {
            "gameName": "plusle",
            "tagLine": "BTOQ",
            "participantName": "sshirow_",
            "isStreamer": false,
            "twitchLink": null
        },
        {
            "gameName": "Fan de Sebaskayn",
            "tagLine": "BTOQ",
            "participantName": "twitch.tv\/luquetti777",
            "isStreamer": true,
            "twitchLink": "https:\/\/www.twitch.tv\/twitch.tv\/luquetti777"
        },
        {
            "gameName": "We Love Taylor",
            "tagLine": "BTOQ",
            "participantName": "Eliian__",
            "isStreamer": true,
            "twitchLink": "https:\/\/www.twitch.tv\/eliiiiiiiiian"
        },
        {
            "gameName": "CARREO CULONAS",
            "tagLine": "BTOQ",
            "participantName": "Nikeetto",
            "isStreamer": false,
            "twitchLink": null
        },
        {
            "gameName": "ADHD RIVEN",
            "tagLine": "BTOQ",
            "participantName": "ssjunkn0wn",
            "isStreamer": true,
            "twitchLink": "https:\/\/www.twitch.tv\/ssjunkn0wn"
        },
        {
            "gameName": "Cute Destruction",
            "tagLine": "BTOQ",
            "participantName": "Redsneyer",
            "isStreamer": true,
            "twitchLink": "https:\/\/www.twitch.tv\/bolitadehelado"
        },
        {
            "gameName": "Duck in the box",
            "tagLine": "BTOQ",
            "participantName": "reyshaquito",
            "isStreamer": false,
            "twitchLink": null
        },
        {
            "gameName": "Arves",
            "tagLine": "BTOQ",
            "participantName": "Arvespra",
            "isStreamer": true,
            "twitchLink": "https:\/\/www.twitch.tv\/Arvespra"
        },
        {
            "gameName": "Goticas al MD",
            "tagLine": "BTOQ",
            "participantName": "DaddySmar",
            "isStreamer": true,
            "twitchLink": "https:\/\/www.twitch.tv\/daddysmar"
        },
        {
            "gameName": "BTO Hikibi",
            "tagLine": "BTO",
            "participantName": "DaddySmar",
            "isStreamer": true,
            "twitchLink": "https:\/\/www.twitch.tv\/daddysmar"
        },
        {
            "gameName": "TE AMO SHECKLER",
            "tagLine": "BTOQ",
            "participantName": "exiled_bunny",
            "isStreamer": true,
            "twitchLink": "https:\/\/www.twitch.tv\/exiled_bunny"
        },
        {
            "gameName": "BTOc\u00fcm",
            "tagLine": "BTO",
            "participantName": "NsbTotty",
            "isStreamer": true,
            "twitchLink": "https:\/\/www.twitch.tv\/NsbTotty"
        },
        {
            "gameName": "Nagi Seishiro",
            "tagLine": "BTOQ",
            "participantName": "Jardazlol",
            "isStreamer": true,
            "twitchLink": "https:\/\/www.twitch.tv\/twitch.tv\/jardazlol"
        },
        {
            "gameName": "mondongo",
            "tagLine": "BTOQ",
            "participantName": "horizon_von",
            "isStreamer": true,
            "twitchLink": "https:\/\/www.twitch.tv\/twitch.tv\/horizon_von"
        },
        {
            "gameName": "El jefeee",
            "tagLine": "BTOQ",
            "participantName": "Zedalyn",
            "isStreamer": true,
            "twitchLink": "https:\/\/www.twitch.tv\/Zedalyn"
        },
        {
            "gameName": "KilluaProGamer",
            "tagLine": "BTOQ",
            "participantName": "killuagod_13",
            "isStreamer": true,
            "twitchLink": "https:\/\/www.twitch.tv\/killuagod_13"
        },
        {
            "gameName": "\u2066BetominSlayer\u2069",
            "tagLine": "\u2066BTOQ\u2069",
            "participantName": "veohukopp",
            "isStreamer": true,
            "twitchLink": "https:\/\/www.twitch.tv\/BTO_CARPincho"
        },
        {
            "gameName": "godeta",
            "tagLine": "BTOQ",
            "participantName": "lusiern4ga",
            "isStreamer": true,
            "twitchLink": "https:\/\/www.twitch.tv\/lusiern4ga"
        },
        {
            "gameName": "BamRyu",
            "tagLine": "BTOQ",
            "participantName": "lneithanl",
            "isStreamer": false,
            "twitchLink": null
        },
        {
            "gameName": "LaReichi",
            "tagLine": "BTOQ",
            "participantName": "lareich_",
            "isStreamer": false,
            "twitchLink": null
        },
        {
            "gameName": "Cerbatana wins",
            "tagLine": "BTOQ",
            "participantName": "JalkzatFPS",
            "isStreamer": true,
            "twitchLink": "https:\/\/www.twitch.tv\/JalkzatFPS"
        },
        {
            "gameName": "\u2066BTOEli\u2069",
            "tagLine": "\u2066btoq\u2069",
            "participantName": "SirTiki",
            "isStreamer": false,
            "twitchLink": null
        },
        {
            "gameName": "BTOTiki",
            "tagLine": "BTOQ",
            "participantName": "SirEeli",
            "isStreamer": false,
            "twitchLink": null
        },
        {
            "gameName": "Mean Destruction",
            "tagLine": "BTOQ",
            "participantName": "Bolitadehelado",
            "isStreamer": true,
            "twitchLink": "https:\/\/www.twitch.tv\/Bolitadehelado"
        },
        {
            "gameName": "Volg",
            "tagLine": "BTOQ",
            "participantName": "Veoulisesw_",
            "isStreamer": false,
            "twitchLink": null
        },
        {
            "gameName": "Se\u00f1or Bigotes",
            "tagLine": "BTOQ",
            "participantName": "Betomin",
            "isStreamer": true,
            "twitchLink": "https:\/\/www.twitch.tv\/Betomin"
        },
        {
            "gameName": "Brandy",
            "tagLine": "BTOQ",
            "participantName": "Karenjal_",
            "isStreamer": true,
            "twitchLink": "https:\/\/www.twitch.tv\/Karenjal_"
        },
        {
            "gameName": "M\u00efchiP\u00e4o",
            "tagLine": "BTOQ",
            "participantName": "zKuRo_OwO",
            "isStreamer": true,
            "twitchLink": "https:\/\/www.twitch.tv\/zKuRo_OwO"
        },
        {
            "gameName": "Cloudbii",
            "tagLine": "BTOQ",
            "participantName": "lcloud_darkl",
            "isStreamer": false,
            "twitchLink": null
        },
        {
            "gameName": "Exviz",
            "tagLine": "BOTQ",
            "participantName": "IExviz",
            "isStreamer": false,
            "twitchLink": null
        },
        {
            "gameName": "Va por ti Reich",
            "tagLine": "BTOQ",
            "participantName": "Betomin",
            "isStreamer": true,
            "twitchLink": "https:\/\/www.twitch.tv\/Betomin"
        },
        {
            "gameName": "The beast",
            "tagLine": "btoq",
            "participantName": "Veokarmapp",
            "isStreamer": true,
            "twitchLink": "https:\/\/www.twitch.tv\/twitch.tv\/veokarmapp"
        }
    ]);

    const [stats, setStats] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchStats = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post("https://betoqchallenge.adaptable.app/ranked/batch", {
                users,
            });
            setStats(response.data);
            console.log(response.data);
        } catch (err) {
            setError("No se pudieron cargar los datos. Intente nuevamente.");
            console.error("Error fetching stats:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStats();
    }, []);

    const combinedStats = stats.map((backendUser) => {
        const localUser = users.find(
            (user) => `${user.gameName}#${user.tagLine}` === backendUser.user
        );
        return {
            ...backendUser,
            participantName: localUser ? localUser.participantName : "N/A",
            isStreamer: localUser ? localUser.isStreamer : false,
            twitchLink: localUser ? localUser.twitchLink : "",
        };
    });

    const tierOrder = ["IRON", "BRONZE", "SILVER", "GOLD", "PLATINUM", "EMERALD", "DIAMOND", "MASTER", "GRANDMASTER", "CHALLENGER"];
    const rankOrder = { "I": 1, "II": 2, "III": 3, "IV": 4 };
    
    const sortedStats = combinedStats.sort((a, b) => {
        const soloA = a.data?.find((entry) => entry.queueType === "RANKED_SOLO_5x5") || {};
        const soloB = b.data?.find((entry) => entry.queueType === "RANKED_SOLO_5x5") || {};
    
        const tierA = soloA.tier || "UNRANKED";
        const tierB = soloB.tier || "UNRANKED";
        const rankA = soloA.rank || "IV";
        const rankB = soloB.rank || "IV";
        const lpA = soloA.leaguePoints || 0;
        const lpB = soloB.leaguePoints || 0;
    
        // Comparar tiers
        if (tierOrder.indexOf(tierA) !== tierOrder.indexOf(tierB)) {
            return tierOrder.indexOf(tierB) - tierOrder.indexOf(tierA);
        }
    
        // Comparar rangos dentro del mismo tier
        if (rankOrder[rankA] !== rankOrder[rankB]) {
            return rankOrder[rankA] - rankOrder[rankB]; // Aquí se corrige el orden para que "I" sea más alto que "IV"
        }
    
        // Comparar LP dentro del mismo rango
        return lpB - lpA;
    });
    

    return (
        <div className="participantes-container">
            <Subnav />
            <Nav />
            <div className="participantes-banner">
                <h3>#BETOQ</h3>
                <img className="participantes-img" src="img/trofeo.png" alt="Trofeo" />
                <h3>CHALLENGE</h3>
            </div>
            {loading ? (
                <Spinner />
            ) : error ? (
                <p className="error-message">{error}</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Posición</th>
                            <th>Participante</th>
                            <th>Cuenta</th>
                            <th>Twitch</th>
                            <th>Elo</th>
                            <th>Partidas</th>
                            <th>Ganadas</th>
                            <th>Perdidas</th>
                            <th>Winrate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedStats.map((user, index) => {
                            const soloRankedStats = user.data?.find((entry) => entry.queueType === "RANKED_SOLO_5x5");

                            const wins = soloRankedStats?.wins || 0;
                            const losses = soloRankedStats?.losses || 0;
                            const winrate = wins + losses > 0 ? ((wins / (wins + losses)) * 100).toFixed(2) : "0.00";

                            return (
                                <tr key={index} className="table-row">
                                    <td>{index + 1}</td>
                                    <td>{user.participantName}</td>
                                    <td>{user.user}</td>
                                    <td>
                                        {user.isStreamer ? (
                                            <a href={user.twitchLink} target="_blank" rel="noopener noreferrer">
                                                <img
                                                    src="img/12.png"
                                                    alt="Twitch"
                                                    width="32"
                                                    height="32"
                                                />
                                            </a>
                                        ) : (
                                            "No Stream"
                                        )}
                                    </td>
                                    <td>
                                        {soloRankedStats
                                            ? `${soloRankedStats.tier} ${soloRankedStats.rank} ${soloRankedStats.leaguePoints}LP`
                                            : "N/A"}
                                    </td>
                                    <td>{wins + losses}</td>
                                    <td>{wins}</td>
                                    <td>{losses}</td>
                                    <td>{`${winrate}%`}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default EloStats;