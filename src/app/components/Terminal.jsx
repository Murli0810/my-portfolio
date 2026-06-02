"use client";
import { useState, useRef, useEffect } from "react";

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "output", text: "Welcome to MurliOS v1.0.0", isWelcome: true },
    {
      type: "output",
      text: "Type 'help' to see a list of available commands.",
      isWelcome: true,
    },
  ]);

  const containerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const [mode, setMode] = useState("normal");
  const [gameState, setGameState] = useState({});

  const handleCommand = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim().toLowerCase();
    if (!trimmedInput) return;

    const newHistory = [...history, { type: "input", text: trimmedInput }];

    if (mode === "playing_guess") {
      const userGuess = parseInt(trimmedInput);
      if (isNaN(userGuess)) {
        newHistory.push({
          type: "output",
          text: "Please enter a valid number or type 'quit'.",
        });
      } else if (trimmedInput === "quit") {
        newHistory.push({ type: "output", text: "Game exited." });
        setMode("normal");
      } else if (userGuess === gameState.target) {
        newHistory.push({
          type: "output",
          text: `🎉 Correct! The number was ${gameState.target}. Game over.`,
        });
        setMode("normal");
      } else {
        const hint = userGuess < gameState.target ? "Too low!" : "Too high!";
        newHistory.push({
          type: "output",
          text: `${hint} Try again or type 'quit'.`,
        });
      }
      setHistory(newHistory);
      setInput("");
      return;
    }

    if (mode === "playing_rps") {
      const choices = ["rock", "paper", "scissors"];
      if (trimmedInput === "quit") {
        newHistory.push({ type: "output", text: "Game exited." });
        setMode("normal");
      } else if (!choices.includes(trimmedInput)) {
        newHistory.push({
          type: "output",
          text: "Invalid choice! Type 'rock', 'paper', 'scissors', or 'quit'.",
        });
      } else {
        const botChoice = choices[Math.floor(Math.random() * 3)];
        let result = "";
        if (trimmedInput === botChoice) result = "It's a tie! 🤝";
        else if (
          (trimmedInput === "rock" && botChoice === "scissors") ||
          (trimmedInput === "paper" && botChoice === "rock") ||
          (trimmedInput === "scissors" && botChoice === "paper")
        ) {
          result = "You win! 🎉";
        } else {
          result = "You lose! 🤖";
        }
        newHistory.push({
          type: "output",
          text: `You chose: ${trimmedInput}\nMurliOS chose: ${botChoice}\n${result}\n\nPlay again or type 'quit'.`,
        });
      }
      setHistory(newHistory);
      setInput("");
      return;
    }

    const sendSecretAlertNotification = async () => {
      try {
        const response = await fetch("/api/alert", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message:
              "Someone typed the `secret` command on your portfolio terminal!",
          }),
        });

        if (!response.ok) {
          console.error("Failed to send alert:", response.statusText);
        }
      } catch (error) {
        console.error("Failed to send alert:", error);
      }
    };

    switch (trimmedInput) {
      case "help":
        newHistory.push({
          type: "output",
          text: "Available commands: whoami | skills | projects | games | secret |clear",
        });
        break;
      case "whoami":
        newHistory.push({
          type: "output",
          text: "1st year Computer Science & Engineering student at RVSCET. Passionate about building full-stack web applications and scalable llm systems.",
        });
        break;
      case "skills":
        newHistory.push({
          type: "output",
          text: "Languages & Frameworks: JavaScript, Next.js, React, Node.js, Express, MongoDB, Tailwind CSS, C++ and many more.",
        });
        break;
      case "projects":
        newHistory.push({
          type: "output",
          text: "• BOB (Built on Basics) - Inventory & resource roadmap platform.\n• Visual Resource Discord Bot - Gemini API integration tool.\n• AISTRA- Your AI STRAtegist - LLM-powered project planning assistant.\n• Personal Portfolio Website - Built with Next.js and Tailwind CSS.",
        });
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;

      case "games":
        newHistory.push({
          type: "output",
          text: "Available Games:\n• 'guess' - Play Guess the Number\n• 'rps' - Play Rock, Paper, Scissors",
        });
        break;

      case "rps":
        setMode("playing_rps");
        newHistory.push({
          type: "output",
          text: "🪨✂️📄 Rock, Paper, Scissors initiated! Type your choice: 'rock', 'paper', or 'scissors' (Type 'quit' to exit)",
        });
        break;

      case "guess":
        const targetNum = Math.floor(Math.random() * 20) + 1;
        setGameState({ target: targetNum });
        setMode("playing_guess");
        newHistory.push({
          type: "output",
          text: "🎯 Guess the Number initiated! I'm thinking of a number between 1 and 20. What's your guess? (Type 'quit' to exit)",
        });
        break;

      case "secret":
        newHistory.push({
          type: "output",
          text: "Nice try! This incident will be reported 🚨",
        });
        sendSecretAlertNotification();
        break;

      default:
        newHistory.push({
          type: "output",
          text: `Command not found: '${trimmedInput}'. Type 'help' for options.`,
        });
    }

    setHistory(newHistory);
    setInput("");
  };

  return (
    <div
      className="w-[50vw] bg-black text-[#00ff00] font-mono border-4 border-black rounded-3xl shadow-[8px_8px_0px_#000] overflow-hidden"
      onClick={() => inputRef.current?.focus()}>
      <div className="bg-gray-300 border-b-4 border-black px-4 py-2 flex items-center justify-between text-white select-none">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500 border border-black"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 border border-black"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 border border-black"></div>
        </div>
        <span className="text-xs font-bold tracking-wider text-zinc-900">
          root@murli:~
        </span>
        <div className="w-12"></div>
      </div>

      <div
        ref={containerRef}
        className="p-4 h-64 overflow-y-auto flex flex-col gap-1 text-sm md:text-base selection:bg-zinc-800 ">
        {history.map((line, index) => (
          <div
            key={index}
            className="whitespace-pre-wrap break-words max-w-full">
            {line.type === "input" ? (
              <div className="flex flex-wrap items-center gap-x-2">
                <span className="text-green-400 shrink-0">root@murli:~$</span>
                <span className="text-white">{line.text}</span>
              </div>
            ) : (
              <span
                className={
                  line.isWelcome ? "text-blue-400 font-bold" : "text-zinc-200"
                }>
                {line.text}
              </span>
            )}
          </div>
        ))}

        <form onSubmit={handleCommand} className="flex items-center gap-2 mt-1">
          <span className="text-green-400 shrink-0">root@murli:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-white caret-[#00ff00] p-0 m-0 focus:ring-0"
            autoFocus
            autoComplete="off"
            spellCheck="false"
          />
        </form>
      </div>
    </div>
  );
}
