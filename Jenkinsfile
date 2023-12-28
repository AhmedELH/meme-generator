pipeline {

  agent any

  stages {
    stage("init") {
      steps {
        script {
          gv = load "script.groovy"
        }
      }
    }
    stage("build docker") {
      steps {
        script {
          gv.buildDocker()
        }
      }
    }
    stage("test") {
      steps{
        script{
          gv.testApp()
        }
      }
    }
    stage("deploy") {
      steps{
        script{
          gv.deployApp()
        }
      }
    }
  } 
}