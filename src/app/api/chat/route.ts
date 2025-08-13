import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import stringSimilarity from 'string-similarity';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  const { message } = await req.json();

  if (!message || typeof message !== 'string') {
    return NextResponse.json({ reply: "Invalid request: 'message' is required" }, { status: 400 });
  }

  // 1. Fetch all Q&A from Supabase
  const { data, error } = await supabase.from('knowledge_base').select('question, answer');

  if (error || !data) {
    console.error('Supabase error:', error);
    return NextResponse.json({ reply: 'Sorry, I am having trouble accessing the knowledge base right now.' }, { status: 500 });
  }

  // 2. Extract questions array for matching
  const questions = data.map(item => item.question);

  // 3. Find best match with string-similarity
  const { bestMatch } = stringSimilarity.findBestMatch(message.toLowerCase(), questions.map(q => q.toLowerCase()));

  // 4. If good match found, respond with corresponding answer
  if (bestMatch.rating > 0.5) {
    const index = questions.findIndex(q => q.toLowerCase() === bestMatch.target);
    return NextResponse.json({ reply: data[index].answer });
  }

  // 5. Default fallback
  return NextResponse.json({ reply: "Sorry, I don't have the information on that yet." });
}
