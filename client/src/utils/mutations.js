import { gql } from '@apollo/client';


export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    } 
`;

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_THOUGHT = gql`
    mutation addThought($thoughtText: String!) {
        addThought(thoughtText: $thoughtText) {
            _id
            thoughtText
            thoughtAuthor
            createdAt
        }
    }
`
export const REMOVE_THOUGHT = gql `
mutation RemoveThought($thoughtId: ID!) {
    removeThought(thoughtId: $thoughtId) {
      createdAt
      thoughtAuthor
      _id
    }
  }`

export const UPDATE_THOUGHT = gql `
mutation Mutation($thoughtId: ID!, $thoughtText: String!) {
    updateThought(thoughtId: $thoughtId, thoughtText: $thoughtText) {
      _id
      createdAt
      thoughtAuthor
      thoughtText
    }
  }`
  
export const USER_RESPONSE = gql `
mutation Mutation($sleepQuality: Int, $headaches: Int, $performance: Int, $workload: Int, $hobbies: Int, $stress: Int, $therapy: Int, $outside: Int) {
    userSurveyResponse(sleep_quality: $sleepQuality, headaches: $headaches, performance: $performance, workload: $workload, hobbies: $hobbies, stress: $stress, therapy: $therapy, outside: $outside) {
      avgValue
      survey {
        _id
      }
    }
  }`