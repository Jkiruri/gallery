pipeline {
    agent any
    
    stages {
        stage('Set up') {
            steps {
                git url: 'https://github.com/Jkiruri/gallery'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        
    }
}
