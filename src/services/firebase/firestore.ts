import firestore from "@react-native-firebase/firestore";

export function getCollection(collectionName: string) {
  return firestore().collection(collectionName);
}

export function getDocument(collectionName: string, documentId: string) {
  return getCollection(collectionName).doc(documentId).get();
}

export function createDocument(
  collectionName: string,
  documentId: string,
  document: any
) {
  return getCollection(collectionName).doc(documentId).set(document);
}

export function updateDocument(
  collectionName: string,
  documentId: string,
  document: any
) {
  return getCollection(collectionName).doc(documentId).update(document);
}
