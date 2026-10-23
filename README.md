# Automação BDD com Cypress e Cucumber

Projeto de estudo para praticar cenários BDD escritos em Gherkin e sua integração com testes automatizados de interface.

## Objetivos
- Escrever cenários em Gherkin.
- Relacionar passos descritos a ações automatizadas.
- Executar e analisar testes com Cypress.

## Tecnologias
- JavaScript, Node.js, Cypress e Cucumber/Gherkin.
- Jenkinsfile disponível para integração contínua.

## Pré-requisitos
- Node.js e npm.
- Aplicação alvo acessível conforme a configuração do teste.
- Dependências instaladas.

## Instalação e execução
```bash
npm install
npx cypress open
```
Ou, em modo headless:
```bash
npx cypress run
```
Verifique `package.json` e `cypress.config.js` para confirmar a integração do Cucumber e os comandos suportados.

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
Descrever comportamentos de forma legível, implementar os passos correspondentes e associar requisitos a verificações executáveis.

## Boas práticas adotadas
- Cenários expressos em linguagem Gherkin.
- Configuração versionada.
- Resultados de execução organizados quando gerados.

## 📚 Aprendizados
A atividade permite praticar BDD, Gherkin e Cypress, estruturando comportamentos esperados em cenários que podem ser automatizados e revisados.

## Considerações finais
A execução de arquivos `.feature` exige a integração do Cucumber com o Cypress. Confirme as dependências e os step definitions presentes no projeto.

---

## 🎓 Formação
Atividade desenvolvida durante a formação profissionalizante em **Quality Assurance (QA) pela EBAC — Escola Britânica de Artes Criativas e Tecnologia**.