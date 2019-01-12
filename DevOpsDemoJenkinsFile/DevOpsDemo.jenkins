node('master') {
    stage('Build') {
        def repourl = 'https://github.com/DebuRock/DevOps_Practitionar.git'
        checkout(
            [$class: 'GitSCM', 
            branches: [[name: '*/master']], 
            doGenerateSubmoduleConfigurations: false, 
            extensions: [], submoduleCfg: [], 
            userRemoteConfigs: [
                [credentialsId: 'Gituser', 
                url: 'https://github.com/DebuRock/DevOps_Practitionar.git']
            ]
            ])
        
        //Build the application
        dir('DevOpsDemoApplication') {
            bat 'mvn clean install'
        }
    }
}