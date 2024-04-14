pipeline {
    agent any

    tools{ 
   nodejs 'Node'
}
    
    stages {
        stage('clone repository') {
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
