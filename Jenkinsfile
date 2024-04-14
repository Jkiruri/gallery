pipeline {
    agent any

    tools { 
        nodejs 'npm'
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
