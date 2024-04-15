pipeline {
    agent any

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
            mail to: 'your-email@example.com', subject: 'Tests failed', body: 'The tests failed!'
        }
    }
}
