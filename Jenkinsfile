pipeline {

    agent any


    parameters {

        choice(
            name: 'ENV',
            choices: ['qa', 'uat', 'prod'],
            description: 'Select Environment'
        )


        choice(
            name: 'SUITE',
            choices: ['smoke', 'sanity', 'regression'],
            description: 'Select Test Suite'
        )

    }


    stages {


       

        stage('Install Dependencies') {

            steps {

                bat 'npm ci'

                bat 'npx playwright install'

            }

        }


        stage('Execute Tests') {

            steps {

                bat """
                set ENV=${params.ENV}
                npx playwright test --grep @${params.SUITE} --headed
                """

            }

        }

    }


    post {

        always {

            archiveArtifacts artifacts: '''
            logs/**
            playwright-report/**
            '''

        }

    }

}
