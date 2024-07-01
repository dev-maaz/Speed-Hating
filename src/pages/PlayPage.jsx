import {
  insertCoin,
  myPlayer,
  useMultiplayerState,
  setState,
  usePlayerState,
  usePlayersList,
} from "playroomkit";
import { useEffect, useState } from "react";
import ChatMessage from "../components/ChatMessage";
import { AnimatePresence } from "framer-motion";
import PromptDisplay from "../components/PromptDisplay";


function PlayPage() {

  const [messages, setMessages] = useMultiplayerState("message", []);
  const [input, setInput] = useState("");
  const [localScore, setLocalScore] = useState(0);

  const [isLoading, setIsLoading] = useState(true);

  const insults = ["no one asked", "dont care", "womp", "xD", "smooth brain", "didnt ask", "rekt", "stupid", "dumb", "braincell", "i am intellectual", "complexities", "amateur", "sad", "wrong","hopeless", "embarassing", "infuriating"]

  const avatars = [
    "Angrygnome.jfif",
    "pfp-1.jfif",
    "pfp-2.png",
    "pfp-3.png",
    "pfp-4.jfif",
    "pfp-5.jfif",
  ];

  const maxPlayersPerRoom = 2;

  const lobbyLaunch = async () => {
    await insertCoin({
      avatars,
      maxPlayersPerRoom,
    });
    
    const player = myPlayer();
    
    setIsLoading(false);
    player && player.setState("score", 0);
  };

  useEffect(() => {
    lobbyLaunch();
  });

  try {

    var playerAvatar = myPlayer().getProfile().photo;
    
  } catch (error) {
    
    console.log(error);
  }

  const handleSendMessage = () => {
    
    if (input) {
      
        let currentInput = input;
        if (input.length < 4) {
          currentInput = "*embarassing tongue slip* 🤓";
          setLocalScore(localScore-1);
        }
        else {

          insults.forEach( (insult) => {
            input.includes(insult) && setLocalScore(localScore+1);
          })

        }

        const messageDetails = {
          message: currentInput,
          name: myPlayer().getProfile().name,
          avatar: myPlayer().getProfile().photo,
      };


        setMessages([...messages, messageDetails]);
        setInput("");
    }
  };

  if (isLoading) {
    return (
      <div className="flex font-mono text-slate-100 bg-neutral-950 justify-center items-center h-screen w-screen">
        Loading...
      </div>
    );
  }


  return (
    <>
      <div className="flex font-mono text-slate-100 bg-neutral-950 justify-center items-center h-screen w-screen flex-col">
            <div className="flex p-4 text-2xl h-16 w-full justify-center"> Score:{localScore}  </div>
            <PromptDisplay />

        <div className="flex justify-center items-center"></div>
        <div className="flex flex-col h-4/5 w-4/5 p-4 border-2 border-slate-100 rounded-2xl">
          {messages.slice(-8).map((msg, i) => {
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
