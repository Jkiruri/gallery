pipeline {
    agent any
    
    stages {
        stage('Set up') {
            steps {
                git 'https://github.com/Jkiruri/gallery'
            }
        }
        
        stage('Basic Pipeline') {
            steps {
                sh 'npm install'
                sh 'node server'
                // Assuming deployment to Render is done using a specific command or script
            }
        }
        
        stage('Tests') {
            steps {
                git branch: 'test', changelog: false, poll: false
                sh 'npm test'
                git branch: 'main', changelog: false, poll: false
            }
        }
        
        stage('Slack Integration') {
            steps {
                // Configure Slack integration
                // Ensure Jenkins is configured to send notifications to Slack channel
                // Send Slack message on successful deploy
                // Include build ID and Render link in Slack message
                // Make a change to the landing page
                // Add "MILESTONE 4" to the landing page
                // Push changes to trigger pipeline
            }
        }
    }
}
