pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning the repository...'
                git 'https://github.com/harshal2390/freelancing.git'
            }
        }
        
        stage('Install Backend Dependencies') {
            steps {
                echo 'Installing backend dependencies...'
                dir('backend') {
                    bat 'npm install'
                }
            }
        }
        
        stage('Run Backend Server') {
            steps {
                echo 'Starting backend server...'
                dir('backend') {
                    bat 'start npm start'
                }
            }
        }
        
        stage('Prepare Frontend') {
            steps {
                echo 'Frontend ready to be served...'
            }
        }
    }
}
