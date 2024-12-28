<script setup>
  import ChatBaloon from "@/components/ChatBaloon.vue";
</script>
<template>
  <div class="bg-body-secondary">
    <div class="container">
      <div class="row overflow-x-auto">
        <ChatBaloon v-for="(msg, index) in messages"
          :key="index"
          :chatMessage="msg"
        />
      </div>
      <div class="row w-75 p-5 position-absolute bottom-0">
        <div class="col-12 col-md-9">
          <input class="form-control" placeholder="Type a message"
          v-model="message" @keyup.enter="sendMessage">
        </div>
        <button class="btn btn-primary col-12 col-md-3" @click="sendMessage">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
import ChatMessage from '@/models/ChatMessage';
import { userStore } from '@/stores/userStore';
import { v1Ai } from "@/utils/apiInscricao";

export default {
  data() {
      return {
          message: '',
          messages: [],
      };
  },
  methods: {
      sendMessage() {
        const messageTrimmed = this.message.trim();
        this.message = '';
        if (messageTrimmed == '') return;
        this.messages.push(new ChatMessage(userStore().getUser(), messageTrimmed));
        v1Ai(messageTrimmed).then((chatMessage) => {
          this.messages.push(chatMessage);
        });
      },
  },
};
</script>
