pipeline {

  agent any

  stages {

    stage("build docker image") {
      
      steps {

        echo "Building docker image..."
        withCredentials([usernamePassword(credentialsId: 'Dockerhub', passwordVariable: 'PASS', usernameVariable: 'USER')]){
          sh 'docker build -t ahmedvii/meme-app:v1.0 .'
          sh "echo $PASS | docker login -u $USER --password-stdin"
          sh 'docker push ahmedvii/meme-app:v1.0'
        }

      }
    }

    stage("test") {
      
      steps {

        echo "testing the pipeline..."

      }
    }

    stage("deploy") {
      
      steps {

        echo "deploying the pipeline..."

      }
    }
  }
}