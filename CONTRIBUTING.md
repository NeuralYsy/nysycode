# Contribuindo com o nysycode

Obrigado pelo interesse em contribuir! O nysycode é um projeto independente mantido pela NeuralYsy e construído sobre o código do [anomalyco/opencode](https://github.com/anomalyco/opencode) (MIT).

Antes de abrir uma contribuição, leia o [NOTICE](./NOTICE). Este projeto não é afiliado, patrocinado ou endossado pela equipe do OpenCode nem ao NyxCode.

## Como contribuir

Contribuições bem-vindas incluem:

- Correções de bugs
- Novos LSPs e formatadores
- Suporte a novos provedores de LLM
- Melhorias de desempenho
- Melhorias de documentação
- Correções específicas de plataforma

Mudanças grandes de UI ou de produto devem ser discutidas antes em uma issue.

## Desenvolvimento

Requisitos:

- [Bun](https://bun.sh) 1.3 ou superior
- Git

Instale as dependências a partir da raiz do repositório:

```bash
bun install
```

> Em Windows sem Visual Studio Build Tools, use `bun install --ignore-scripts`.

Inicie o agente em modo de desenvolvimento:

```bash
bun dev
```

Para rodar contra outro diretório:

```bash
bun dev /caminho/do/projeto
```

### Estrutura

- `packages/nysycode` — núcleo do agente, servidor HTTP e CLI/TUI
- `packages/nysycode/src/cli/cmd/tui` — interface de terminal (SolidJS + opentui)
- `packages/plugin` — tipos e utilitários do SDK de plugins
- `packages/sdk/js` — cliente TypeScript gerado
- `packages/shared` — utilitários compartilhados
- `packages/script` — scripts de release

### Comandos úteis

```bash
bun dev --help                                  # lista os comandos
bun dev serve                                   # servidor HTTP sem interface
bun dev models                                  # modelos disponíveis
bun run --cwd packages/nysycode typecheck       # checagem de tipos
bun run --cwd packages/nysycode test            # testes
```

### Gerando o SDK

Se você alterar a API do servidor, regenere o cliente:

```bash
bun ./packages/sdk/js/script/build.ts
```

### Gerando os schemas de configuração

```bash
bun packages/nysycode/script/schema.ts ./nysycode.schema.json ./nysycode.tui.schema.json
```

### Build local

```bash
./packages/nysycode/script/build.ts --single
./packages/nysycode/dist/nysycode-<plataforma>/bin/nysycode
```

## Estilo de código

Siga o [AGENTS.md](./AGENTS.md). Em resumo:

- Prefira funções pequenas e sem `else`
- Evite `try`/`catch` desnecessário
- Evite `any`
- Use APIs do Bun quando fizer sentido
- Prefira `const` e código imutável
- Não use `export namespace`

## Pull requests

- Mantenha o PR pequeno e focado
- Explique o problema e por que a mudança resolve
- Inclua passos para reproduzir e verificar
- Para mudanças de UI, anexe capturas de tela ou vídeos
- Use títulos no padrão Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `test:`)

## Licença

Ao contribuir, você concorda que sua contribuição será licenciada sob a licença MIT deste repositório.
