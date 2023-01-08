<template>
    <q-dialog ref="dialogRef" @hide="onDialogHide" persistent>
        <q-card style="min-width: 50vw">
            <q-card-section>
                <div class="text-h6">新增 / 修改 事件</div>
            </q-card-section>

            <q-separator/>

            <q-card-section style="max-height: 50vh" class="scroll q-gutter-y-md">
                <q-input v-model="form.mark" label="备注" flat dense standout/>
                <q-input v-model="form.params" label="参数" flat dense standout/>
                <div class="q-gutter-y-xs text-grey-8 full-width">
                    <div class="text-subtitle2">事件通知</div>
                    <div class="row" v-for="(item, key) of form.target">
                        <q-input class="col" v-model="form.target[key]" flat dense standout/>
                        <q-btn class="q-ml-sm" flat label="X" @click="removeTarget(key)"/>
                    </div>
                    <q-btn class="full-width" flat color="primary" label="+" @click="addTarget"/>
                </div>
            </q-card-section>

            <q-separator/>

            <q-card-actions align="right">
                <q-btn flat color="primary" label="取消" @click="onDialogCancel"/>
                <q-btn flat color="primary" label="确认" @click="onOKClick"/>
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script lang="ts" setup>
import {useDialogPluginComponent} from 'quasar'
import {PropType, ref} from "vue";
import {EventCenterEntity} from "src/model/entity/event-center.entity";
import {api} from "boot/axios";

const props = defineProps({
    entity: {type: Object as PropType<EventCenterEntity>}
})

defineEmits([
    ...useDialogPluginComponent.emits
])
const form = ref<EventCenterEntity>()

if (props.entity && props.entity.id) {
    const json_data: EventCenterEntity = JSON.parse(JSON.stringify(props.entity))
    form.value = {mark: json_data.mark, params: json_data.params, target: json_data.target}
} else {
    form.value = {mark: "", params: "", target: [""]};
}

const addTarget = () => {
    form.value?.target.push("");
}
const removeTarget = (key: number) => {
    form.value?.target.splice(key, 1);
}


const {dialogRef, onDialogHide, onDialogOK, onDialogCancel} = useDialogPluginComponent()

const onOKClick = async () => {
    if (props.entity && props.entity.id) {
        await api.patch(`/event-center/${props.entity.id}`, form.value);
    } else {
        await api.post(`/event-center`, form.value);
    }
    onDialogOK()
}
</script>
