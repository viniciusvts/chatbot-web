<template>
  <div class="card mb-3 w-75"
    :class="{'ms-auto bg-dark-subtle': chatMessage.sender.id == userId,
      'bg-body': chatMessage.sender.id != userId
    }"
  >
    <div class="card-body">
      {{ chatMessage.message }}
    </div>
  </div>
</template>

<script>
import ChatMessage from '@/models/ChatMessage';
import { userStore } from '@/stores/userStore';

export default {
  data() {
      return {
          userId: userStore().id,
      };
  },
  props: {
    chatMessage: {
      type: ChatMessage,
      required: true
    }
  }
};
</script>