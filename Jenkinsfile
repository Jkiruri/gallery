pipeline {
    agent any

    tools { 
        node 'Node'
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
