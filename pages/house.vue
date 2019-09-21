<template>
  <main>
    <div class="custom-container p-4">
      <div class="d-flex">
        <div class="sidebar">
          <h1>House Tour</h1>
          <div class="mt-2" v-for="({floor,rooms},i) in RoomData" :key="i">
            <div class="pointer d-flex" @click="$set(expandedFloors, i, !expandedFloors[i])">
              <fa :class="expandedFloors[i] ? 'caret down' : 'caret'" icon="caret-right" size="2x" />
              <h3 class="ml-2">{{floor}}</h3>
            </div>
            <b-collapse v-model="expandedFloors[i]" :id="`floor-${i}`">
              <b-list-group>
                <b-list-group-item
                  @click="reset(i,j)"
                  button
                  :active="floorIndex===i && roomIndex===j"
                  v-for="({name},j) in rooms"
                  :key="name"
                >{{name}}</b-list-group-item>
              </b-list-group>
            </b-collapse>
          </div>
        </div>
        <div class="room-data px-5 text-center flex-grow-1">
          <h2>{{roomInfo.name}}</h2>
          <h4 class="mb-4">{{roomInfo.blurb}}</h4>
          <b-carousel ref="carousel" controls fade indicators @sliding-end="incrementRoom">
            <b-carousel-slide
              v-for="i in roomInfo.numImages"
              :key="i"
              :img-src="`/images/${roomInfo.name}/${i}.JPG`"
            />
          </b-carousel>
          <div class="d-flex justify-content-between m-5">
            <b-button variant="info">Go to {{}}</b-button>
            <b-button variant="info">Go to {{}}</b-button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import RoomData from '@/assets/RoomData'
export default {
  asyncData() {
    return {
      RoomData,
      floorIndex: 0,
      roomIndex: 0,
      expandedFloors: Array(RoomData.length).fill(false)
    }
  },
  mounted() {
    this.$nextTick(() => this.reset(0, 0))
  },
  computed: {
    roomInfo() {
      return this.RoomData[this.floorIndex].rooms[this.roomIndex]
    },
    isLastRoomInFloor() {
      return this.RoomData[this.floorIndex].rooms.length - 1 === this.roomIndex
    },
    nextRoomInfo() {},
    prevRoomInfo() {}
  },
  methods: {
    reset(i, j) {
      this.floorIndex = i
      this.roomIndex = j
      this.expandedFloors = [...new Array(RoomData.length).fill(false)]
      this.$set(this.expandedFloors, i, true)
      this.$refs.carousel.setSlide(0)
    },
    incrementRoom(i) {
      // @ sliding end
      // if image index = 0, increment room
      console.log(i)
    }
  }
}
</script>

<style scoped>
.sidebar {
  min-width: 250px;
}
.caret {
  transition: 0.3s ease-out transform;
}
.caret.down {
  transform: rotate(90deg);
}
</style>