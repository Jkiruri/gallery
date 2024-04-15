pipeline {
    agent any
    tools { 
        nodejs '21.7.3'
    }

    stages {
        stage('Clone repository') {
            steps {
                git branch: 'master', url: 'https://github.com/Jkiruri/gallery'
            }
        }

        stage('Basic Pipeline') {
            steps {
                sh 'npm install'
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
