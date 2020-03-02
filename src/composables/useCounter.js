import { ref } from '@vue/composition-api'

export default function() {
    const count = ref(0);

    return { count }
}