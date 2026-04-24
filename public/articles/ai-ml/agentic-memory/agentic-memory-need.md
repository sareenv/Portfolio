# Agentic Memory & Need for it

## What is Memory?

Memory is the ability of a system (whether human or artificial) to store, retain, and later retrieve information. In the context of AI agents, memory refers to the mechanism by which an agent stores prior interactions, facts, and context to inform future behaviour.

Unlike a stateless function that processes input and forgets everything, a memory-enabled agent can reference past experiences to make more intelligent, context-aware decisions.

## Why Do We Need Memory?

### Problem Statement

AI agents currently do not have their own memory and do not retain context from previous user interactions in a custom workflow. They could perform better if they were able to remember past conversations, extract important facts, and utilise relevant information at runtime, similar to how humans think.

When solving a problem, humans do not always start from scratch. Instead, they recall whether they have solved something similar in the past and reuse that knowledge as a reference. This ability to leverage prior experience is what makes memory powerful.

### Real-world Use Case: Why Memory is Important

Let's consider an example from an iOS codebase.

As an iOS developer, you may be gradually adopting newer async/await concurrency patterns. Suppose an AI agent is reviewing your code and suggests replacing completion handlers with modern async patterns.

However, there could be a valid reason for using completion or callback-based code - for instance, the need to support a legacy Objective-C class that does not support async/await.

**Without memory**, the agent evaluates the code in isolation and suggests changes based purely on best practices.

**With memory**, the agent can recall prior context (such as constraints around legacy support) and adjust its recommendations accordingly.

This is where memory becomes powerful. It allows the code review agent to reference past decisions, understand underlying constraints, and explore similar patterns before making suggestions, leading to more accurate and context-aware feedback.

## Types of Memories

AI agent memory can be broadly categorised into two types:

- **Long-term Memory**: Persistent storage of information across sessions. This includes facts, user preferences, and learned patterns that remain available indefinitely.
- **Short-term Memory**: Temporary storage used during active interactions. This is important for retaining ongoing information during interactions with the user and maintaining context between both parties.

## Subtypes of Memories

### Short-term Memory Subtypes

#### Conversational History

The chat history between the agent and the user. This allows the agent to track what has been said, avoid repeating information, and maintain coherent multi-turn dialogue.

#### Working Memory

Temporary memory required for short durations. For example, if a user asks the agent to compute `3 + 2 + 3` using an external tool, the agent needs to store intermediate results briefly. This data is no longer required once the session ends.

#### Attention Context

This helps the agent track what context the user is referring to. For instance, if the user discusses multiple topics and switches between them, the agent must retain both the conversation history and the active topic to respond effectively.

## What is System Prompt & How it is Constructed

The system prompt is the foundational instruction set provided to an AI model before any user interaction begins. It defines the agent's:

- **Role and persona**: What kind of assistant it is
- **Behavioural guidelines**: How it should respond
- **Domain knowledge**: What it knows about
- **Constraints**: What it should or should not do

A typical system prompt is constructed as a structured text block, often combining static instructions with dynamically injected context:

```
You are a helpful iOS code review assistant.
You are knowledgeable about Swift, Objective-C, and modern Apple frameworks.

Current date: {date}
User preferences: {user_preferences}
Relevant past context: {retrieved_memories}
```

The system prompt is sent as part of the initial conversation payload, before the user's first message. This makes it invisible to the user but foundational to how the agent behaves throughout the session.

## Injecting Memory into the System Prompt

Memory injection is the process of dynamically inserting relevant historical context into the system prompt at runtime. This is how agents gain access to past interactions without keeping the entire conversation history in the context window.

### How It Works

1. **Memory Storage**: During interactions, important information is extracted and stored in a memory store (e.g., a vector database or key-value store).
2. **Retrieval**: When a new session begins, relevant memories are fetched using semantic similarity search or keyword matching against the current context.
3. **Injection**: The retrieved memories are formatted and inserted into the system prompt before the LLM processes the user's message.

```
[System Prompt]
You are an iOS code review assistant.

--- Relevant Memory ---
- User prefers async/await but has legacy ObjC dependency in NetworkLayer.
- Previously discussed: avoid modifying XYZLegacyAdapter.m.
-----------------------

[User Message]
Please review this new networking function I wrote.
```

### Benefits of Memory Injection

| Benefit | Description |
|---------|-------------|
| Continuity | Agent remembers user preferences across sessions |
| Accuracy | Reduces suggestions that conflict with known constraints |
| Personalisation | Tailors responses based on user history |
| Efficiency | Avoids re-explaining context at the start of every session |

This pattern is the foundation of persistent agent memory systems and is used in production AI assistants to deliver more intelligent, context-aware interactions.
