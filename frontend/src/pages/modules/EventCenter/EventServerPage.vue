<template>
    <q-page>
        <q-toolbar class="bg-teal text-white">

            <q-breadcrumbs active-color="white">
                <q-breadcrumbs-el label="Home" icon="home" to="/"/>
                <q-breadcrumbs-el label="事件管理"/>
            </q-breadcrumbs>
            <q-space/>

            <q-btn flat round dense icon="add" @click="openFormDialog()"/>
        </q-toolbar>

        <q-markup-table flat dense separator="cell" bordered class="text-left">
            <thead>
            <tr>
                <th>#</th>
                <th>备注</th>
                <th>参数</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item of entityList">
                <td>{{ item.id }}</td>
                <td>{{ item.mark }}</td>
                <td>{{ item.params }}</td>
                <td>
                    <q-btn flat dense label="编辑" @click="openFormDialog(item)"/>
                    <q-btn flat dense label="移除" @click="removeItem(item.id)"/>
                </td>
            </tr>
            </tbody>
        </q-markup-table>
    </q-page>
</template>

<script lang="ts" setup>

import {onMounted, ref} from "vue";
import {api} from "boot/axios";
import EventServerDialog from "pages/modules/EventCenter/EventServerDialog.vue";
import {useQuasar} from "quasar";
import {EventCenterEntity} from "src/model/entity/event-center.entity";

const $q = useQuasar();

const entityList = ref<EventCenterEntity[]>([])

const refreshList = async () => {
    let res = await api.get("/event-center")
    entityList.value = res.data;
}

const openFormDialog = (data?: EventCenterEntity) => {
    $q.dialog({
        component: EventServerDialog,

        // props forwarded to your custom component
        componentProps: {
            entity: data,
        }
    }).onOk(() => {
        refreshList();
    })
}

const removeItem = async (id: number) => {
    await api.delete(`/event-center/${id}`)
    await refreshList();
}

onMounted(() => {
    refreshList();
})
</script>

<style scoped>

</style>
