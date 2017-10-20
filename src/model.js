import Loki from 'lokijs'

const COLLECTION_NAME = 'things'
const dataBase = new Loki('./db.json', {
  autoload: true,
  autoloadCallback: databaseInitialize
})

export function save (registry) {
  getCollection().insert(registry)
  dataBase.saveDatabase()
}

export function getAll () {
  return getCollection().find({});
}

function createCollection () {
  dataBase.addCollection(COLLECTION_NAME)
}

function getCollection () {
  return dataBase.getCollection(COLLECTION_NAME)
}

function databaseInitialize () {
  let collection = getCollection()
  !collection && createCollection()
}
