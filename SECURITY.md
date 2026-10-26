# Segurança

## Modelo de ameaças

### Visão geral

O nysycode é um agente de código que roda localmente na sua máquina. Ele oferece um sistema de agentes com acesso a ferramentas poderosas, incluindo execução de shell, leitura e escrita de arquivos, rede e servidores MCP.

### Sem sandbox

O nysycode **não** coloca o agente em sandbox. O sistema de permissões é um recurso de experiência do usuário para manter você ciente das ações do agente — ele pede confirmação antes de executar comandos, escrever arquivos etc. — mas não fornece isolamento de segurança.

Se você precisa de isolamento real, execute o nysycode dentro de um container Docker ou máquina virtual.

### Modo servidor

O modo servidor é opcional. Quando habilitado, defina `NYSYCODE_SERVER_PASSWORD` para exigir autenticação HTTP Basic. Sem isso, o servidor roda sem autenticação (com um aviso). Proteger o servidor é responsabilidade do usuário.

### Fora do escopo

| Categoria                              | Justificativa                                                                  |
| -------------------------------------- | ------------------------------------------------------------------------------ |
| **Acesso ao servidor quando habilitado** | Se você habilitou o modo servidor, o acesso à API é o comportamento esperado |
| **Evasão de sandbox**                  | O sistema de permissões não é um sandbox (veja acima)                          |
| **Dados enviados ao provedor de LLM**  | O tratamento é regido pelas políticas do provedor que você configurar          |
| **Comportamento de servidores MCP**    | Servidores MCP externos estão fora da nossa fronteira de confiança             |
| **Arquivos de configuração maliciosos** | O usuário controla a própria configuração                                     |

## Reportando vulnerabilidades

Não abra issues públicas para vulnerabilidades. Use a aba **Security → Report a vulnerability** em:

https://github.com/neuralysy/nysycode/security/advisories/new

Inclua:

- Versão do nysycode (`nysycode --version`)
- Sistema operacional e arquitetura
- Passos para reproduzir
- Impacto esperado

Você receberá uma resposta inicial em até 6 dias úteis. Pedimos que não divulgue o problema publicamente antes de uma correção.

## Escopo de suporte

Apenas a versão mais recente publicada em https://github.com/neuralysy/nysycode/releases recebe correções de segurança.
