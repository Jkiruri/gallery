pipeline {
    agent any
    
    stages {
        stage('Set up') {
            steps {
                git url: 'https://github.com/Jkiruri/gallery'
            }
        }
        
        stage('Basic Pipeline') {
            steps {
                sh 'npm install'
               
                // Assuming deployment to Render is done using a specific command or script
            }
        }
        
        stage('Tests') {
            steps {
                git branch: 'test', url: 'https://github.com/Jkiruri/gallery', changelog: false, poll: false
                sh 'npm test'
                git branch: 'main', url: 'https://github.com/Jkiruri/gallery', changelog: false, poll: false
            }
        }
        
        
    }
}
