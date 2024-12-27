import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from './Nav.js'
import Subnav from './Subnav.js'


function LiveStreams() {
    const [users] = useState([
        {
            "gameName": "Se\u00f1or Bigotes",
            "tagLine": "BTOQ",
            "participantName": "Betomin",
            "isStreamer": true,
            "twitchLink": "https:\/\/www.twitch.tv\/Betomin"
        },
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
            gameName: "Trozo de caca",
            tagLine: "BTOQ",
            participantName: "Zh4ifer",
            isStreamer: true,
            twitchLink: "http://twitch.tv/zh4ifer"
        },
        {
            gameName: "Frijochiquito",
            tagLine: "BTOQ",
            participantName: "Frijolitoo",
            isStreamer: false,
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
            "twitchLink": "https:/www.twitch.tv/nazaacc"
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
            "twitchLink": "https://www.twitch.tv/cherriw_"
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
            "twitchLink": "https:/www.twitch.tv/eliian__"
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
            "participantName": "HukoPP",
            "isStreamer": false,
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
            "twitchLink": "https://www.twitch.tv/NsbTotty"
        },
        {
            "gameName": "Nagi Seishiro",
            "tagLine": "BTOQ",
            "participantName": "Jardazlol",
            "isStreamer": true,
            "twitchLink": "https://www.twitch.tv/twitch.tv/jardazlol"
        },
        {
            "gameName": "mondongo",
            "tagLine": "BTOQ",
            "participantName": "horizon_von",
            "isStreamer": true,
            "twitchLink": "https://www.twitch.tv/horizon_von"
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
            "participantName": "DiosHikibi",
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
