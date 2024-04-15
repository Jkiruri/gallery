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
                git branch: 'test', changelog: false, poll: false
                sh 'npm test'
                git branch: 'main', changelog: false, poll: false
            }
        }
    }
}
