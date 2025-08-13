'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  const [session, setSession] = useState<any>(null);

  const [chatLogs, setChatLogs] = useState<any[]>([]);
  const [kb, setKb] = useState<any[]>([]);

  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        router.push('/admin/login');
      } else {
        setSession(data.session);
        fetchChatLogs();
        fetchKnowledgeBase();
      }
    });
  }, []);

  async function fetchChatLogs() {
    const { data, error } = await supabase
      .from('chat_logs')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error) setChatLogs(data || []);
  }

  async function fetchKnowledgeBase() {
    const { data, error } = await supabase
      .from('knowledge_base')
      .select('*')
      .order('inserted_at', { ascending: false });

    if (!error) setKb(data || []);
  }

  async function addEntry() {
    if (!newQuestion.trim() || !newAnswer.trim()) return;
    const { error } = await supabase
      .from('knowledge_base')
      .insert([{ question: newQuestion.trim(), answer: newAnswer.trim() }]);

    if (!error) {
      setNewQuestion('');
      setNewAnswer('');
      fetchKnowledgeBase();
    }
  }

  async function deleteEntry(id: number) {
    const { error } = await supabase.from('knowledge_base').delete().eq('id', id);
    if (!error) fetchKnowledgeBase();
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push('/admin/login');
  }

  return (
    <div
      style={{
        maxWidth: 960,
        margin: '20px auto',
        padding: 20,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: '#333',
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      }}
    >
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 40,
        }}
      >
        <h1 style={{ margin: 0, color: '#0070f3' }}>Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: '#e00',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: 5,
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#c00')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#e00')}
        >
          Logout
        </button>
      </header>

      {/* Chat Logs Section */}
      <section>
        <h2 style={{ color: '#0070f3' }}>Chat Logs</h2>
        <div
          style={{
            maxHeight: 320,
            overflowY: 'auto',
            border: '1px solid #ddd',
            borderRadius: 6,
            backgroundColor: 'white',
          }}
        >
          <table
            style={{ width: '100%', borderCollapse: 'collapse' }}
            aria-label="Chat logs table"
          >
            <thead style={{ backgroundColor: '#0070f3', color: 'white' }}>
              <tr>
                <th style={{ padding: 10, textAlign: 'left' }}>User Message</th>
                <th style={{ padding: 10, textAlign: 'left' }}>Bot Response</th>
                <th style={{ padding: 10, textAlign: 'left', width: 160 }}>Time</th>
              </tr>
            </thead>
            <tbody>
              {chatLogs.length === 0 && (
                <tr>
                  <td colSpan={3} style={{ padding: 10, textAlign: 'center' }}>
                    No chat logs yet.
                  </td>
                </tr>
              )}
              {chatLogs.map((log) => (
                <tr
                  key={log.id}
                  style={{
                    borderBottom: '1px solid #eee',
                    transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = '#f0f8ff')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = 'transparent')
                  }
                >
                  <td style={{ padding: 10 }}>{log.user_message}</td>
                  <td style={{ padding: 10 }}>{log.bot_response}</td>
                  <td style={{ padding: 10 }}>
                    {new Date(log.created_at).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Knowledge Base Section */}
      <section style={{ marginTop: 40 }}>
        <h2 style={{ color: '#0070f3' }}>Knowledge Base</h2>

        <div
          style={{
            display: 'flex',
            gap: 10,
            marginBottom: 20,
            flexWrap: 'wrap',
          }}
        >
          <input
            type="text"
            placeholder="Question"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            style={{
              flex: '1 1 40%',
              padding: 10,
              borderRadius: 5,
              border: '1px solid #ccc',
              fontSize: 16,
            }}
          />
          <input
            type="text"
            placeholder="Answer"
            value={newAnswer}
            onChange={(e) => setNewAnswer(e.target.value)}
            style={{
              flex: '1 1 40%',
              padding: 10,
              borderRadius: 5,
              border: '1px solid #ccc',
              fontSize: 16,
            }}
          />
          <button
            onClick={addEntry}
            style={{
              backgroundColor: '#0070f3',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: 5,
              cursor: 'pointer',
              fontWeight: 'bold',
              flex: '1 1 15%',
              minWidth: 120,
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#005bb5')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0070f3')}
          >
            Add
          </button>
        </div>

        <div
          style={{
            maxHeight: 320,
            overflowY: 'auto',
            border: '1px solid #ddd',
            borderRadius: 6,
            backgroundColor: 'white',
          }}
        >
          <table
            style={{ width: '100%', borderCollapse: 'collapse' }}
            aria-label="Knowledge base table"
          >
            <thead style={{ backgroundColor: '#0070f3', color: 'white' }}>
              <tr>
                <th style={{ padding: 10, textAlign: 'left' }}>Question</th>
                <th style={{ padding: 10, textAlign: 'left' }}>Answer</th>
                <th style={{ padding: 10, width: 100 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {kb.length === 0 && (
                <tr>
                  <td colSpan={3} style={{ padding: 10, textAlign: 'center' }}>
                    No knowledge base entries yet.
                  </td>
                </tr>
              )}
              {kb.map((item) => (
                <tr
                  key={item.id}
                  style={{
                    borderBottom: '1px solid #eee',
                    transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = '#f0f8ff')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = 'transparent')
                  }
                >
                  <td style={{ padding: 10 }}>{item.question}</td>
                  <td style={{ padding: 10 }}>{item.answer}</td>
                  <td style={{ padding: 10, textAlign: 'center' }}>
                    <button
                      onClick={() => deleteEntry(item.id)}
                      style={{
                        backgroundColor: '#e00',
                        color: 'white',
                        border: 'none',
                        padding: '6px 12px',
                        borderRadius: 5,
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        transition: 'background-color 0.3s ease',
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = '#c00')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = '#e00')
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
