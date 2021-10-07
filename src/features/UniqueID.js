// Create Unique id for create relationship between our <label> and <input> by usind an id
let UUID = 0

export default function UniqueID() {
  const getID = () => {
    UUID++
    return UUID
  }

  return {
    getID,
  }
}
