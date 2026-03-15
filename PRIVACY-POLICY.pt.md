# Política de Privacidade

[English](PRIVACY-POLICY.md) | [日本語](PRIVACY-POLICY.ja.md) | [Español](PRIVACY-POLICY.es.md) | [Français](PRIVACY-POLICY.fr.md) | [한국어](PRIVACY-POLICY.ko.md) | [中文](PRIVACY-POLICY.zh.md) | [Deutsch](PRIVACY-POLICY.de.md) | [Português](PRIVACY-POLICY.pt.md) | [Italiano](PRIVACY-POLICY.it.md)

> **Nota:** Esta tradução é apenas para fins informativos. Em caso de qualquer discrepância entre esta tradução e a versão em inglês, a versão em inglês prevalecerá e será juridicamente vinculativa.

**NuModeX Ext Maker — Um produto da SoraVantia GK**

Data de vigência: 15 de março de 2026
Última atualização: 15 de março de 2026

Website: https://numodex.com/numodexextmaker
URL da Política de Privacidade: https://numodex.com/numodexextmaker/privacy

## 1. Introdução

Esta Política de Privacidade descreve como o NuModeX Ext Maker ("Serviço", "Extensão" ou "Software"), desenvolvido pela SoraVantia GK ("SoraVantia GK", "nós" ou "nosso"), lida com suas informações. Estamos comprometidos em proteger sua privacidade.

O NuModeX Ext Maker é uma extensão de navegador que funciona inteiramente no seu navegador. Não operamos servidores, bancos de dados ou infraestrutura em nuvem para este produto. Não coletamos, recebemos, armazenamos ou temos acesso a nenhum dos seus dados.

## 2. Informações que coletamos

**Não coletamos nenhum dado.** A SoraVantia GK não coleta, recebe, armazena ou processa nenhuma informação pessoal ou dados de uso dos usuários do NuModeX Ext Maker. Não temos servidores backend, análises, telemetria ou rastreamento de qualquer tipo.

## 3. Informações armazenadas localmente no seu dispositivo

O NuModeX Ext Maker armazena dados localmente no seu navegador usando APIs de armazenamento padrão do navegador. Esses dados nunca saem do seu dispositivo e nunca são transmitidos à SoraVantia GK ou a terceiros sob nosso controle.

### 3.1 Chrome Storage API (chrome.storage.local)

Os seguintes dados são armazenados usando a API de armazenamento integrada do Chrome:

- **Chave de API** — Sua chave de API do provedor de IA, inserida por você. Armazenada localmente e usada apenas para autenticar solicitações ao provedor de IA selecionado.
- **Status de aceitação do EULA** — Se você aceitou os Termos de Serviço e qual versão.
- **Preferências de interface** — Seu idioma selecionado e configuração de modo escuro.
- **Modelo de IA selecionado** — O último modelo de IA selecionado no menu suspenso.
- **Configuração do modelo personalizado** — A URL do endpoint do servidor de IA personalizado, o nome do modelo e a chave de API opcional, se configurado.

### 3.2 IndexedDB (via Dexie.js)

Os seguintes dados são armazenados usando IndexedDB, um banco de dados local do navegador:

- **Projetos** — Seus projetos salvos, incluindo nomes de projetos, arquivos de extensão gerados (código-fonte), histórico de conversas com a IA e carimbos de data/hora.
- **Histórico de desfazer** — Estados anteriores de arquivos para a função desfazer, armazenados por projeto.

### 3.3 Como excluir dados armazenados localmente

Você pode excluir todos os dados armazenados localmente a qualquer momento:

- Desinstalando a extensão (remove todos os dados automaticamente)
- Limpando os dados de extensão do navegador nas configurações do navegador
- Usando o botão "Excluir chave" na extensão para remover sua chave de API armazenada
- Usando o botão "Excluir" no seletor de projetos para remover projetos individuais
- Usando o botão "Recomeçar" para limpar o conteúdo do projeto atual

