<template>
  <div class="container">
    <div class="row">
      <p>{{ chatMessage.message}}</p>
    </div>
  </div>
</template>

<script>
import ChatMessage from '@/models/ChatMessage';

export default {
  props: {
    chatMessage: {
      type: ChatMessage,
      required: true
    }
  }
};
</script>