<pre>
╔═════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║                              AUTOMAÇÃO BDD COM CYPRESS, CUCUMBER E GHERKIN                              ║
╚═════════════════════════════════════════════════════════════════════════════════════════════════════════╝
</pre>

Projeto de estudo para praticar cenários BDD escritos em Gherkin e sua integração com testes automatizados de interface.

## Sobre o projeto

O repositório reúne a configuração e os arquivos necessários para relacionar comportamentos descritos em linguagem Gherkin a passos automatizados com Cypress.

## Objetivos

- Escrever cenários em Gherkin.
- Relacionar passos descritos a ações automatizadas.
- Executar e analisar testes com Cypress.

## Tecnologias e ferramentas

- JavaScript
- Node.js e npm
- Cypress
- Cucumber/Gherkin
- Jenkinsfile disponível para estudo de integração contínua

## Pré-requisitos

- Node.js e npm instalados.
- Aplicação-alvo acessível conforme a configuração dos testes.
- Dependências do projeto instaladas.

## Instalação e execução

Instale as dependências:

```bash
npm install
```

Abra a interface do Cypress:

```bash
npx cypress open
```

Ou execute em modo headless:

```bash
npx cypress run
```
Verifique `package.json` e `cypress.config.js` para confirmar a integração do Cucumber e os comandos suportados pelo projeto.

## Estrutura do projeto

```text
Atividade-cucumber-cypress/
├── Jenkinsfile
├── cypress/
├── cypress.config.js
├── package.json
├── package-lock.json
├── allure-results/
└── README.md
```
## Desafios práticos

- Descrever comportamentos de forma legível.
- Implementar os passos correspondentes aos cenários.
- Associar requisitos a verificações executáveis.

## Boas práticas

- Expressar cenários em linguagem Gherkin.
- Manter a configuração versionada.
- Organizar os resultados de execução quando forem gerados.
- Confirmar as dependências e os step definitions antes de executar arquivos `.feature`.

## Aprendizados

A atividade permite praticar BDD, Gherkin e Cypress, estruturando comportamentos esperados em cenários que podem ser automatizados, executados e revisados.

## Considerações finais

A execução de arquivos `.feature` exige integração entre Cucumber e Cypress. Confirme as dependências e os step definitions presentes no projeto antes de executar os testes.

<pre>
╔═════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║  Este projeto foi desenvolvido como uma atividade facultativa no contexto dos estudos Quality Assurance ║
║  (QA), durante a formação da EBAC — Escola Britânica de Artes Criativas e Tecnologia. Seu objetivo é    ║
║  praticar e consolidar conhecimentos de automação com BDD, Gherkin e Cypress.                           ║
╚═════════════════════════════════════════════════════════════════════════════════════════════════════════╝
</pre>