## 4. Informações transmitidas a terceiros

### 4.1 Provedores de API de IA

Quando você usa o NuModeX Ext Maker para gerar, editar ou conversar sobre extensões de navegador, o texto das suas instruções e o histórico de conversas são transmitidos diretamente do seu navegador para o provedor de IA selecionado. Essa transmissão ocorre através da API do provedor de IA usando sua própria chave de API.

Os provedores de IA que podem receber seus dados de instruções incluem:

- **Google** (Gemini API) — Sujeito aos Termos de Serviço da API do Google e sua Política de Privacidade
- **OpenAI** (modelos GPT) — Sujeito aos Termos de Uso da API da OpenAI e sua Política de Privacidade
- **Anthropic** (modelos Claude) — Sujeito aos Termos de Serviço da API da Anthropic e sua Política de Privacidade

**Importante:**

- A SoraVantia GK não atua como intermediária nessas transmissões. Seu navegador se comunica diretamente com os servidores do provedor de IA.
- A SoraVantia GK não tem acesso, não registra nem monitora nenhum dado que você envia aos provedores de IA.
- Sua chave de API é enviada diretamente ao provedor de IA para autenticação. A SoraVantia GK nunca recebe ou vê sua chave de API.
- Os dados enviados aos provedores de IA incluem suas instruções de texto, histórico de conversas e quaisquer imagens anexadas. Não incluem seu armazenamento de chave de API, preferências de interface ou outras configurações locais.
- Seu uso de serviços de IA de terceiros é regido por suas respectivas políticas de privacidade e termos de serviço. Recomendamos que você revise essas políticas.

### 4.2 Modelos de IA no dispositivo

Se você usar modelos de IA no dispositivo (como Gemini Nano no Chrome ou Phi-4 Mini no Edge), suas instruções são processadas inteiramente no seu dispositivo. Nenhum dado é transmitido a qualquer servidor externo para uso de modelos no dispositivo.

### 4.3 Servidores de IA personalizados / locais

Você pode configurar um endpoint de servidor de IA personalizado (como um servidor hospedado localmente em sua máquina ou rede local). Ao usar um endpoint personalizado:

- Suas instruções e histórico de conversas são enviados diretamente para o endereço do servidor que você configurou.
- A SoraVantia GK não tem conhecimento, controle ou responsabilidade sobre endpoints personalizados.
- Se você configurar um servidor local (por exemplo, executando em localhost), seus dados permanecem inteiramente em sua máquina.
- Se você configurar um servidor remoto, seus dados serão enviados para esse servidor. Você é responsável por entender as práticas de privacidade de qualquer servidor personalizado ao qual se conectar.
- A URL do endpoint personalizado, o nome do modelo e a chave de API opcional são armazenados localmente em seu navegador usando chrome.storage.local.

### 4.4 Nenhuma outra transmissão a terceiros

O NuModeX Ext Maker não transmite dados para:

- Servidores da SoraVantia GK (não temos nenhum para este produto)
- Serviços de análise (nenhum é utilizado)
- Redes de publicidade (nenhuma é utilizada)
- Plataformas de mídias sociais
- Qualquer outro terceiro não listado nas Seções 4.1 e 4.3

## 5. Cookies e rastreamento

O NuModeX Ext Maker não usa cookies, web beacons, pixels ou qualquer outra tecnologia de rastreamento. Não rastreamos sua atividade de navegação, padrões de uso ou comportamento.

## 6. Privacidade de crianças

O NuModeX Ext Maker não é direcionado a crianças menores de 16 anos. Não coletamos conscientemente nenhuma informação de crianças. Conforme declarado em nossos Termos de Serviço, os usuários devem ter pelo menos 16 anos para usar o Software. Como não coletamos nenhum dado, não há risco de coletar inadvertidamente dados de crianças.

## 7. Segurança dos dados

Como todos os dados são armazenados localmente no seu navegador e não recebemos ou armazenamos nenhum dado de usuário, a segurança dos seus dados depende de:

