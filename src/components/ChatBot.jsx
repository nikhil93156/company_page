// src/components/ChatBot.jsx
import React, { useState } from 'react';
import { FaCommentDots, FaPaperPlane } from 'react-icons/fa';

const responses = {
  'how do i sell my license': 'Simply upload your license details and we’ll get you a valuation quickly!',
  'is this safe': 'Yes, we use encrypted channels and vetted buyers to ensure safety.',
  'how long does payment take': 'Once your license is approved, you get paid within 24 hours.',
  'what types of licenses can i sell': 'You can sell most retail, OEM, and volume licenses. Contact us for specifics.',
  'how do i get paid': 'Payments are made via bank transfer, PayPal, or your preferred method.',
  'can i sell multiple licenses at once': 'Yes, you can sell multiple licenses in a single transaction.',
  'what if my license is rejected': 'If your license is rejected, we’ll explain why and help you resolve the issue.',
};

const exampleQuestions = [
  'How do I sell my license?',
  'Is this safe?',
  'How long does payment take?',
  'What types of licenses can I sell?',
  'How do I get paid?',
  'Can I sell multiple licenses at once?',
  'What if my license is rejected?',
];

const askOpenAI = async (question) => {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  if (!apiKey) {
    return "I'm an AI assistant. Please ask about selling, safety, or payment.";
  }
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: question }],
      max_tokens: 50,
    }),
  });
  const data = await res.json();
  return data.choices?.[0]?.message?.content || "Sorry, I couldn't get an answer.";
};

function normalize(text) {
  return text.toLowerCase().replace(/[?.!]/g, '').trim();
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatLog, setChatLog] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = async (input) => {
    const question = (input !== undefined ? input : userInput).trim();
    if (!question) return;
    const userMsg = normalize(question);
    setChatLog((prev) => [...prev, { from: 'user', text: question }]);
    setUserInput('');
    setLoading(true);

    let reply =
      responses[userMsg] ||
      (await new Promise((resolve) => {
        setTimeout(async () => {
          const response = await askOpenAI(question);
          resolve(response);
        }, 1000);
      }));

    setChatLog((prev) => [...prev, { from: 'bot', text: reply }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleChat}
        className="bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700"
      >
        <FaCommentDots size={20} />
      </button>

      {isOpen && (
        <div className="w-80 h-96 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded shadow-lg mt-2 flex flex-col">
          <div className="p-4 border-b dark:border-gray-700 font-bold">AI Assistant</div>
          <div className="flex-1 p-4 overflow-y-auto space-y-2 text-sm">
            {/* Show example questions at the top if chat is empty */}
            {chatLog.length === 0 && (
              <div className="mb-4">
                <div className="font-semibold mb-2">Try asking:</div>
                <div className="flex flex-col gap-2">
                  {exampleQuestions.map((q, j) => (
                    <button
                      key={j}
                      className="text-left bg-indigo-50 dark:bg-indigo-700 hover:bg-indigo-100 dark:hover:bg-indigo-600 px-3 py-2 rounded transition"
                      onClick={async () => {
                        setUserInput(q);
                        setTimeout(() => handleSend(q), 0);
                      }}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {chatLog.map((msg, i) => (
              <React.Fragment key={i}>
                <div
                  className={`p-2 rounded max-w-xs ${
                    msg.from === 'user'
                      ? 'bg-indigo-100 dark:bg-indigo-600 self-end text-right'
                      : 'bg-gray-200 dark:bg-gray-800 self-start'
                  }`}
                >
                  {msg.text}
                </div>
                {/* Show example questions after the last bot message */}
                {msg.from === 'bot' && i === chatLog.length - 1 && (
                  <div className="mb-4">
                    <div className="font-semibold mb-2">Try asking:</div>
                    <div className="flex flex-col gap-2">
                      {exampleQuestions.map((q, j) => (
                        <button
                          key={j}
                          className="text-left bg-indigo-50 dark:bg-indigo-700 hover:bg-indigo-100 dark:hover:bg-indigo-600 px-3 py-2 rounded transition"
                          onClick={async () => {
                            setUserInput(q);
                            setTimeout(() => handleSend(q), 0);
                          }}
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
            {loading && (
              <div className="p-2 rounded max-w-xs bg-gray-200 dark:bg-gray-800 self-start">
                Typing...
              </div>
            )}
          </div>
          <div className="p-3 border-t dark:border-gray-700 flex">
            <input
              type="text"
              placeholder="Ask a question..."
              className="flex-1 p-2 border rounded-l dark:bg-gray-800 dark:border-gray-700"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              disabled={loading}
            />
            <button
              onClick={handleSend}
              className="bg-indigo-600 text-white px-3 rounded-r hover:bg-indigo-700"
              disabled={loading}
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
