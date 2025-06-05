// API helper for onboarding assistant

// Create a new thread (conversation)
export async function createThread() {
  // Replace with your backend endpoint if needed
  const res = await fetch('/api/onboarding/thread', {
    method: 'POST',
  });
  if (!res.ok) throw new Error('Failed to create thread');
  return res.json();
}

// Send a message to a thread
export async function sendMessage(threadId: string, message: string) {
  const res = await fetch(`/api/onboarding/thread/${threadId}/message`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  });
  if (!res.ok) throw new Error('Failed to send message');
  return res.json();
}

// Get the latest assistant response for a thread
export async function getLatestAssistantResponse(threadId: string) {
  const res = await fetch(`/api/onboarding/thread/${threadId}/latest`, {
    method: 'GET',
  });
  if (!res.ok) throw new Error('Failed to get latest assistant response');
  return res.json();
} 