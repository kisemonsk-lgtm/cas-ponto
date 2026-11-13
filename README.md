# CAS — Sistema de Ponto

Sistema web de controle de ponto para a **CAS Construtora de Armazéns e Silos**.

Site 100% estático (HTML + CSS + JavaScript), sem servidor e sem banco de dados:
os dados ficam salvos no próprio navegador (`localStorage`).

## Recursos

- **Ponto do dia** — entrada, saída para almoço, retorno e saída de cada funcionário, com cálculo automático das horas.
- **Jornada de 7h por dia** (07:30–12:00 / 13:30–16:30), com seletor para 6h, 7h, 7h20 ou 8h.
- **Horas extras** em aba própria: extra manual (`2:00`, `1,5`) ou calculada pela saída real, fator 50% ou 100%, e valor em R$ por hora.
- **Folha do mês** — grade com todos os funcionários × dias, com total, saldo e extras.
- **Folha individual** — folha do **dia 1 ao dia 30** de cada funcionário, uma página A4 pronta para imprimir e assinar.
- **Seleção de funcionários** (caixinhas, marcar todos, marcar filtrados).
- **Ordenação** por número de cadastro, nome (A–Z), função (A–Z) ou setor.
- **Ocorrências**: F falta, AT atestado, FE férias, FO folga, com observação livre.
- **Modo escuro / claro** (a impressão sai sempre em papel branco).
- **Backup**: exportar e importar os dados em `.json`.

## Como usar

1. Baixe os arquivos da pasta (ou clone o repositório).
2. Abra o `index.html` no navegador — não precisa instalar nada.
3. Para publicar, sirva a pasta em qualquer hospedagem de site estático
   (GitHub Pages, por exemplo: Settings → Pages → Deploy from branch → `main` / root).

## Arquivos

| Arquivo | Conteúdo |
|---|---|
| `index.html` | Estrutura da página e as abas |
| `estilo.css` | Estilos, tema claro/escuro e regras de impressão A4 |
| `app.js` | Toda a lógica: lançamentos, cálculos, folhas, impressão |
| `funcionarios.js` | Lista inicial dos 38 funcionários (nome e função) |
| `logo-cas.png` | Logo da empresa |

## Usar no tablet ou celular

O sistema é responsivo: funciona em computador, **tablet** (iPad ou Android) e celular.

1. Abra o endereço publicado no navegador do tablet (Chrome, Safari ou Edge).
2. Toque em **"Adicionar à tela de início"** (ou "Instalar aplicativo") para abrir como um app, em tela cheia.
3. Os botões e campos têm tamanho de toque, e as tabelas rolam na horizontal sem quebrar.
4. Depois do primeiro acesso ele funciona **sem internet** (service worker guarda os arquivos).
5. Os dados ficam salvos no navegador do aparelho — para levar de um aparelho a outro, use **Exportar/Importar** (ou **Baixar/Carregar lista** para os funcionários).

## Observações

- Os dados ficam **no navegador de cada computador**. Para levar de um para outro, use **Exportar** e depois **Importar**.
- A impressão da folha individual é sempre em **uma única página A4**.
