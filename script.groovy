def buildDocker() {
  echo "building in progress.."
  withCredentials([usernamePassword(credentialsId: 'Dockerhub', passwordVariable: 'PASS', usernameVariable: 'USER')]){
          sh 'docker build -t ahmedvii/meme-app:v1.0 .'
          sh "echo $PASS | docker login -u $USER --password-stdin"
          sh 'docker push ahmedvii/meme-app:v1.0'
  
}
}

def testApp() {
  echo "testing app.."
}

def deployApp() {
  echo "deploying app.."
  def dockerCmd = 'sudo docker run -p 3000:3000 -d ahmedvii/meme-app:v1.0'
  sshagent(['EC2']) {
    sh "ssh -o StrictHostKeyChecking=no ubuntu@16.170.239.130 ${dockerCmd}"
}
}

return this