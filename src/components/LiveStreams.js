import React, { useState, useEffect } from "react";
import axios from "axios";

function LiveStreams() {
    const [users] = useState([
        {
            gameName: "Asstral",
            tagLine: "BTOQ",
            participantName: "BTOmmyn",
            isStreamer: true,
            twitchLink: "https://www.twitch.tv/BTOmmyn",
        },
        {
            gameName: "Tomas Michele",
            tagLine: "BTOQ",
            participantName: "veoHukopp",
            isStreamer: false,
            twitchLink: "",
        },
        {
            gameName: "ElVenao",
            tagLine: "BTOQ",
            participantName: "sherdeath",
            isStreamer: true,
            twitchLink: "https://www.twitch.tv/sherdeath",
        },
        {
            gameName: "Shebii",
            tagLine: "BTOQ",
            participantName: "biiann_",
            isStreamer: true,
            twitchLink: "https://www.twitch.tv/biiann_",
        },
        {
            gameName: "tetas de jamon",
            tagLine: "btoq",
            participantName: "1lautahz",
            isStreamer: false,
            twitchLink: "",
        },
        {
            gameName: "Unlocker404",
            tagLine: "4684",
            participantName: "denissales",
            isStreamer: true,
            twitchLink: "https://www.twitch.tv/denissales",
        },
        {
            gameName: "Sendo",
            tagLine: "BTOQ",
            participantName: "tryhqrdsito",
            isStreamer: true,
            twitchLink: "https://www.twitch.tv/tryhqrdsito",
        },
        {
            gameName: "Katamerquero",
            tagLine: "BTOQ",
            participantName: "nazaacc",
            isStreamer: true,
            twitchLink: "https://www.twitch.tv/nazaacc",
        },
        {
            gameName: "Messi chikito",
            tagLine: "BTOQ",
            participantName: "ifranquito_",
            isStreamer: false,
            twitchLink: "",
        },
        {
            gameName: "333",
            tagLine: "BTOQ",
            participantName: "ayelencitapp",
            isStreamer: true,
            twitchLink: "https://www.twitch.tv/ayelencitapp",
        },
        {
            gameName: "soul",
            tagLine: "BTOQ",
            participantName: "Cryntzz",
            isStreamer: false,
            twitchLink: "",
        },
        {
            gameName: "ilostcustody69",
            tagLine: "BTOQ",
            participantName: "permabanpac_",
            isStreamer: false,
            twitchLink: "",
        },
        {
            gameName: "BarcoBasurero",
            tagLine: "BTOQ",
            participantName: "Relty69",
            isStreamer: false,
            twitchLink: "",
        },
        {
            gameName: "ElKÆsero",
            tagLine: "",
            participantName: "lcloud_darkl",
            isStreamer: false,
            twitchLink: "",
        },
        {
            gameName: "minun",
            tagLine: "btoq",
            participantName: "cherriw_",
            isStreamer: true,
            twitchLink: "https://www.twitch.tv/cherriw_",
        },

        
    ]);
    

    const [liveStreams, setLiveStreams] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchLiveStreams = async () => {
        setLoading(true);

        // Filtra solo los streamers
        const streamers = users.filter((user) => user.isStreamer);
        const twitchLogins = streamers.map((user) =>
            user.twitchLink.replace("https://www.twitch.tv/", "")
        );

        try {
            const responses = await Promise.all(
                twitchLogins.map((login) =>
                    axios.get(`https://api.twitch.tv/helix/streams?user_login=${login}`, {
                        headers: {
                            "Client-ID": "4buwf7q0rdhbs5a3mu2mh56j5380tl",
                            Authorization: "Bearer bp2uvizbhxyzdqlyj1364nzatv2qr9",
                        },
                    })
                )
            );

            // Filtra solo los canales en vivo
            const liveData = responses
                .map((response) => response.data.data)
                .flat()
                .filter((stream) => stream.type === "live");

            // Vincula los datos del stream con los usuarios originales
            const liveStreamers = liveData.map((stream) => {
                const user = users.find(
                    (u) =>
                        u.twitchLink === `https://www.twitch.tv/${stream.user_login}`
                );
                return {
                    ...user,
                    title: stream.title,
                    viewers: stream.viewer_count,
                };
            });

            setLiveStreams(liveStreamers);
        } catch (error) {
            console.error("Error fetching live streams:", error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLiveStreams();
    }, []);

    return (
        <div className="live-streams">
            <h1>Canales en directo</h1>
            {loading ? (
                <p>Cargando canales en vivo...</p>
            ) : liveStreams.length > 0 ? (
                <ul>
                    {liveStreams.map((stream, index) => (
                        <li key={index}>
                            <a
                                href={stream.twitchLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <iframe
                                    src={`https://player.twitch.tv/?channel=${stream.twitchLink.replace(
                                        "https://www.twitch.tv/",
                                        ""
                                    )}&parent=${window.location.hostname}`}
                                    height="300"
                                    width="500"
                                    allowFullScreen={true}
                                    autoplay={false}
                                    title={`Stream de ${stream.participantName}`}
                                />
                                <div><img src="./img/12.png"></img>{stream.participantName}</div>



                            </a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No hay canales en vivo actualmente.</p>
            )}
        </div>
    );
}

export default LiveStreams;
