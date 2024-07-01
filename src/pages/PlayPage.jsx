import {
  onPlayerJoin,
  insertCoin,
  isHost,
  myPlayer,
  useMultiplayerState,
  usePlayersList,
  getState,
  setState,
} from "playroomkit";
import { useEffect, useState } from "react";
import ChatMessage from "../components/ChatMessage";

function PlayPage() {
  const [messages, setMessages] = useMultiplayerState("message", []);
  const [input, setInput] = useState("");
//   const [score, setScore] = useState(0);

  const insults = [
    "Thou spongy hasty-witted codpiece",
    "A churlish ill-nurtured clotpole art thou.",
    "Qualling ill-breeding puttock, begone!",
    "Thou art a dankish hasty-witted miscreant.",
    "Frothy weather-bitten pignut thou be.",
    "What a pribbling common-kissing wagtail thou art.",
    "Rogue, thou folly-fallen knave!",
    "A beslubbering beef-witted miscreant is he.",
    "Thou art naught but a warped moldwarp.",
    "Unmuzzled dread-bolted harpy, away with thee!",
  ];

  const hints = ["no one asked", "dont care", "womp", "xD", "smooth brain", "didnt ask", "rekt", "stupid", "dumb", "braincell"]

  const avatars = [
    "Angry-Man.jpg",
    "pfp-1.jfif",
    "pfp-2.png",
    "pfp-3.png",
    "pfp-4.jfif",
    "pfp-5.jfif",
  ];

  const defaultPlayerStates = { score: 0 };

  const maxPlayersPerRoom = 2;

  const lobbyLaunch = async () => {
    await insertCoin({
      avatars,
      maxPlayersPerRoom,
    });

    myPlayer().setState("score", 0);
  };

  useEffect(() => {
    lobbyLaunch();
  });

  const players = usePlayersList();
  const thisPlayer = myPlayer();

  


  const handleSendMessage = () => {
    if (input) {

      if (input.length <= 3) {

      
      }

    if (input) {

        
    }

      const messageDetails = {
        message: input,
        name: myPlayer().getProfile().name,
        avatar: myPlayer().getProfile().photo,
      };
      setMessages([...messages, messageDetails]);
      setInput("");
    }
  };

  return (
    <>
      <div className="flex font-mono text-slate-100 bg-neutral-950 justify-center items-center h-screen w-screen flex-col">
        <div className="flex justify-around w-full p-4">

            <img className="rounded-full w-16 h-16 box-border" src="" alt="player-avatar" />
            <div className="flex p-4 text-2xl h-16"> Score: {} </div>
            <img className="rounded-full w-16 h-16 box-border scale-x-[-1]" src="" alt="player-avatar" />
        </div>
        <div className="flex flex-col h-4/5 w-4/5 p-4 border-2 border-slate-100 rounded-2xl">
          {messages.slice(-8).map((msg, i) => {
            // const player = players.find(p=>p.id===msg.user.id);
            // if (!player)return null;
            // return msg.message.input
            return (
              <ChatMessage
                avatar={msg.avatar}
                name={msg.name}
                message={msg.message}
                alignment={myPlayer().getProfile().name === msg.name ? 1 : 0}
              />
            );
          })}
        </div>

        <input
          value={input}
          type="text"
          placeholder="Write your message here"
          className="w-1/2 p-4 mb-8  border-2 border-slate-100 rounded-xl absolute bottom-0 bg-neutral-950"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
      </div>
    </>
  );
}

export default PlayPage;
