<template>
    <q-layout view="hHh lpR fFf" class="bg-grey-1">
        <q-header elevated class="bg-white text-grey-8 q-py-xs" height-hint="58">
            <q-toolbar>
                <q-btn flat dense round @click="toggleLeftDrawer" aria-label="Menu" icon="menu"/>

                <q-btn flat no-caps no-wrap class="q-ml-xs" v-if="$q.screen.gt.xs">
                    <q-toolbar-title shrink class="text-weight-bold">
                        管理中心
                    </q-toolbar-title>
                </q-btn>


                <q-space/>

                <div class="q-gutter-sm row items-center no-wrap">
                </div>
            </q-toolbar>
        </q-header>

        <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-2" :width="240">
            <q-scroll-area class="fit">
                <q-list padding>
                    <template v-for="item in linkList">
                        <template v-if="item.button">
                            <q-item-label v-if="item.title" header class="text-weight-bold text-uppercase">
                                {{ item.title }}
                            </q-item-label>

                            <div class="q-px-md text-grey-9">
                                <div class="row items-center q-gutter-x-sm q-gutter-y-xs">
                                    <a v-for="button in item.linkList" :key="button.text" class="YL__drawer-footer-link"
                                       href="javascript:void(0)">
                                        {{ button.text }}
                                    </a>
                                </div>
                            </div>
                        </template>
                        <template v-else>
                            <q-item-label v-if="item.title" header class="text-weight-bold text-uppercase">
                                {{ item.title }}
                            </q-item-label>

                            <q-item v-for="link in item.linkList" :key="link.text" v-ripple clickable :to="link.to">
                                <q-item-section avatar>
                                    <q-icon color="grey" :name="link.icon"/>
                                </q-item-section>
                                <q-item-section>
                                    <q-item-label>{{ link.text }}</q-item-label>
                                </q-item-section>
                            </q-item>

                            <q-separator v-if="item.endLine" class="q-my-md"/>
                        </template>
                    </template>
                </q-list>
            </q-scroll-area>
        </q-drawer>

        <q-page-container>
            <router-view/>
        </q-page-container>
    </q-layout>
</template>

<script lang="ts" setup>
import {ref} from 'vue'

const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
    leftDrawerOpen.value = !leftDrawerOpen.value
}

const linkList = ref([
    {
        title: "",
        endLine: true,
        linkList: [
            {icon: 'home', text: '主页', to: "/"},
            {icon: 'menu', text: '事件管理', to: "/event-center"},
            {icon: 'settings', text: '设置', to: "/setting"},
        ]
    },
    // {
    //     title: "",
    //     endLine: true,
    //     linkList: [
    //         {icon: 'folder', text: 'Library'},
    //     ]
    // },
    // {
    //     title: "MORE FROM YOUTUBE",
    //     endLine: true,
    //     linkList: [
    //         {icon: 'local_movies', text: 'Movies & Shows'},
    //     ]
    // },
    // {
    //     title: "",
    //     endLine: true,
    //     linkList: [
    //         {icon: 'settings', text: 'Settings'},
    //     ]
    // },
    // {
    //     title: "",
    //     button: true,
    //     endLine: false,
    //     linkList: [
    //         {text: 'About'},
    //     ]
    // },
    // {
    //     title: "",
    //     button: true,
    //     endLine: false,
    //     linkList: [
    //         {text: 'About'},
    //     ]
    // }
])

</script>

<style lang="sass">
.YL
    &__toolbar-input-container
        min-width: 100px
        width: 55%

    &__toolbar-input-btn
        border-radius: 0
        border-style: solid
        border-width: 1px 1px 1px 0
        border-color: rgba(0, 0, 0, .24)
        max-width: 60px
        width: 100%

    &__drawer-footer-link
        color: inherit
        text-decoration: none
        font-weight: 500
        font-size: .75rem

        &:hover
            color: #000
</style>
Footer
