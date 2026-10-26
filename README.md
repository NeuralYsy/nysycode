<p align="center">
  <strong>nysycode</strong>
</p>

<p align="center">O agente de código open source da NeuralYsy.</p>

<p align="center">
  <a href="README.en.md">English</a> |
  <a href="README.md">Português (Brasil)</a>
</p>

> nysycode é um projeto independente baseado no código do anomalyco/opencode (MIT License). Não é afiliado, patrocinado ou endossado pela equipe do OpenCode. Não afiliado ao NyxCode.

---

## Instalação

```bash
# Script de instalação (macOS, Linux e WSL)
curl -fsSL https://raw.githubusercontent.com/neuralysy/nysycode/main/install | bash

# Gerenciadores de pacotes
npm i -g nysycode@latest
bun add -g nysycode@latest
pnpm add -g nysycode@latest
yarn global add nysycode@latest
```

O script instala em `$HOME/.nysycode/bin` por padrão e respeita a seguinte ordem:

1. `$NYSYCODE_INSTALL_DIR` — diretório personalizado
2. `$XDG_BIN_DIR` — diretório compatível com XDG
3. `$HOME/bin` — se já existir
4. `$HOME/.nysycode/bin` — padrão

```bash
NYSYCODE_INSTALL_DIR=/usr/local/bin curl -fsSL https://raw.githubusercontent.com/neuralysy/nysycode/main/install | bash
```

Verifique a instalação:

```bash
nysycode --version
```

## Primeiros passos

```bash
cd meu-projeto
nysycode
```

Na primeira execução, conecte um provedor de LLM:

```bash
nysycode providers login
```

O `nysycode` funciona com Anthropic, OpenAI, Google, Groq, OpenRouter, Amazon Bedrock, Azure, Ollama e qualquer provedor compatível com a API da OpenAI. Modelos locais também são suportados via `baseURL` no `nysycode.json`.

## Agentes

O nysycode vem com dois agentes integrados, alternáveis com a tecla `Tab`:

- **dev** — agente padrão, com acesso total ao projeto para implementar mudanças
- **plan** — somente leitura, ideal para analisar código e planejar mudanças antes de editar

Também existe o subagente **general**, usado internamente para buscas e tarefas longas. Você pode chamá-lo com `@general` em uma mensagem.

## Configuração

O nysycode é configurado por um arquivo `nysycode.json` na raiz do projeto ou em `~/.config/nysycode/nysycode.json` (global).

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

Consulte [`nysycode.example.json`](./nysycode.example.json) para um exemplo completo comentado.

### Provedores

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

Credenciais também podem ser definidas por variáveis de ambiente ou pelo comando `nysycode providers login`.

## CLI

```bash
nysycode                # abre a interface no terminal (TUI)
nysycode run "mensagem" # executa um prompt sem abrir a TUI
nysycode serve          # inicia o servidor HTTP
nysycode models         # lista os modelos disponíveis
nysycode providers      # gerencia provedores e credenciais
nysycode agent          # lista e gerencia agentes
nysycode upgrade        # atualiza o nysycode
nysycode --help         # lista todos os comandos
```

## Desenvolvimento

Requisitos: [Bun](https://bun.sh) 1.3+.

```bash
bun install
bun dev
bun run --cwd packages/nysycode typecheck
```

Consulte [CONTRIBUTING.md](./CONTRIBUTING.md) para o guia completo.

## Segurança

O nysycode executa ferramentas na sua máquina e não oferece sandbox. Leia [SECURITY.md](./SECURITY.md) antes de usar em ambientes sensíveis.

## Licença

MIT. Veja [LICENSE](./LICENSE) e [NOTICE](./NOTICE).

## Projetos construídos sobre o nysycode

Se você mantém um projeto relacionado ao nysycode e usa "nysycode" no nome — por exemplo `nysycode-dashboard` ou `nysycode-mobile` — inclua no README uma nota deixando claro que o projeto **não** é mantido pela NeuralYsy e não possui afiliação com o time do nysycode.
