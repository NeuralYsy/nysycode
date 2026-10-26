<p align="center">
  <strong>nysycode</strong>
</p>

<p align="center">The open source coding agent by NeuralYsy.</p>

<p align="center">
  <a href="README.en.md">English</a> |
  <a href="README.md">Português (Brasil)</a>
</p>

> nysycode is an independent project based on the code of anomalyco/opencode (MIT License). It is not affiliated with, sponsored by, or endorsed by the OpenCode team. Not affiliated with NyxCode.

---

## Installation

```bash
# Install script (macOS, Linux and WSL)
curl -fsSL https://raw.githubusercontent.com/neuralysy/nysycode/main/install | bash

# Package managers
npm i -g nysycode@latest
bun add -g nysycode@latest
pnpm add -g nysycode@latest
yarn global add nysycode@latest
```

The install script defaults to `$HOME/.nysycode/bin` and respects this order:

1. `$NYSYCODE_INSTALL_DIR` — custom directory
2. `$XDG_BIN_DIR` — XDG compliant directory
3. `$HOME/bin` — if it already exists
4. `$HOME/.nysycode/bin` — default

```bash
NYSYCODE_INSTALL_DIR=/usr/local/bin curl -fsSL https://raw.githubusercontent.com/neuralysy/nysycode/main/install | bash
```

Verify the installation:

```bash
nysycode --version
```

## Getting started

```bash
cd my-project
nysycode
```

On first run, connect an LLM provider:

```bash
nysycode providers login
```

nysycode works with Anthropic, OpenAI, Google, Groq, OpenRouter, Amazon Bedrock, Azure, Ollama and any OpenAI-compatible provider. Local models are supported through `baseURL` in `nysycode.json`.

## Agents

nysycode ships with two built-in agents, switchable with the `Tab` key:

- **dev** — default agent with full project access for implementation work
- **plan** — read-only agent for analysis and planning before edits

There is also a **general** subagent for complex searches and multistep tasks, invocable with `@general` in a message.

## Configuration

nysycode is configured with a `nysycode.json` file at the project root or `~/.config/nysycode/nysycode.json` (global).

```json
{
  "$schema": "https://raw.githubusercontent.com/neuralysy/nysycode/main/nysycode.schema.json",
  "model": "anthropic/claude-sonnet-4-20250514",
  "small_model": "anthropic/claude-haiku-4-5",
  "agent": {
    "dev": {
      "model": "anthropic/claude-sonnet-4-20250514"
    },
    "plan": {
      "model": "anthropic/claude-sonnet-4-20250514"
    }
  }
}
```

See [`nysycode.example.json`](./nysycode.example.json) for a fuller example.

### Providers

```json
{
  "provider": {
    "anthropic": {
      "options": {
        "apiKey": "{env:ANTHROPIC_API_KEY}"
      }
    },
    "ollama": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "Ollama (local)",
      "options": {
        "baseURL": "http://localhost:11434/v1"
      },
      "models": {
        "qwen2.5-coder:32b": {
          "name": "Qwen 2.5 Coder 32B"
        }
      }
    }
  }
}
```

Credentials can also come from environment variables or `nysycode providers login`.

## CLI

```bash
nysycode                # open the terminal UI (TUI)
nysycode run "message"  # run a prompt without the TUI
nysycode serve          # start the HTTP server
nysycode models         # list available models
nysycode providers      # manage providers and credentials
nysycode agent          # list and manage agents
nysycode upgrade        # update nysycode
nysycode --help         # list every command
```

## Development

Requirements: [Bun](https://bun.sh) 1.3+.

```bash
bun install
bun dev
bun run --cwd packages/nysycode typecheck
```

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the full guide.

## Security

nysycode runs tools on your machine and does not provide a sandbox. Read [SECURITY.md](./SECURITY.md) before using it in sensitive environments.

## License

MIT. See [LICENSE](./LICENSE) and [NOTICE](./NOTICE).

## Building on nysycode

If you maintain a project related to nysycode and use "nysycode" as part of its name — for example `nysycode-dashboard` or `nysycode-mobile` — add a note to your README clarifying that the project is **not** maintained by NeuralYsy and is not affiliated with the nysycode team.
