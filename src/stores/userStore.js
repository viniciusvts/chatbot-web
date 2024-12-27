import {defineStore} from 'pinia';
import User from '@/models/User';

export const userStore = defineStore('user', {
    state: () => ({
        user: new User('self', 'Visitante', false),
    }),
    getters: {
        id: (state) => state.user.id,
        name: (state) => state.user.name,
        imageUrl: (state) => state.user.imageUrl,
    },
    actions: {
        getUser() {
            return this.user;
        },
        setUser(name, imageUrl) {
            this.user.name = name;
            this.user.imageUrl = imageUrl;
        },
    },
    persist: true
});