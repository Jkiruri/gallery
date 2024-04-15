pipeline {
    agent any
    tools { 
        nodejs '21.7.3'
    }

    stages {
        stage('Clone repository') {
            steps {
                git 'https://github.com/Jkiruri/gallery'
            }
        }

        stage('Basic Pipeline') {
            steps {
                sh 'npm install'
                sh 'node server'
            }
        }

        stage('Tests') {
            steps {
                sh 'npm test'
            }
        }
    }

    post {
        failure {
            mail to: 'jamesnjunge45@gmail.com', subject: 'Tests failed', body: 'The tests failed!'
        }
    }
}
