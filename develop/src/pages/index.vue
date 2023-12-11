<script setup>

</script>

<template>
  <div class="flex h-screen bg-gradient-to-br from-gray-600 to-gray-900">
    <VitePwaManifest/>
    <qrcode-stream @detect="onQrDetect" class="border"></qrcode-stream>
    <qrcode-drop-zone class="border border-lime-300"></qrcode-drop-zone>
    <qrcode-capture class="border border-yellow-400"></qrcode-capture>
  </div>
</template>

<script>
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'

export default {
  components: {
    QrcodeStream,
    QrcodeDropZone,
    QrcodeCapture
  },
  methods: {
    onQrDetect(detectedCodes){
      console.log(detectedCodes) 
    },
  },
}
</script>