- A segurança do seu dispositivo e navegador
- Sua gestão das chaves de API do seu provedor de IA
- Os mecanismos de proteção de dados integrados ao seu navegador

Recomendamos:

- Excluir ou desativar sua chave de API quando não estiver em uso
- Não compartilhar seu dispositivo ou perfil de navegador com pessoas não confiáveis
- Manter seu navegador e sistema operacional atualizados

## 8. Seus direitos

### 8.1 Direitos gerais

Como a SoraVantia GK não coleta ou armazena nenhum dos seus dados, os direitos tradicionais do titular de dados (acesso, correção, exclusão, portabilidade) são exercidos diretamente no seu dispositivo:

- **Acesso** — Todos os seus dados são visíveis na interface da extensão (projetos, arquivos, histórico de conversas).
- **Exclusão** — Exclua projetos individuais, limpe sua chave de API ou desinstale a extensão para remover todos os dados.
- **Portabilidade** — Seus arquivos de extensão gerados podem ser baixados como ZIP a qualquer momento.

### 8.2 Espaço Econômico Europeu (GDPR)

Se você está no EEE, tem direitos sob o Regulamento Geral de Proteção de Dados. Como não coletamos ou processamos seus dados pessoais, esses direitos são inerentemente satisfeitos. Nenhum acordo de processamento de dados conosco é necessário porque nenhum dado é transmitido a nós.

### 8.3 Califórnia (CCPA/CPRA)

Se você é residente da Califórnia, tem direitos sob a Lei de Privacidade do Consumidor da Califórnia. Não vendemos, compartilhamos ou divulgamos informações pessoais porque não coletamos nenhuma. Não há informações pessoais para vender, compartilhar ou divulgar.

### 8.4 Japão (APPI)

A SoraVantia GK é uma empresa japonesa sujeita à Lei de Proteção de Informações Pessoais. Como não coletamos, armazenamos ou processamos dados pessoais através do NuModeX Ext Maker, nenhuma obrigação APPI surge do seu uso deste produto.

## 9. Alterações nesta Política de Privacidade

Podemos atualizar esta Política de Privacidade periodicamente. Se fizermos alterações materiais, atualizaremos a data de "Última atualização" no topo deste documento. Recomendamos que você revise esta Política de Privacidade periodicamente.

Se uma alteração modificar materialmente como os dados são tratados (por exemplo, se uma versão futura introduzir análises ou processamento no servidor), notificaremos os usuários através da interface da extensão antes que a alteração entre em vigor.

## 10. Transparência de código aberto

O NuModeX Ext Maker é licenciado sob dupla licença Apache License 2.0 e Marketplace Publication License. O código-fonte está disponível publicamente, permitindo que qualquer pessoa verifique nossas práticas de privacidade inspecionando o código diretamente.

## 11. Entre em contato

Se você tiver alguma dúvida ou preocupação sobre esta Política de Privacidade, entre em contato conosco:

**SoraVantia GK**
E-mail: numodex@soravantia.com
Website: https://numodex.com/numodexextmaker

## 12. Resumo

| Pergunta | Resposta |
|----------|----------|
| Vocês coletam dados pessoais? | Não |
| Vocês usam cookies ou rastreamento? | Não |
| Vocês têm um servidor backend? | Não |
| Onde meus dados são armazenados? | Apenas localmente no seu navegador |
| Quem pode ver meus dados? | Apenas você, no seu dispositivo |
| Dados são enviados à SoraVantia GK? | Não, nunca |
| Dados são enviados a provedores de IA? | Sim, suas instruções são enviadas diretamente ao provedor de IA selecionado, usando sua própria chave de API |
| Posso excluir meus dados? | Sim, desinstalando a extensão ou usando as opções de exclusão no aplicativo |
| Vocês vendem dados? | Não |
| O código-fonte está disponível? | Sim, sob dupla licença Apache License 2.0 e Marketplace Publication License |

---

Copyright 2026 SoraVantia GK. All rights reserved.
