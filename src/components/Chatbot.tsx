"use client";

import React, { useState, useRef, useEffect } from "react";

type Message = {
  sender: "user" | "bot";
  text: string;
};

export default function Chatbot() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Hi! Ask me anything about Zemenay Tech Solutions." },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isChatOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isChatOpen]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      if (!res.ok) throw new Error("Failed to fetch response");

      const data = await res.json();
      const botMessage: Message = { sender: "bot", text: data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry, something went wrong." },
      ]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {isChatOpen && (
        <div
          className="fixed bottom-20 right-6 w-80 h-[500px] bg-white shadow-xl rounded-2xl flex flex-col z-50 ring-1 ring-indigo-300"
          aria-label="Chatbot panel"
        >
          <header className="p-4 border-b border-indigo-200 font-semibold text-indigo-700 flex justify-between items-center bg-indigo-50 rounded-t-2xl">
            Chat with us
            <button
              onClick={() => setIsChatOpen(false)}
              aria-label="Close chat"
              className="text-indigo-700 hover:text-indigo-900 transition-colors"
            >
              &#10005;
            </button>
          </header>
          <main className="flex-grow p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-400 scrollbar-track-indigo-100">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-4 flex ${
                  msg.sender === "bot" ? "justify-start" : "justify-end"
                }`}
              >
                <span
                  className={`inline-block px-4 py-2 rounded-3xl max-w-[75%] break-words whitespace-pre-wrap text-sm leading-relaxed shadow ${
                    msg.sender === "bot"
                      ? "bg-indigo-100 text-indigo-900"
                      : "bg-indigo-600 text-white"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </main>
          <footer className="p-4 border-t border-indigo-200 bg-indigo-50 rounded-b-2xl">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me about Zemenay..."
              className="w-full border border-indigo-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
              aria-label="Chat input"
            />
            <button
              onClick={sendMessage}
              className="mt-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-full font-semibold text-sm shadow-md transition transform hover:-translate-y-0.5 active:scale-95"
            >
              Send
            </button>
          </footer>
        </div>
      )}

      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        aria-label={isChatOpen ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 bg-indigo-600 hover:bg-indigo-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition shadow-indigo-500/50 hover:shadow-indigo-700/70 focus:outline-none focus:ring-2 focus:ring-indigo-500 z-50"
      >
        {isChatOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 8h10M7 12h4m1 8a9 9 0 100-18 9 9 0 000 18z"
            />
          </svg>
        )}
      </button>
    </>
  );
}
