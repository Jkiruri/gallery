pipeline {
    agent any
    tools { 
        nodejs '21.7.3'
    }

    stages {
        stage('Clone repository') {
            steps {
                git branch: 'master', url: 'https://github.com/Jkiruri/gallery'
            }
        }

        stage('Basic Pipeline') {
            steps {
                sh 'npm install'
            }
        }

        stage('Tests') {
            steps {
                sh 'npm install -g mocha'
                sh 'npm test'
        }
}

    }

    post {
        success {
            script {
                def buildId = env.BUILD_ID
                def renderUrl = "https://gallery-5qqg.onrender.com/"
                def slackMessage = "Build ID: ${buildId}\nDeployed to Render: ${renderUrl}\nMilestone 3 deployed!"
                slackSend channel: '#james_ip1', message: slackMessage
            }
        }

        failure {
            mail to: 'jamesnjunge45@gmail.com', subject: 'Tests failed', body: 'The tests failed!'
        }
    }
}
