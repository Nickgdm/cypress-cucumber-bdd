# language: pt

Funcionalidade: Login no Hub de Leitura
Como usuário do sistema
Quero realizar login
Para acessar o sistema

Cenário: Login com credenciais válidas
    Dado que estou na página de login
    Quando informo o e-mail "admin@biblioteca.com"
    E informo a senha "admin123"
    E clico no botão Entrar
    Então devo ser redirecionado para a página inicial

Cenário: Login com credenciais inválidas
    Dado que estou na página de login
    Quando informo o e-mail "admin@biblioteca.com"
    E informo a senha "senhaErrada"
    E clico no botão Entrar
    Então devo visualizar a mensagem "Email ou senha incorretos."