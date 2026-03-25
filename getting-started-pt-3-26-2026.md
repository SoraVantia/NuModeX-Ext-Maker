[English](getting-started-en-3-26-2026.md) | [日本語](getting-started-ja-3-26-2026.md) | [Español](getting-started-es-3-26-2026.md) | [Français](getting-started-fr-3-26-2026.md) | [한국어](getting-started-ko-3-26-2026.md) | [中文](getting-started-zh-3-26-2026.md) | [Deutsch](getting-started-de-3-26-2026.md) | [Italiano](getting-started-it-3-26-2026.md)

# Guia de Inicio do NuModeX Ext Maker

Este guia acompanha-o na configuracao, primeira compilacao e problemas comuns com mais detalhe do que o README.

## Pre-requisitos

- Um navegador baseado em Chromium (Chrome, Edge, Brave, Whale) ou Firefox
- Uma chave API de pelo menos um fornecedor de IA na nuvem - nao necessaria se usar modelos no dispositivo
- Conhecimento basico de extensoes de navegador (util mas nao obrigatorio)

## Configuracao de Modelos na Nuvem

### 1. Instalar a extensao

**A partir de lojas de extensoes de navegador (brevemente disponivel):**
O NuModeX Ext Maker ainda nao esta disponivel em nenhuma loja de extensoes de navegador. A disponibilidade nas lojas sera anunciada em [numodex.com/numodexextmaker](https://numodex.com/numodexextmaker) e atraves de GitHub Releases.

**A partir do codigo-fonte (modo de programador):**
1. Clone ou descarregue o repositorio.
2. Abra `chrome://extensions` (ou o equivalente no seu navegador).
3. Ative o modo de programador.
4. Clique em "Carregar extensao descompactada" e selecione a pasta do navegador apropriada (`browsers/chrome`, `browsers/edge` ou `browsers/firefox`).

### 2. Obter a sua chave API

Precisa de uma chave API de pelo menos um fornecedor de IA na nuvem compativel. Visite a consola de programador ou plataforma API do seu fornecedor para gerar uma chave. A chave de cada fornecedor e guardada separadamente na extensao - pode alternar entre fornecedores livremente.

### 3. Configurar e construir

1. Aceite os Termos de Servico (aparece automaticamente no primeiro lancamento).
2. Clique no icone de Definicoes no popup da extensao.
3. Cole a sua chave API e clique em "Guardar chave".
4. Selecione um modelo de IA no menu suspenso.
5. Descreva o que pretende construir no chat.
6. Clique em "Construir Extensao" ou "Construir Site" e aguarde a geracao.
7. Reveja e edite os ficheiros gerados conforme necessario usando as ferramentas de edicao integradas.
8. Clique em "Descarregar tudo como ZIP".
9. Para extensoes: Extraia o ZIP, va a `chrome://extensions`, ative o modo de programador e clique em "Carregar extensao descompactada". Para sites: Extraia e abra `index.html` no seu navegador.

> **Outros navegadores:** As extensoes geradas sao Manifest V3 e compativeis com Edge, Brave, Whale e outros navegadores baseados em Chromium. Os passos de carregamento lateral variam consoante o navegador.

## Configuracao de Modelos no Dispositivo

Os modelos no dispositivo funcionam inteiramente no seu hardware sem necessidade de chave API ou conexao a nuvem. **Estes modelos so estao disponiveis em navegadores especificos:** Gemini Nano no Google Chrome e Phi-4 Mini no Microsoft Edge. Outros navegadores baseados em Chromium (Brave, Whale, etc.) e Firefox nao suportam atualmente IA no dispositivo atraves de APIs do navegador.

**Diferencas chave em relacao aos modelos na nuvem:**
- Os modelos no dispositivo so podem ser usados para **chat e edicao de ficheiros**, nao para compilacoes completas.
- O modelo tem de ser descarregado na primeira utilizacao (pode demorar varios minutos).
- Os requisitos de hardware sao rigorosos - verifique antes de tentar resolver problemas.

### Chrome - Gemini Nano

1. Use Chrome versao 127 ou superior (Dev ou Canary recomendado para melhores resultados).
2. Va a `chrome://flags/#optimization-guide-on-device-model` e configure como **Enabled BypassPerfRequirement**.
3. Va a `chrome://flags/#prompt-api-for-gemini-nano` e configure como **Enabled**.
4. Reinicie o Chrome.
5. Va a `chrome://on-device-internals` e verifique o estado do modelo. Se o modelo nao estiver descarregado, va a `chrome://components/`, encontre **Optimization Guide On Device Model** e clique em **Check for update**.
6. Aguarde o download do modelo. Pode demorar varios minutos. Mantenha o Chrome aberto durante o download.

### Edge - Phi-4 Mini

1. Use Edge Dev ou Canary (versao 138+). Edge 139+ inclui Phi-4 Mini por defeito.
2. Va a `edge://flags/` e procure **Prompt API for Phi mini**, configure como **Enabled**.
3. Opcionalmente, ative **Enable on device AI model debug logs** para resolucao de problemas.
4. Reinicie o Edge.
5. Va a `edge://on-device-internals` e verifique se a sua **Device performance class** e **High** ou superior.
6. O modelo e descarregado automaticamente na primeira utilizacao. Pode demorar varios minutos. Mantenha o Edge aberto durante o download.

### Requisitos de hardware

**Edge:** Windows 10/11 ou macOS 13.3+, pelo menos 20 GB de espaco livre, 5,5 GB+ de VRAM e uma ligacao a internet sem limite de dados.

**Chrome:** 22 GB de espaco livre, mais de 4 GB de VRAM (GPU) ou 16 GB+ de RAM com 4+ nucleos de CPU (modo CPU) e uma ligacao sem limite de dados.

> **Nota:** Os modelos no dispositivo so podem ser usados para chat e edicao de ficheiros. Para construir extensoes ou sites completos, selecione um modelo na nuvem.

## Compreender os modos de compilacao

O NuModeX Ext Maker tem dois modos de compilacao:

**Construir Extensao** - Gera uma extensao de navegador Manifest V3 completa com manifest.json, ficheiros de popup, scripts de conteudo e outros ficheiros necessarios.

**Construir Site** - Gera um site estatico completo com ficheiros HTML, CSS e JavaScript.

Ambos os modos usam a mesma interface de chat. A IA le todo o seu historico de conversa ao gerar, pelo que pode refinar os seus requisitos atraves de varias mensagens antes de compilar.

## Revisao dos ficheiros gerados

Apos a conclusao de uma compilacao, o painel direito da extensao apresenta os seus ficheiros gerados.

**Arvore de ficheiros** - Todos os ficheiros gerados aparecem numa lista clicavel no topo do painel direito. Clique em qualquer ficheiro para ver o seu conteudo. Os ficheiros estao organizados por nome, incluindo caminhos de subdiretorios (por exemplo, `assets/style.css`).

**Visualizador de codigo** - Ao selecionar um ficheiro, o seu conteudo aparece no visualizador de codigo abaixo da arvore de ficheiros com realce de sintaxe. O visualizador deteta automaticamente o tipo de ficheiro (JavaScript, JSON, HTML, CSS, Markdown) e aplica o realce apropriado. Pode copiar o conteudo de qualquer ficheiro para a area de transferencia usando o botao Copiar.

**Edicao manual** - Clique no botao de edicao acima do visualizador de codigo para mudar para o modo de edicao manual. O visualizador de codigo transforma-se num editor de texto onde pode fazer alteracoes diretamente a mao. Clique novamente no botao para sair do modo de edicao manual.

**Pre-visualizacao em direto** - Para ver uma pre-visualizacao visual da sua extensao ou site, clique em Mais (▾) > Pre-visualizacao. Abre-se um modal com uma pre-visualizacao em sandbox que renderiza o seu popup.html (para extensoes) ou index.html (para sites). A pre-visualizacao integra automaticamente os seus ficheiros CSS e JavaScript para que se renderizem corretamente. Note que esta e apenas uma pre-visualizacao visual - as APIs de extensoes de navegador (como chrome.tabs, chrome.storage) e recursos externos nao funcionarao na pre-visualizacao. Se o seu projeto nao tiver popup.html nem index.html, a pre-visualizacao mostrara uma mensagem informativa.

**Ver alteracoes** - Apos uma edicao por IA, clique em Ver alteracoes para ver uma comparacao antes e depois do que foi modificado. Pode alternar entre vista unificada e vista lado a lado. Se varios ficheiros foram alterados, separadores no topo permitem-lhe alternar entre eles.

## Edicao apos compilacao

Apos a sua primeira compilacao, tem varias opcoes de edicao:

**Editar Ficheiro** - Selecione um unico ficheiro e descreva as alteracoes. Ideal para correcoes direcionadas.

**Adicionar Ficheiro** - Crie um novo ficheiro e descreva o que deve conter.

**Melhorar Extensao** - Descreva alteracoes em todo o projeto. A IA pode modificar varios ficheiros de uma vez.

**Edicao Manual** - Clique diretamente no visualizador de codigo para editar codigo a mao.

**Desfazer** - Reverte a ultima edicao de IA. Apenas um nivel de desfazer esta disponivel.

## Escolher o modelo certo

Em vez de recomendar modelos especificos (que mudam frequentemente), explicamos aqui como escolher com base no que importa:

**Tamanho da janela de contexto** - Determina quanta historico de conversa e codigo o modelo pode processar de uma vez. Para extensoes simples com poucos ficheiros, uma janela de contexto pequena e suficiente. Para projetos complexos com multiplos ficheiros, escolha um modelo com uma janela de contexto maior para que possa ver todos os seus ficheiros e a conversa de uma vez.

**Limite de tokens de saida** - Determina quanto codigo o modelo pode gerar numa unica resposta. Se vir erros de analise JSON ou saida truncada, mude para um modelo com um limite de saida maior. Projetos maiores precisam de modelos que possam produzir mais tokens.

**Capacidade de raciocinio** - Alguns modelos sao melhores em logica complexa, instrucoes de varios passos e manutencao de consistencia entre ficheiros. Para extensoes simples de popup, a maioria dos modelos funciona bem. Para extensoes com scripts de conteudo, workers em segundo plano e interacoes complexas, escolha um modelo conhecido pelo seu forte raciocinio.

**Custo** - Modelos maiores e mais capazes custam mais por chamada API. Comece com um modelo mais pequeno para chat e edicoes simples, depois mude para um modelo maior quando precisar de compilar ou melhorar projetos complexos. Os custos variam consoante o modelo e o fornecedor de IA que selecionar. A SoraVantia GK nao esta afiliada a nenhum fornecedor de IA e nao controla nem recebe qualquer parte das taxas de API.

**Velocidade** - Modelos mais pequenos respondem mais rapidamente. Se esta a iterar rapidamente em pequenas alteracoes, um modelo rapido poupa tempo. Para compilacoes completas onde a qualidade importa mais do que a velocidade, um modelo maior vale a pena esperar.

| Caso de uso | O que procurar |
|----------|-----------------|
| Extensoes simples (apenas popup, scripts pequenos) | Qualquer modelo com limites de contexto e saida moderados |
| Extensoes complexas (scripts de conteudo, workers em segundo plano, multiplos ficheiros) | Janela de contexto grande, limite de saida elevado, raciocinio forte |
| Perguntas rapidas de chat e brainstorming | Qualquer modelo - a velocidade importa mais do que o tamanho da saida |
| Edicoes de ficheiro unico | Qualquer modelo, incluindo no dispositivo (gratuito, sem chave API) |
| Desenvolvimento consciente do orcamento | Modelos pequenos ou medios para chat, modelos grandes apenas para compilacoes |

Consulte a documentacao de modelos do seu fornecedor de IA para conhecer os tamanhos de janela de contexto, limites de saida e precos atuais.

## Dicas para melhores resultados

- Comece com uma descricao simples e va construindo. Descreva primeiro a funcionalidade principal, depois use Editar e Melhorar para adicionar mais funcionalidades de forma incremental.
- Use um modelo com uma janela de contexto maior para projetos complexos. Modelos maiores lidam melhor com resultados maiores do que modelos menores.
- Se vir "Nao foi possivel extrair os ficheiros da extensao", o prompt era demasiado complexo para uma geracao. Simplifique o prompt inicial e adicione funcionalidades atraves da edicao.
- Se vir um erro de analise JSON, a resposta do modelo era demasiado longa e foi cortada. Tente um prompt mais simples ou mude para um modelo com um limite de saida maior.
- Modelos na nuvem, personalizados e remotos podem todos ser usados para construir, editar e conversar. Escolha o modelo que melhor se adapta as suas necessidades e orcamento.
- Modelos no dispositivo funcionam para chat e edicao mas nao conseguem construir extensoes ou sites completos. Use um modelo na nuvem ou personalizado para construir.
- Enter para enviar uma mensagem de chat. Shift+Enter para nova linha. Ctrl/Cmd+Enter para construir uma extensao. Ctrl/Cmd+Shift+Enter para construir um site.
- Apos construir, use Editar Ficheiro para alteracoes num unico ficheiro e Melhorar Extensao para alteracoes em multiplos ficheiros.
- Importe ficheiros existentes via Mais (▾) > Importar Ficheiros para os editar com IA.

## Resolucao de problemas

**Antes de tentar resolver problemas, consulte os seguintes recursos:**
- A documentacao API do seu fornecedor de IA na nuvem para limites atuais do modelo, precos e estado do servico.
- A documentacao de programador do seu navegador para os requisitos mais recentes de IA no dispositivo e problemas conhecidos.
- A seccao [Configuracao de Modelos no Dispositivo](#configuracao-de-modelos-no-dispositivo) acima para requisitos de flags e hardware.

### "Chave API nao configurada"
Abra as Definicoes e cole a sua chave API para o fornecedor selecionado. Cada fornecedor tem a sua propria chave - certifique-se de que guardou a chave do fornecedor cujo modelo selecionou.

### "Nao foi possivel extrair os ficheiros da extensao"
A resposta da IA era demasiado complexa ou estava mal formatada. Tente:
- Simplificar o seu prompt (descreva menos funcionalidades de cada vez)
- Mudar para um modelo com um limite de saida maior
- Compilar primeiro uma versao basica, depois usar "Melhorar Extensao" para adicionar funcionalidades

### "Erro de analise JSON"
A resposta do modelo era demasiado longa e foi truncada antes que o JSON pudesse ser completado. Tente:
- Um prompt mais simples
- Um modelo com um limite de tokens de saida maior

### Modelo no dispositivo bloqueado em "A descarregar"
Este e um problema comum. Verifique:
1. **Requisitos de hardware cumpridos?** Va a `edge://on-device-internals` (Edge) ou `chrome://on-device-internals` (Chrome) e verifique a sua classe de dispositivo.
2. **Flags ativadas?** Consulte a seccao [Configuracao de Modelos no Dispositivo](#configuracao-de-modelos-no-dispositivo) acima.
3. **Espaco de armazenamento suficiente?** O Edge precisa de 20 GB livres, o Chrome precisa de 22 GB livres.
4. **Ligacao com limite de dados?** O modelo nao sera descarregado numa ligacao com limite de dados.
5. **O navegador ficou aberto?** O download para se fechar o navegador.
6. **Tente reiniciar o navegador** e aguardar 5-10 minutos.

### A extensao nao funciona apos o carregamento
- Verifique a consola do navegador (`chrome://extensions` > clique em "Erros" na sua extensao) para mensagens de erro.
- Certifique-se de que carregou a pasta correta (a que contem manifest.json).
- Tente regenerar com um prompt mais detalhado que especifique o comportamento exato.

### O modelo personalizado nao responde
- Verifique se o URL do endpoint esta correto e acessivel.
- Confirme que o servidor suporta o formato de API `/v1/chat/completions`.
- Verifique se o servidor requer uma chave API e se forneceu uma.
- Conceda a permissao de host da extensao quando solicitado.

## Atalhos de teclado

| Atalho | Acao |
|----------|--------|
| Enter | Enviar mensagem de chat |
| Shift+Enter | Nova linha no chat |
| Ctrl/Cmd+Enter | Construir Extensao |
| Ctrl/Cmd+Shift+Enter | Construir Site |

## Proximos passos

- Leia o [README](README.pt.md) para a lista completa de funcionalidades
- Consulte [THIRD-PARTY-LICENSES](THIRD-PARTY-LICENSES) para informacoes de dependencias
- Reporte erros ou solicite funcionalidades atraves de GitHub Issues
- Visite [numodex.com/numodexextmaker](https://numodex.com/numodexextmaker) para atualizacoes
