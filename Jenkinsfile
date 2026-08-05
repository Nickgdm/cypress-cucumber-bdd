pipeline {
    agent any
    tools { nodejs 'nodejs'}

    stages {
        stage('Clonar o hub de leitura integrado') {
            steps{
                bat '''
                    if exist hub-de-leitura-integrado2 rmdir /s /q hub-de-leitura-integrado2
                    git clone https://github.com/EBAC-QE/hub-de-leitura-integrado2.git
                '''
            }
        }
        stage('Instalar dependências do projeto') {
            steps{
                dir('hub-de-leitura-integrado2') {
                    bat '''
                        call npm install
                        start /B npm start
                    '''
                }
            }
        }
        stage('Clonar o projeto de teste') {
            steps{
                bat '''
                    if exist atividade-cucumber-cypress rmdir /s /q atividade-cucumber-cypress
                    git clone https://github.com/Nickgdm/atividade-cucumber-cypress.git
                '''
            }
            
        }
        stage('Instalar dependências do projeto de teste') {
            steps{
                dir('atividade-cucumber-cypress') {
                    bat 'call npm install'
                }
            }
        }
        stage('Executar os testes automatizados') {
            steps{
                dir('atividade-cucumber-cypress') {
                    bat 'call npm test'
                }
            }
        }
    }
    post{
        always{
            dir('atividade-cucumber-cypress') {
                    archiveArtifacts artifacts: 'cypress/screenshots/**/*.*, cypress/videos/**/*.*', allowEmptyArchive: true
                    allure includeProperties: false, jdk: '', results: [[ path: 'allure-report']]
                }
            bat 'taskkill /F /IM node.exe || exit 0'
        }
    }
}