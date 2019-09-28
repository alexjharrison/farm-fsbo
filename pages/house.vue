<template>
  <main>
    <div class="custom-container p-4">
      <div class="d-flex">
        <div class="sidebar">
          <h1 class="border-bottom mb-3 d-inline-block">House Tour</h1>
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
        <div class="room-data px-5 text-center flex-grow-1 mh-697 position-relative">
          <div class="play-pause">
            <fa size="lg" :icon="isPaused? 'play':'pause'" @click="togglePause" />
          </div>
          <h2>{{roomInfo.name}}</h2>
          <h4 class="mb-4">{{roomInfo.blurb}}</h4>
          <b-carousel
            ref="carousel"
            controls
            fade
            indicators
            @sliding-start="isSliding=true;incrementRoom($event)"
            @sliding-end="isSliding=false"
            :interval="interval"
            :img-height="768"
          >
            <b-carousel-slide
              v-for="i in roomInfo.numImages"
              :key="i"
              :img-src="`/images/${roomInfo.name}/${i}.JPG`"
              :img-alt="roomInfo.name + ' slide image'"
            />
          </b-carousel>
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
      interval: 3000,
      isSliding: false,
      isPaused: false,
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
    }
  },
  methods: {
    reset(i, j) {
      this.floorIndex = i
      this.roomIndex = j
      this.expandedFloors = [...new Array(RoomData.length).fill(false)]
      this.$set(this.expandedFloors, i, true)
      this.$refs.carousel.setSlide(0)
      this.$refs.carousel.start()
      this.isPaused = false
      if (
        this.RoomData[this.floorIndex].rooms[this.roomIndex].numImages === 1
      ) {
        console.log('hi')
        setTimeout(() => this.incrementRoom(0), this.interval)
      }
    },
    incrementRoom(i) {
      // @ sliding end
      // if image index = 0, increment room
      if (this.RoomData[this.floorIndex].length === 1) {
        console.log('only one')
      }
      if (
        this.isLastRoomInFloor &&
        this.floorIndex === this.RoomData.length - 1
      ) {
        this.reset(0, 0)
      }
      if (this.isLastRoomInFloor && i === 0) {
        // this.floorIndex++
        // this.roomIndex = 0
        this.reset(this.floorIndex + 1, 0)
      } else if (i === 0) {
        this.roomIndex++
        if (
          this.RoomData[this.floorIndex].rooms[this.roomIndex].numImages === 1
        ) {
          console.log('hi')
          setTimeout(() => this.incrementRoom(0), this.interval)
        }
      }
    },
    togglePause() {
      if (this.isPaused) {
        this.$refs.carousel.start()
      } else {
        this.$refs.carousel.pause()
      }
      this.isPaused = !this.isPaused
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
.play-pause {
  position: absolute;
  right: 0;
  color: #777;
  cursor: pointer;
  background-color: #ddd;
  padding: 15px 17px 15px 18px;
  border-radius: 50%;
}
</style>