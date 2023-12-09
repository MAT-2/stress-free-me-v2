import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query Query {
    users {
      username
      email
      _id
      password
    }
  }
`;
export const QUERY_SINGLE_USER = gql `
query Query($username: String!) {
    user(username: $username) {
      email
      password
      _id
    }
  }`


  export const QUERY_THOUGHTS = gql`
  query Query {
    thoughts {
      _id
      createdAt
      thoughtAuthor
      thoughtText
    }
  }
`;

export const QUERY_SINGLE_THOUGHT = gql`
query Thought($thoughtId: ID!) {
    thought(thoughtId: $thoughtId) {
      thoughtText
      thoughtAuthor
      createdAt
      _id
    }
  }
`;

export const SURVEY = gql `
query Query($surveyId: ID!) {
    survey(surveyId: $surveyId) {
      _id
      avgValue
      headaches
      hobbies
      outside
      performance
      sleep_quality
      stress
      therapy
      workload
    }
  }`;
  
export const QUERY_ME = gql`
    query me {
      me {
        _id
        email
        thoughts {
          _id
          createdAt
          thoughtAuthor
          thoughtText
        }
        surveys {
          _id
          avgValue
          headaches
          hobbies
          outside
          performance
          sleep_quality
          stress
          therapy
          workload
        }
        username
      }
    }
`;

