pipeline {
    agent any

    tools { 
        nodejs '21.7.3'
    }
    
    stages {
        stage('Clone repository') {
            steps {
                sh 'npm version'
            }
        }
        
        
    }
}
