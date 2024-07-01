import React, { useState, useEffect } from 'react';

const PromptDisplay = () => {
  const prompts = [
    "Logical Arguments are very weak on the internet, try insulting your opponent",
    "Laughing after an argument can be a very effective move, it makes it more convincing",
    "Snubbing people online can be strong and nets you good internet points, it definitely improves your personality as a whole",
    "Remember its important to not feel guilty, its just the internet and its just words after all, right... ?",
    "If you're enjoying this game it probably isn't a really good sign",
    "Try to impose your intellectual superiority over people online, even if it means very little",
    "Winning doesn't mean everything, Sometimes its about sending a message!",
    "Let it slip bro don't over think it",
    "😈😈😈😈"
  ];

  const [currentPrompt, setCurrentPrompt] = useState(prompts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * prompts.length);
      setCurrentPrompt(prompts[randomIndex]);
    }, 7000); 

    return () => clearInterval(interval); 
  }, [prompts]);

  return (
    <div>
      <h1 className='text-xl p-2'>{currentPrompt}</h1>
    </div>
  );
};

export default PromptDisplay;
