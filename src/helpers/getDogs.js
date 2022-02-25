import requestDogApi from '@/api/requestDogApi'

const defineDogArray = () => {
   const dogArray = Array.from(Array(172))
   return dogArray.map((_, index) => index + 1)
}

const getDogs = async () => {
   const randomPositions = defineDogArray().sort(() => Math.random() - 0.5)
   const dogs = await getDogData(randomPositions.slice(0, 4))
   return dogs
}
const getDogData = async ([d1, d2, d3, d4] = []) => {
   const { data } = await requestDogApi.get()
   const dogNames = [
      {
         id: data[d1].id,
         name: data[d1].name,
         url: data[d1].image.url,
      },
      {
         id: data[d2].id,
         name: data[d2].name,
         url: data[d2].image.url,
      },
      {
         id: data[d3].id,
         name: data[d3].name,
         url: data[d3].image.url,
      },
      {
         id: data[d4].id,
         name: data[d4].name,
         url: data[d4].image.url,
      },
   ]
   return dogNames
}
export default getDogs
