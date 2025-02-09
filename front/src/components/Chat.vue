<template>
    <div>
      <h1>Chat</h1>
      <div v-for="message in messages" :key="message.id">
        {{ message.content }}
      </div>
      <input v-model="messageContent" @keyup.enter="sendMessage" placeholder="Type a message"/>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useQuery, useMutation, useSubscription } from '@vue/apollo-composable';
  import gql from 'graphql-tag';
  const GET_MESSAGES = gql`
    query {
      messages {
        id
        content
      }
    }
  `;
  const POST_MESSAGE = gql`
    mutation($content: String!) {
      postMessage(content: $content)
    }
  `;
  const MESSAGE_POSTED = gql`
    subscription {
      messagePosted {
        id
        content
      }
    }
  `;
  export default {
    setup() {
      const { result, refetch } = useQuery(GET_MESSAGES);
      const messages = ref([]);
      const messageContent = ref('');
      const { mutate } = useMutation(POST_MESSAGE);
      const { onResult } = useSubscription(MESSAGE_POSTED, {}, (data) => {
        messages.value.push(data.messagePosted);
      });
      onMounted(() => {
        if (result.value) {
          messages.value = result.value.messages;
        }
      });
      const sendMessage = async () => {
        if (messageContent.value.trim()) {
          await mutate({ content: messageContent.value });
          messageContent.value = '';
        }
      };
      return {
        messages,
        messageContent,
        sendMessage,
      };
    },
  };
  </script>
  <style>
  /* Add some styling if needed */
  </style>