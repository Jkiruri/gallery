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
        
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
    }
}
